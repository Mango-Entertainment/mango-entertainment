import { type FC } from 'react'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import SeriesCard from '@/app/_ui/components/Series/SeriesCard'

type SeriesSectionComponentProps = {
  sectionData:
    | RouterOutputs['tmdb']['getSeries']
    | RouterOutputs['bookmarks']['getBookmarkedSeries']
    | undefined
  section: string
  bookmarks: RouterOutputs['bookmarks']['getBookmarks'] | undefined
}

const SeriesSectionComponent: FC<SeriesSectionComponentProps> = ({
  sectionData,
  section,
  bookmarks,
}) => {
  if (sectionData && sectionData?.results < 1) {
    return (
      <div className="ml-4 text-entertainment-pure-white">
        <h1 className="mb-4 text-xl font-light md:mb-6 md:text-3xl lg:mb-8">
          {section}
        </h1>
        <p className="text-center font-light opacity-75 lg:text-xl">
          No results found
        </p>
      </div>
    )
  }

  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:mb-6 md:text-3xl lg:mb-8">
        {section}
      </h1>
      <div className="mb-8 grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {sectionData?.data.map((selection) => {
          const bookmarked = bookmarks?.data.filter(
            (bookmark) => bookmark.selection_id === selection?.id,
          )[0] ?? { bookmarked: false }
          if (!selection) return
          return (
            <SeriesCard
              key={selection?.id}
              bookmarked={bookmarked?.bookmarked}
              series_card_data={selection}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SeriesSectionComponent
