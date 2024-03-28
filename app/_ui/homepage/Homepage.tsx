'use client'

import Recommended from '@/app/_ui/components/Recommended'
import Search from '@/app/_ui/components/Search'
import Trending from '@/app/_ui/components/Trending'
import { type ChangeEvent, useState } from 'react'
import { trpc } from '@/lib/server/trpc'
import { useUser } from '@clerk/nextjs'

const Homepage = () => {
  const [search, setSearch] = useState('')
  const { user } = useUser()
  const bookmarks = trpc.getBookmarks.useQuery({search: search, user_id: user?.id ?? ""})

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }


  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <Trending search={search} bookmarks={bookmarks?.data} />
      <Recommended search={search} bookmarks={bookmarks?.data} />
    </div>
  )
}

export default Homepage
