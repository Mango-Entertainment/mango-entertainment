import { type FC } from 'react'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import SelectionCard from '@/app/_ui/components/SelectionCard'


type SeriesSectionComponentProps = {
  data: 
  | RouterOutputs['tmdb']['getSeries']
  | RouterOutputs['bookmarks']['getBookmarkedSeries']
  | undefined
  section: string
  bookmarks: RouterOutputs['bookmarks']['getBookmarks'] | undefined
}

const SeriesSectionComponent: FC<SeriesSectionComponentProps> = ({
  data,
  section,
  bookmarks,
}) => {
  if (data && data?.results < 1) {
    return (
      <div className="ml-4 text-entertainment-pure-white">
        <h1 className="mb-4 text-xl font-light md:text-3xl ">{section}</h1>
        <p className="text-center font-light opacity-75 md:mb-6 md:text-left lg:mb-8 lg:text-xl">
          No results found
        </p>
      </div>
    )
  }

  return (
    <div className=" mb-10 text-entertainment-pure-white">
      <h1 className="mb-4 ml-4 text-xl font-light md:mb-6 md:text-3xl lg:mb-8">
        {section}
      </h1>
      <div className="flex flex-wrap justify-center gap-4 text-entertainment-pure-white lg:ml-4 lg:justify-start lg:gap-8">
        {data?.data.map((selection) => {
          const bookmarked = bookmarks?.data.filter(
            (bookmark) => bookmark.selection_id === selection?.selection_id,
          )[0] ?? { bookmarked: false }
          if (!selection) return
          return (
            <SelectionCard
              key={selection.selection_id}
              selection_id={selection.selection_id}
              selection_title={selection.selection_title}
              selection_poster_path={selection.selection_poster_path}
              selection_year={selection.selection_year}
              bookmarked={bookmarked.bookmarked}
              selection_type="TV Series"
            />
          )
        })}
      </div>
    </div>
  )
}

export default SeriesSectionComponent
