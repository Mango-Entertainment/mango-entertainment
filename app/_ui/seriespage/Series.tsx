'use client'

import { trpc } from '@/lib/server/trpc'
import SectionComponent from '@/app/_ui/components/SectionComponent'
import Search from '../components/Search'
import { type ChangeEvent, useState } from 'react'
import { useUser } from '@clerk/nextjs'

const getSeriesData = (search: string) => {
  const seriesData = trpc.getSeries.useQuery({ search })
  return seriesData.data
}

const Series = () => {
  const [search, setSearch] = useState('')

  const { user } = useUser()
  const bookmarks = trpc.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
  })

  const sectionData = getSeriesData(search)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <SectionComponent
        section="TV Series"
        sectionData={sectionData}
        bookmarks={bookmarks?.data}
      />
    </div>
  )
}

export default Series
