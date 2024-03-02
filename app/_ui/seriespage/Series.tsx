'use client'

import { SelectionWithRegularThumbs } from '@/types/db'
import { trpc } from '@/lib/server/trpc'
import SectionComponent from '@/app/_ui/components/SectionComponent'
import Search from '../components/Search'
import { ChangeEvent, useState } from 'react'

const getSeriesData = (search: string) => {
  const seriesData = trpc.series.useQuery(search)
  return seriesData?.data?.data?.selections as SelectionWithRegularThumbs[]
}

const Series = () => {
  const [search, setSearch] = useState('')

  const sectionData = getSeriesData(search)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <SectionComponent section="TV Series" sectionData={sectionData} />
    </div>
  )
}

export default Series
