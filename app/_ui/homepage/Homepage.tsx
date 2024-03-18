'use client'

import Recommended from '@/app/_ui/components/Recommended'
import Search from '@/app/_ui/components/Search'
import Trending from '@/app/_ui/components/Trending'
import { type ChangeEvent, useState } from 'react'

const Homepage = () => {
  const [search, setSearch] = useState('')
  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }


  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <Trending search={search} />
      <Recommended search={search} />
    </div>
  )
}

export default Homepage
