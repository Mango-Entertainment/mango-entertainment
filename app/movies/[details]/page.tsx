'use client'

import { trpc } from '@/lib/server/trpc'
import SkeletonDetails from '@/app/_ui/components/SkeletonDetails'
import DetailsPage from '@/app/_ui/components/DetailsPage'
import type { Selection } from '@/app/_ui/components/Details'

const MovieDetailsPage = ({ params }: { params: { details: string } }) => {
  const movie_id = parseInt(params.details)
  const { data, isLoading } = trpc.tmdb.getMovieDetails.useQuery({ movie_id })
  const user = trpc.users.getCurrent.useQuery()
  const bookmark = trpc.bookmarks.getBookmark.useQuery({
    selection_id: movie_id,
    user_id: user?.data?.id ?? '',
    selection_type: 'Movie',
  })
  const bookmarked = bookmark?.data?.bookmarked ?? false

  if (isLoading) {
    return <SkeletonDetails />
  }
  if (!data) return
  const selection: Selection = {
    title: data?.title,
    year: data?.release_date.slice(0, 4),
    id: data?.id,
    details: data?.overview,
    tagline: data?.tagline,
    origin_country: data?.origin_country,
    genres: data?.genres,
    runtime: data?.runtime,
    videos: data?.videos,
    poster_path: data?.poster_path,
    backdrop_path: data?.backdrop_path,
    selection_type: 'Movie',
  }
  return <DetailsPage bookmarked={bookmarked} selectionData={selection} />
}

export default MovieDetailsPage
