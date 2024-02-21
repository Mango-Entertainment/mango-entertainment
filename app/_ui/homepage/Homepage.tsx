'use client'

import Search from '@/app/_ui/components/Search'
import Trending from '@/app/_ui/components/Trending'
import Recommended from '@/app/_ui/components/Recommended'
import { useState, ChangeEvent } from 'react'
import { trpc } from '@/lib/server/trpc'
import { imageSelect } from '@/lib/server/routes/selections/selection-schema'

const Homepage = () => {
  const [search, setSearch] = useState('')
  const imageSelect = {TrendingThumb: true}
  const { data, isLoading, refetch } = trpc.all_selections.useQuery({
        title: {
          search: search
        }
  })


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <Trending />
      <Recommended />
    </div>
  )
}

export default Homepage
