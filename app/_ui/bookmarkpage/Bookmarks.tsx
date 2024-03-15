'use client'

import { trpc } from '@/lib/server/trpc'
import Search from '@/app/_ui/components/Search'
import SectionComponent from '@/app/_ui/components/SectionComponent'
import { ChangeEvent, useState } from 'react'

const getBookmarkedSeriesData = (search: string) => {
  const seriesData = trpc.getBookmarkedSeries.useQuery({search})
  return seriesData.data
}

const getBookmarkedMovieData = (search: string) => {
  const seriesData = trpc.getBookmarkedMovies.useQuery({search})
  return seriesData.data
}

const Bookmarks = () => {
  const [search, setSearch] = useState('')

  const bookmarkedSeriesData = getBookmarkedSeriesData(search)
  const bookmarkedMovieData = getBookmarkedMovieData(search)


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
     setSearch(e.target.value)
   }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <SectionComponent section="Movies" sectionData={bookmarkedMovieData} />
      <SectionComponent section="TV Series" sectionData={bookmarkedSeriesData} />
    </div>
  )
}

export default Bookmarks
