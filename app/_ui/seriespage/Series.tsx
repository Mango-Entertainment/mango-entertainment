'use client'

import { trpc } from '@/lib/server/trpc'
import Search from '../components/Search'
import { type ChangeEvent, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import SkeletonSectionComponent from '@/app/_ui/components/SkeletonSectionComponent'
import SeriesSectionComponent from '@/app/_ui/components/Series/SeriesSectionComponent'

const Series = () => {
  const [search, setSearch] = useState('')

  const { user } = useUser()
  const bookmarks = trpc.bookmarks.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
    selection_type: 'TV Series',
  })

  const { data, isLoading } = trpc.tmdb.getSeries.useQuery({ search })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      {isLoading ? (
        <SkeletonSectionComponent section="Recommended" />
      ) : (
        <SeriesSectionComponent
          section="TV Series"
          sectionData={data}
          bookmarks={bookmarks?.data}
        />
      )}
    </div>
  )
}

export default Series
