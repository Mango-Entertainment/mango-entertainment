'use client'

import { trpc } from '@/lib/server/trpc'
import Search from '@/app/_ui/components/Search'
import SectionComponent from '@/app/_ui/components/Deprecated/SectionComponent'
import { type ChangeEvent, type FC, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import SkeletonSectionComponent from '@/app/_ui/components/SkeletonSectionComponent'
import { type TmdbMovieDetailsData } from '@/lib/server/routes/tmdb/tmdb'
import { useQuery } from '@tanstack/react-query'
import BookmarkMovieCard from '../components/Movies/BookmarkMovieCard'
import useBookmarks from '@/app/_hooks/useBookmarks'
import BookmarkSeriesCard from '../components/Series/BookmarkSeriesCard'
import MovieSectionComponent from '../components/Movies/MovieSectionComponent'
import SeriesSectionComponent from '../components/Series/SeriesSectionComponent'

interface BookmarkSection {
  search: string
  user_id: string
}

const Bookmarks = () => {
  const [search, setSearch] = useState('')

  const { user } = useUser()
  const user_id = user?.id ?? ''

  const bookmarks = trpc.bookmarks.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
  })

  const movieBookmarks = trpc.bookmarks.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
    selection_type: 'Movie',
  })

  const seriesBookmarks = trpc.bookmarks.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
    selection_type: 'TV Series',
  })

  const bookmarkedSeries = trpc.bookmarks.getBookmarkedSeries.useQuery({
    search,
    user_id,
  })
  const bookmarkedMovies = trpc.bookmarks.getBookmarkedMovies.useQuery({
    search,
    user_id,
  })

  // const bookmarkedSeriesData = bookmarkedSeries.data?.map(
  //   (item) => item,
  // )

  // const bookmarkedMovieData = bookmarkedMovies.data?.map(
  //   (item) => item,
  // )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      {bookmarkedMovies.isLoading ? (
        <SkeletonSectionComponent section="Movies" />
      ) : (
        <MovieSectionComponent
          section="Movies"
          sectionData={bookmarkedMovies.data}
          bookmarks={movieBookmarks?.data}
        />
      )}
      {bookmarkedSeries.isLoading ? (
        <SkeletonSectionComponent section="TV Series" />
      ) : (
        <SeriesSectionComponent
          section="TV Series"
          sectionData={bookmarkedSeries.data}
          bookmarks={seriesBookmarks?.data}
        />
      )}
    </div>
  )
  // return (
  //   <>
  //     <Search search={search} handleChange={handleChange} />
  //     <BookmarkedMovies user_id={user_id} search={search} />
  //     <BookmarkedSeries user_id={user_id} search={search} />
  //   </>
  // )
}

const BookmarkedMovies: FC<BookmarkSection> = ({ user_id, search }) => {
  const { data, isLoading } = trpc.tmdb.getBookmarkedMovies.useQuery({
    search: search,
    user_id: user_id,
  })

  if (isLoading) return <>loading</>
  return (
    <>
      <h2 className="text-entertainment-pure-white">Movie Bookmarks</h2>
      <ul className="flex flex-wrap gap-4 text-entertainment-pure-white">
        {data?.map((selection) => {
          return (
            <BookmarkMovieCard
              key={selection.selection_id}
              id={selection.selection_id}
              search={search}
            />
          )
        })}
      </ul>
    </>
  )
}

const BookmarkedSeries: FC<BookmarkSection> = ({ user_id, search }) => {
  const { data, isLoading } = trpc.tmdb.getBookmarkedSeries.useQuery({
    search: search,
    user_id: user_id,
  })
  if (isLoading) return <>loading</>
  return (
    <>
      <h2 className="text-entertainment-pure-white">Series Bookmarks</h2>
      <ul className="text-entertainment-pure-white">
        {data?.map((selection) => {
          return (
            <BookmarkSeriesCard
              key={selection.selection_id}
              id={selection.selection_id}
              search={search}
            />
          )
        })}
      </ul>
    </>
  )
}

export default Bookmarks
