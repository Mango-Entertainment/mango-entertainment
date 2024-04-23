'use client'

import { trpc } from '@/lib/server/trpc'
import Search from '@/app/_ui/components/Search'
import SectionComponent from '@/app/_ui/components/SectionComponent'
import { type ChangeEvent, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import SkeletonSectionComponent from '@/app/_ui/components/SkeletonSectionComponent'

const Bookmarks = () => {
  const [search, setSearch] = useState('')

  const { user } = useUser()
  const user_id = user?.id ?? ''
  const bookmarks = trpc.bookmarks.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
  })

  const bookmarkedSeries = trpc.selections.getBookmarkedSeries.useQuery({
    search,
    user_id,
  })
  const bookmarkedMovie = trpc.selections.getBookmarkedMovies.useQuery({
    search,
    user_id,
  })

  const bookmarkedSeriesData = bookmarkedSeries.data?.map(
    (item) => item.selection,
  )

  const bookmarkedMovieData = bookmarkedMovie.data?.map(
    (item) => item.selection,
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  if (!bookmarkedMovie || !bookmarkedSeries) return
  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      {bookmarkedMovie.isLoading ? (
        <SkeletonSectionComponent section="Movies" />
      ) : (
        <SectionComponent
          section="Movies"
          sectionData={bookmarkedMovieData}
          bookmarks={bookmarks?.data}
        />
      )}
      {bookmarkedSeries.isLoading ? (
        <SkeletonSectionComponent section="TV Series" />
      ) : (
        <SectionComponent
          section="TV Series"
          sectionData={bookmarkedSeriesData}
          bookmarks={bookmarks?.data}
        />
      )}
    </div>
  )
}

export default Bookmarks
