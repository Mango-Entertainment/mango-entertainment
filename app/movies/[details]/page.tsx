'use client'

import { trpc } from '@/lib/server/trpc'
import Image from 'next/image'
// import { cx } from 'class-variance-authority'
import { useUser } from '@clerk/nextjs'
import SkeletonDetails from '@/app/_ui/components/SkeletonDetails'
import MovieInfo from '@/app/_ui/components/Movies/MovieInfo'
import DetailsPoster from '@/app/_ui/components/DetailsPoster'

const MovieDetailsPage = ({ params }: { params: { details: string } }) => {
  const movie_id = parseInt(params.details)
  const { data, isLoading } = trpc.tmdb.getMovieDetails.useQuery({ movie_id })
  const { isSignedIn, user } = useUser()
  const bookmark = trpc.bookmarks.getBookmark.useQuery({
    selection_id: movie_id,
    user_id: user?.id ?? '',
    selection_type: 'Movie',
  })
  const bookmarked = bookmark?.data?.bookmarked ?? false

  if (isLoading) {
    return <SkeletonDetails />
  }
  if (!data) return
  return (
    <div className="p-2 md:p-4">
      {data.backdrop_path ? (
        <div
          className="w-full max-w-full bg-cover p-2 md:p-4"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path}})`,
          }}
        >
          <div className="grid grid-cols-1 p-3 gap-3 bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:aspect-video md:grid-cols-3 md:gap-6 md:p-6">
            <DetailsPoster poster_path={data.poster_path} name={data.title} />
            <MovieInfo bookmarked={bookmarked} movieDetails={data} />
          </div>
        </div>
      ) : (
        <div className="mt-2 aspect-video w-full bg-slate-700 bg-cover md:mt-4 lg:mt-8">
          <div className="flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:m-4 md:aspect-video md:flex-row md:gap-2 md:p-4">
            <DetailsPoster poster_path={data.poster_path} name={data.title} />
            <MovieInfo bookmarked={bookmarked} movieDetails={data} />
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetailsPage
