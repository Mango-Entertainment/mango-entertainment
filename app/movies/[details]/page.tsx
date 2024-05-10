'use client'

import { trpc } from '@/lib/server/trpc'
import Image from 'next/image'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import { type FC } from 'react'
import { cx } from 'class-variance-authority'
import { type MovieCardData } from '@/lib/server/routes/tmdb/tmdb'
import useBookmarks from '@/app/_hooks/useBookmarks'
import { useUser } from '@clerk/nextjs'
import { CardHeader } from '@/components/ui/card'

type MovieDetailsContentProps = {
  movieDetails: RouterOutputs['tmdb']['getMovieDetails']
  bookmarked: boolean
}

const MovieDetailsPage = ({ params }: { params: { details: string } }) => {
  const movie_id = parseInt(params.details)
  const { data, isLoading } = trpc.tmdb.getMovieDetails.useQuery({ movie_id })
  const { isSignedIn, user } = useUser()
  const bookmark =
    trpc.bookmarks.getBookmark.useQuery({
      selection_id: movie_id,
      user_id: user?.id ?? '',
      selection_type: 'Movie',
    })
  const bookmarked = bookmark?.data?.bookmarked ?? false
  
  if (isLoading) {
    ;<div>is loading</div>
  }
  if (!data) return
  return (
    <>
      {data.backdrop_path ? (
        <div
          className="mt-2 bg-cover p-2 md:mx-2 md:mt-4 md:p-8 lg:mx-0 lg:mt-12"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path}})`,
          }}
        >
          <div className="mx-2 flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:mx-4 md:aspect-video md:flex-row">
            <MoviePoster poster_path={data.poster_path} title={data.title} />
            <MovieDetailContent bookmarked={bookmarked} movieDetails={data} />
          </div>
        </div>
      ) : (
        <div className="mt-2 aspect-video w-full bg-black bg-cover p-8 md:mt-4 lg:mt-12">
          <div className="flex h-auto min-h-full flex-col bg-entertainment-greyish-blue bg-opacity-80 md:flex-row">
            <MoviePoster poster_path={data.poster_path} title={data.title} />
            <MovieDetailContent bookmarked={bookmarked} movieDetails={data} />
          </div>
        </div>
      )}
    </>
  )
}

const MovieDetailContent: FC<MovieDetailsContentProps> = ({ movieDetails, bookmarked }) => {
  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()
  const bookmarkData = {
    id: movieDetails.id,
    adult: movieDetails.adult,
    backdrop_path: movieDetails.backdrop_path,
    genre_ids: movieDetails.genres.map((genre) => genre.id),
    original_language: movieDetails.original_language,
    original_title: movieDetails.original_title,
    overview: movieDetails.overview,
    popularity: movieDetails.popularity,
    poster_path: movieDetails.poster_path,
    release_date: movieDetails.release_date,
    title: movieDetails.title,
    video: movieDetails.video,
    vote_average: movieDetails.vote_average,
    vote_count: movieDetails.vote_count,
  }
  return (
    <div
      className={cx(
        'mx-4 mb-4 md:ml-0 md:mt-4 h-full',
        !movieDetails?.poster_path && 'mt-4',
      )}
    >
      <div className="mb-2 flex flex-row justify-between">
        <h1 className="text-3xl md:text-4xl w-11/12 md:w-auto">{movieDetails?.title}</h1>
        {isSignedIn ? (
          <CardHeader
            className="relative right-0 justify-end mr-2 top-0 h-12 md:right-0 md:top-0 md:w-56"
            onClick={() =>
              toggleBookmark({
                selection_id: movieDetails.id,
                user_id: user?.id,
                selection_type: 'Movie',
                movie_data: bookmarkData,
              })
            }
          >
            {bookmarked ? (
              <Image
                src="/icon-bookmark-full.svg"
                height={32}
                width={32}
                alt="bookmark icon"
              />
            ) : (
              <Image
                src="/icon-bookmark-empty.svg"
                height={32}
                width={32}
                alt="bookmark icon"
              />
            )}
          </CardHeader>
        ) : (
          <></>
        )}
      </div>
      <p className="text-xl italic md:text-2xl">{movieDetails?.tagline}</p>
      <div className="my-3 flex gap-4">
        <p>{movieDetails.release_date}</p>
        <p>{movieDetails?.origin_country}</p>
        <p>{movieDetails?.runtime} min</p>
      </div>
      <p className="text-lg md:text-xl text-ellipsis">{movieDetails?.overview}</p>
    </div>
  )
}

const MoviePoster = ({ poster_path, title }: {poster_path: string, title: string}) => {
  return poster_path ? (
    <Image
      className="h-auto xl:h-auto scale-90 self-center rounded-lg drop-shadow-md md:h-96 md:m-4 md:scale-100"
      src={`https://image.tmdb.org/t/p/original${poster_path}`}
      width={400}
      height={250}
      alt={`${title} poster`}
    />
  ) : (
    <div className="m-4 hidden aspect-[9/16] items-center justify-center rounded-lg bg-entertainment-pure-white p-4 text-center text-xl text-entertainment-greyish-blue md:flex md:text-2xl">
      {title ?? 'No image available'}
    </div>
  )
}

export default MovieDetailsPage
