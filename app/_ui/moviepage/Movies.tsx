'use client'

import { trpc } from '@/lib/server/trpc'
import Search from '@/app/_ui/components/Search'
import MovieSectionComponent from '@/app/_ui/components/Movies/MovieSectionComponent'
import { type ChangeEvent, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import SkeletonSectionComponent from '@/app/_ui/components/Depricated/SkeletonSectionComponent'

const Movies = () => {
  const [search, setSearch] = useState('')
  const { user } = useUser()
  const bookmarks = trpc.bookmarks.getBookmarks.useQuery({
    search: search,
    user_id: user?.id ?? '',
  })

  const { data, isLoading } = trpc.tmdb.getMovies.useQuery({ search })
  // console.log(movieList)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      {isLoading ? (
        <SkeletonSectionComponent section="Recommended" />
      ) : (
        <MovieSectionComponent
          section="Movies"
          sectionData={data}
          bookmarks={bookmarks?.data}
        />
      )}
    </div>
  )
}

export default Movies
