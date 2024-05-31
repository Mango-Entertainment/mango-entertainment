'use client'

import { trpc } from '@/lib/server/trpc'
import { useUser } from '@clerk/nextjs'
import SkeletonDetails from '@/app/_ui/components/SkeletonDetails'
import SeriesInfo from '@/app/_ui/components/Series/SeriesInfo'
import DetailsPage from '@/app/_ui/components/DetailsPage'
import type { Selection } from '@/app/_ui/components/Details'

const SeriesDetailsPage = ({ params }: { params: { details: string } }) => {
  const series_id = parseInt(params.details)
  const { data, isLoading } = trpc.tmdb.getSeriesDetails.useQuery({ series_id })
  const { isSignedIn, user } = useUser()
  const bookmark = trpc.bookmarks.getBookmark.useQuery({
    selection_id: series_id,
    user_id: user?.id ?? '',
    selection_type: 'TV Series',
  })
  const bookmarked = bookmark?.data?.bookmarked ?? false

  if (isLoading) {
    return <SkeletonDetails />
  }
  if (!data) return
  const selection: Selection = {
    title: data?.name,
    year: data?.first_air_date.slice(0, 4),
    id: data?.id,
    details: data?.overview,
    tagline: data?.tagline,
    origin_country: data?.origin_country,
    genres: data?.genres,
    number_of_seasons: data?.number_of_seasons,
    videos: data?.videos,
    poster_path: data?.poster_path,
    backdrop_path: data?.backdrop_path,
    selection_type: 'TV Series',
  }
  return <DetailsPage bookmarked={bookmarked} selectionData={selection} />
}

export default SeriesDetailsPage
