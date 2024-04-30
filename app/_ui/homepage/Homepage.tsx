'use client'

import Recommended from '@/app/_ui/components/Depricated/Recommended'
import Search from '@/app/_ui/components/Search'
import { type ChangeEvent, useState } from 'react'
import { trpc } from '@/lib/server/trpc'
import { useUser } from '@clerk/nextjs'
import TrendingMovies from '@/app/_ui/components/Movies/TrendingMovies'
import TrendingSeries from '@/app/_ui/components/Series/TrendingSeries'


const Homepage = () => {
  const [search, setSearch] = useState('')
  const { user } = useUser()
  const bookmarks = trpc.bookmarks.getBookmarks.useQuery({search: search, user_id: user?.id ?? ""})
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <TrendingSeries search={search} bookmarks={bookmarks?.data} />
      <TrendingMovies search={search} bookmarks={bookmarks?.data} />
    </div>
  )
}

export default Homepage
