'use client'

import { trpc } from '@/lib/server/trpc'
import Image from 'next/image'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import { type FC } from 'react'
import { cx } from 'class-variance-authority'
import useBookmarks from '@/app/_hooks/useBookmarks'
import { useUser } from '@clerk/nextjs'
import { CardHeader } from '@/components/ui/card'
import SkeletonDetails from '@/app/_ui/components/SkeletonDetails'
import MovieInfo from '@/app/_ui/components/Movies/MovieInfo'

type MovieDetailsContentProps = {
  movieDetails: RouterOutputs['tmdb']['getMovieDetails']
  bookmarked: boolean
}

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
    <>
      {data.backdrop_path ? (
        <div
          className="mt-2 max-w-full w-full bg-cover md:mt-4 lg:mt-8"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path}})`,
          }}
        >
          <div className="m-4 flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:aspect-video md:flex-row md:gap-4 md:p-4">
            <MoviePoster poster_path={data.poster_path} title={data.title} />
            <MovieInfo bookmarked={bookmarked} movieDetails={data} />
          </div>
        </div>
      ) : (
        <div className="mt-2 aspect-video w-full bg-slate-700 bg-cover md:mt-4 lg:mt-8">
          <div className="flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:m-4 md:aspect-video md:flex-row md:gap-2 md:p-4">
            <MoviePoster poster_path={data.poster_path} title={data.title} />
            <MovieInfo bookmarked={bookmarked} movieDetails={data} />
          </div>
        </div>
      )}
    </>
  )
}

const MoviePoster = ({
  poster_path,
  title,
}: {
  poster_path: string
  title: string
}) => {
  return poster_path ? (
    <div className="mx-auto md:mx-0 aspect-[2/3] max-w-full rounded-lg">
      {/* <div className="mx-auto aspect-[2/3] max-w-96 rounded-lg"> */}
      <Image
        className=" rounded-lg"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        width={400}
        height={250}
        alt={`${title} poster`}
      />
    </div>
  ) : (
    <div className="m-4 hidden aspect-[2/3] items-center justify-center rounded-lg bg-entertainment-pure-white p-4 text-center text-xl text-entertainment-greyish-blue md:flex md:text-2xl">
      {title ?? 'No image available'}
    </div>
  )
}

export default MovieDetailsPage
