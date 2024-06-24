'use client'

import { trpc } from '@/lib/server/trpc'
import Search from '@/app/_ui/components/Search'
import MovieSectionComponent from '@/app/_ui/components/Movies/MovieSectionComponent'
import { type ChangeEvent, useState } from 'react'
import SkeletonSectionComponent from '@/app/_ui/components/SkeletonSectionComponent'

const Movies = () => {
  const [search, setSearch] = useState('')
  const user = trpc.users.getCurrent.useQuery()

  const bookmarks = trpc.bookmarks.getBookmarkedMovies.useQuery({
    search: search,
    user_id: user?.data?.id ?? '',
  })

  const { data, isLoading } = trpc.tmdb.getMovies.useQuery({ search })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }
  if (isLoading)
    return (
      <div className="text-entertainment-greyish-blue">
        <Search search={search} setSearch={setSearch} handleChange={handleChange} />
        <SkeletonSectionComponent section="Movies" />
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
            Movies
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
      <Search search={search} setSearch={setSearch} handleChange={handleChange} />
      <MovieSectionComponent
        section="Movies"
        data={data}
        bookmarks={bookmarks?.data}
      />
    </div>
  )
}

export default Movies
