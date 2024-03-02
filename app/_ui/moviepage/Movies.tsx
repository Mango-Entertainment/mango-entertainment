'use client'

import { SelectionWithRegularThumbs } from '@/types/db'
import { trpc } from '@/lib/server/trpc'
import Search from '@/app/_ui/components/Search'
import SectionComponent from '@/app/_ui/components/SectionComponent'
import { ChangeEvent, useState } from 'react'

const getMovieData = (search: string) => {
  const movieData = trpc.movies.useQuery(search)
  return movieData?.data?.data?.selections as SelectionWithRegularThumbs[]
}

const Movies = () => {
  const [search, setSearch] = useState('')

  const sectionData = getMovieData(search)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <SectionComponent section="Movies" sectionData={sectionData} />
    </div>
  )
}

export default Movies
