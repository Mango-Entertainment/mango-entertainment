'use client'

import { trpc } from '@/lib/server/trpc'
import { useUser } from '@clerk/nextjs'
import TrendingMovies from '@/app/_ui/components/Movies/TrendingMovies'
import TrendingSeries from '@/app/_ui/components/Series/TrendingSeries'
import { Separator } from '@/components/ui/separator'


const Homepage = () => {
  const { user } = useUser()
  const movies = trpc.bookmarks.getBookmarkedMovies.useQuery({
    search: '',
    user_id: user?.id ?? '',
  })

  const series = trpc.bookmarks.getBookmarkedSeries.useQuery({
    search: '',
    user_id: user?.id ?? '',
  })

  return (
    <div className="flex flex-col overflow-x-hidden py-4 pr-4 text-entertainment-greyish-blue lg:mt-2">
      <TrendingSeries bookmarks={series.data} />
      <Separator className="bg-gradient-to-r from-entertainment-dark-blue via-entertainment-greyish-blue to-entertainment-dark-blue" />
      <TrendingMovies bookmarks={movies.data} />
    </div>
  )
}

export default Homepage
