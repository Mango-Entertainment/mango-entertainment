'use client'

import Search from '@/app/_ui/components/Search'
import { type ChangeEvent, useState } from 'react'
import { trpc } from '@/lib/server/trpc'
import { useUser } from '@clerk/nextjs'
import TrendingMovies from '@/app/_ui/components/Movies/TrendingMovies'
import TrendingSeries from '@/app/_ui/components/Series/TrendingSeries'


const Homepage = () => {
  const [search, setSearch] = useState('')
  const { user } = useUser()
  const movies = trpc.bookmarks.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
    selection_type: 'Movie',
  })

  const series = trpc.bookmarks.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
    selection_type: 'TV Series',
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="flex flex-col text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <TrendingSeries search={search} bookmarks={series.data} />
      <hr className="border-1 border-gradient-to-r border-from-transparent border-to-white mb-4 mt-2 h-2 w-4/5 self-center" />
      <TrendingMovies search={search} bookmarks={movies.data} />
    </div>
  )
}

export default Homepage
