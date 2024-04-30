import { type FC } from 'react'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import MovieCard from '@/app/_ui/components/MovieCard'

type MovieSectionComponentProps = {
  sectionData: RouterOutputs['tmdb']['getMovies']| undefined
  section: string
  bookmarks: RouterOutputs['bookmarks']['getBookmarks'] | undefined
}

const MovieSectionComponent: FC<MovieSectionComponentProps> = ({
  sectionData,
  section,
  bookmarks,
}) => {
  if (sectionData && sectionData?.results?.length < 1) {
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

  console.log(sectionData)
  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:mb-6 md:text-3xl lg:mb-8">
        {section}
      </h1>
      <div className="mb-8 grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {sectionData?.results?.map((selection) => {
          // const bookmarked = bookmarks?.data.filter(
          //   (bookmark) => bookmark.selection_id === selection.id,
          // )[0] ?? { bookmarked: false }
          return (
            <MovieCard
              key={selection.id}
              id={selection.id}
              title={selection.title}
              poster_path={selection.poster_path}
              release_date={selection.release_date}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MovieSectionComponent
