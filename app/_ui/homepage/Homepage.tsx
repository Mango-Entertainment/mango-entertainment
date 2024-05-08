'use client'

import { trpc } from '@/lib/server/trpc'
import { useUser } from '@clerk/nextjs'
import TrendingMovies from '@/app/_ui/components/Movies/TrendingMovies'
import TrendingSeries from '@/app/_ui/components/Series/TrendingSeries'


const Homepage = () => {
  const { user } = useUser()
  const movies = trpc.bookmarks.getBookmarks.useQuery({
    search: '',
    user_id: user?.id ?? '',
    selection_type: 'Movie',
  })

  const series = trpc.bookmarks.getBookmarks.useQuery({
    search: '',
    user_id: user?.id ?? '',
    selection_type: 'TV Series',
  })

  return (
    <div className="flex flex-col my-2 md:my-4 lg:mt-12 text-entertainment-greyish-blue">
      <TrendingSeries bookmarks={series.data} />
      <hr className="border-1 border-gradient-to-r border-from-transparent border-to-white mb-4 mt-2 h-2 w-4/5 self-center" />
      <TrendingMovies bookmarks={movies.data} />
    </div>
  )
}

export default Homepage
