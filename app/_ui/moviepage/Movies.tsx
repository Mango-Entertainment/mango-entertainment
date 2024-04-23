'use client'

import { trpc } from '@/lib/server/trpc'
import Search from '@/app/_ui/components/Search'
import SectionComponent from '@/app/_ui/components/SectionComponent'
import { type ChangeEvent, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import SkeletonSectionComponent from '@/app/_ui/components/SkeletonSectionComponent'

const Movies = () => {
  const [search, setSearch] = useState('')
  const { user } = useUser()
  const bookmarks = trpc.bookmarks.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
  })

  const { data, isLoading } = trpc.selections.getMovies.useQuery({ search })

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
          section="Movies"
          sectionData={data}
          bookmarks={bookmarks?.data}
        />
      )}
    </div>
  )
}

export default Movies
