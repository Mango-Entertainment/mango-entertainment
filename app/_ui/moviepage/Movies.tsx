'use client'

import { trpc } from '@/lib/server/trpc'
import Search from '@/app/_ui/components/Search'
import SectionComponent from '@/app/_ui/components/SectionComponent'
import { type ChangeEvent, useState } from 'react'
import { useUser } from '@clerk/nextjs'

const getMovieData = (search: string) => {
  const movieData = trpc.getMovies.useQuery({ search })
  return movieData.data
}

const Movies = () => {
  const [search, setSearch] = useState('')
  const { user } = useUser()
  const bookmarks = trpc.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
  })

  const sectionData = getMovieData(search)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <SectionComponent
        section="Movies"
        sectionData={sectionData}
        bookmarks={bookmarks?.data}
      />
    </div>
  )
}

export default Movies
