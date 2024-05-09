'use client'

import { trpc } from '@/lib/server/trpc'
import Image from 'next/image'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import { type FC } from 'react'
import { cx } from 'class-variance-authority'

type MovieDetailsContentProps = {
  movieDetails: RouterOutputs['tmdb']['getMovieDetails']
}

const movieDetailsPage = ({ params }: { params: { details: string } }) => {
  const movie_id = parseInt(params.details)
  const { data, isLoading } = trpc.tmdb.getMovieDetails.useQuery({ movie_id })

  if(isLoading) {<div>is loading</div>}
  if(!data) return
  return (
    <>
      {data.backdrop_path ? (
        <div
          className="mt-2 bg-cover p-2 md:mt-4 md:p-8 lg:mt-12"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path}})`,
          }}
        >
          <div className="mx-2 flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:mx-4 md:aspect-video md:flex-row">
            <MoviePoster movieDetails={data} />
            <MovieDetailContent movieDetails={data} />
          </div>
        </div>
      ) : (
        <div className="mt-2 aspect-video w-full bg-black bg-cover p-8 md:mt-4 lg:mt-12">
          <div className="flex h-auto min-h-full flex-col bg-entertainment-greyish-blue bg-opacity-80 md:flex-row">
            <MoviePoster movieDetails={data} />
            <MovieDetailContent movieDetails={data} />
          </div>
        </div>
      )}
    </>
  )
}

const MovieDetailContent: FC<MovieDetailsContentProps> = ({ movieDetails }) => {
  return (
    <div className={cx("mx-4 mb-4 md:mt-4 md:ml-0", !movieDetails?.poster_path && "mt-4")}>
      <h1 className="text-4xl mb-2">{movieDetails?.title}</h1>
      <p className="text-2xl italic">{movieDetails?.tagline}</p>
      <div className="flex gap-4 my-3">
        <p>{movieDetails.release_date}</p>
        <p>{movieDetails?.origin_country}</p>
        <p>{movieDetails?.runtime} min</p>
      </div>
      <p className='text-xl'>{movieDetails?.overview}</p>
    </div>
  )
}

const MoviePoster: FC<MovieDetailsContentProps> = ({movieDetails}) => {
  return movieDetails.poster_path ? (
      <Image
        className="self-center md:scale-100 md:m-4 h-auto scale-90 rounded-lg"
        src={`https://image.tmdb.org/t/p/original${movieDetails?.poster_path}`}
        width={400}
        height={250}
        alt={`${movieDetails.title} poster`}
      />
  ) : (
    <div className="m-4 hidden md:flex aspect-[9/16] items-center justify-center rounded-lg bg-entertainment-pure-white p-4 text-center text-xl text-entertainment-greyish-blue md:text-2xl">
      {movieDetails.title ?? 'No image available'}
    </div>
  )
}

export default movieDetailsPage
