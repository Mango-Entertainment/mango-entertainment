'use client'

import { trpc } from '@/lib/server/trpc'
import Search from '../components/Search'
import { type ChangeEvent, useState } from 'react'
import SkeletonSectionComponent from '@/app/_ui/components/SkeletonSectionComponent'
import SeriesSectionComponent from '@/app/_ui/components/Series/SeriesSectionComponent'

const Series = () => {
  const [search, setSearch] = useState('')

  const user = trpc.users.getCurrent.useQuery()

  const bookmarks = trpc.bookmarks.getBookmarkedSeries.useQuery({
    search: search,
    user_id: user?.data?.id ?? '',
  })

  const { data, isLoading } = trpc.tmdb.getSeries.useQuery({ search })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  if (isLoading)
    return (
      <div className="text-entertainment-greyish-blue">
        <Search
          search={search}
          setSearch={setSearch}
          handleChange={handleChange}
        />
        <SkeletonSectionComponent section="Series" />
      </div>
    )
  if (data && data?.results < 1) {
    return (
      <div className="text-entertainment-greyish-blue">
        <Search
          search={search}
          setSearch={setSearch}
          handleChange={handleChange}
        />
        <div className="ml-4 text-entertainment-pure-white">
          <h1 className="mb-4 text-xl font-light md:mb-6 md:text-3xl">
            TV Series
          </h1>
          <p className="text-center font-light opacity-75 lg:text-xl">
            No results found
          </p>
        </div>
      </div>
    )
  }
  return (
    <div className="text-entertainment-greyish-blue">
      <Search
        search={search}
        setSearch={setSearch}
        handleChange={handleChange}
      />
      <SeriesSectionComponent
        section="TV Series"
        data={data}
        bookmarks={bookmarks?.data}
      />
    </div>
  )
}

export default Series
