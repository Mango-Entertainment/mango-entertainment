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

interface BookmarkSection {
  search: string
  user_id: string
}


const Bookmarks = () => {
  const [search, setSearch] = useState('')
  
  const { user } = useUser()
  const user_id = user?.id ?? ''

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  // return (
  //   <div className="text-entertainment-greyish-blue">
  //     <Search search={search} handleChange={handleChange} />
  //     {bookmarkedMovies.isLoading ? (
  //       <SkeletonSectionComponent section="Movies" />
  //     ) : (
  //       <SectionComponent
  //         section="Movies"
  //         sectionData={bookmarkedMovieData}
  //         bookmarks={bookmarks?.data}
  //       />
  //     )}
  //     {bookmarkedSeries.isLoading ? (
  //       <SkeletonSectionComponent section="TV Series" />
  //     ) : (
  //       <SectionComponent
  //         section="TV Series"
  //         sectionData={bookmarkedSeriesData}
  //         bookmarks={bookmarks?.data}
  //       />
  //     )}
  //   </div>
  // )
  return (
    <>
      <Search search={search} handleChange={handleChange} />
      <BookmarkedMovies user_id={user_id} search={search} />
      <BookmarkedSeries user_id={user_id} search={search} />
    </>
  )
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
          return <li key={selection.selection_id}>{selection.selection_id}</li>
        })}
      </ul>
    </>
  )
}

export default Bookmarks
