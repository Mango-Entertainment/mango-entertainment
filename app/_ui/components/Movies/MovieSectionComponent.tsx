import { type FC } from 'react'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import MovieCard from '@/app/_ui/components/Movies/MovieCard'

type MovieSectionComponentProps = {
  sectionData:
    | RouterOutputs['tmdb']['getMovies']
    | RouterOutputs['bookmarks']['getBookmarkedMovies']
    | undefined
  section: string
  bookmarks: RouterOutputs['bookmarks']['getBookmarks'] | undefined
}

const MovieSectionComponent: FC<MovieSectionComponentProps> = ({
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
    <div className="text-entertainment-pure-white mb-10">
      <h1 className="ml-4 mb-4 text-xl font-light md:mb-6 md:text-3xl lg:mb-8">
        {section}
      </h1>
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start lg:ml-4 lg:gap-8 text-entertainment-pure-white">
        {sectionData?.data.map((selection) => {
          const bookmarked = bookmarks?.data.filter(
            (bookmark) => bookmark.selection_id === selection?.id,
          )[0] ?? { bookmarked: false }
          if (!selection) return
          return (
            <MovieCard
              key={selection?.id}
              bookmarked={bookmarked?.bookmarked}
              movie_card_data={selection}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MovieSectionComponent
