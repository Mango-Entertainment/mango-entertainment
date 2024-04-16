'use client'

import { trpc } from '@/lib/server/trpc'
import SectionComponent from '@/app/_ui/components/SectionComponent'
import Search from '../components/Search'
import { type ChangeEvent, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import SkeletonSectionComponent from '@/app/_ui/components/SkeletonSectionComponent'

const Series = () => {
  const [search, setSearch] = useState('')

  const { user } = useUser()
  const bookmarks = trpc.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
  })

  const { data, isLoading } = trpc.getSeries.useQuery({ search })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      {isLoading ? (
        <SkeletonSectionComponent section="Recommended" />
      ) : (
        <SectionComponent
          section="TV Series"
          sectionData={data}
          bookmarks={bookmarks?.data}
        />
      )}
    </div>
  )
}

export default Series
