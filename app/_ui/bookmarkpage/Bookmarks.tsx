'use client'

import { trpc } from '@/lib/server/trpc'
import Search from '@/app/_ui/components/Search'
import SectionComponent from '@/app/_ui/components/SectionComponent'
import { type ChangeEvent, useState } from 'react'
import { useUser } from '@clerk/nextjs'


const getBookmarkedSeriesData = (search: string, user_id: string) => {
  const seriesData = trpc.getBookmarkedSeries.useQuery({ search, user_id })
  
  return seriesData.data
}

const getBookmarkedMovieData = (search: string, user_id: string) => {
  const movieData = trpc.getBookmarkedMovies.useQuery({search, user_id})
  return movieData.data
}

const Bookmarks = () => {
  const [search, setSearch] = useState('')

  const { user } = useUser()
  const user_id = user?.id ?? ''

  const bookmarkedSeriesData = getBookmarkedSeriesData(search, user_id)
  const bookmarkedMovieData = getBookmarkedMovieData(search, user_id)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
     setSearch(e.target.value)
   }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      {bookmarkedMovieData?.data && <SectionComponent section="Movies" sectionData={bookmarkedMovieData} />}
      {bookmarkedMovieData?.data && <SectionComponent section="TV Series" sectionData={bookmarkedSeriesData} />}
    </div>
  )
}

export default Bookmarks
