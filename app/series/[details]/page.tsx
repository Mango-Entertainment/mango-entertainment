'use client'

import { trpc } from '@/lib/server/trpc'
import Image from 'next/image'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import { type FC } from 'react'
import { cx } from 'class-variance-authority'

type SeriesDetailsContentProps = {
  seriesDetails: RouterOutputs['tmdb']['getSeriesDetails']
}

const seriesDetailsPage = ({ params }: { params: { details: string } }) => {
  const series_id = parseInt(params.details)
  const { data, isLoading } = trpc.tmdb.getSeriesDetails.useQuery({ series_id })

  if (isLoading) {
    <div>is loading</div>
  }
  if (!data) return
  return (
    <>
      {data.backdrop_path ? (
        <div
          className="mt-2 bg-cover p-2  md:mt-4 md:p-8 lg:mt-12"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path}})`,
          }}
        >
          <div className="mx-2 flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:mx-4 md:aspect-video md:flex-row">
            <SeriesPoster seriesDetails={data} />
            <SeriesDetailContent seriesDetails={data} />
          </div>
        </div>
      ) : (
        <div className="mt-2 aspect-video w-full bg-black bg-cover p-8 md:mt-4 lg:mt-12">
          <div className="flex h-auto min-h-full flex-col bg-entertainment-greyish-blue bg-opacity-80 md:flex-row">
            <SeriesPoster seriesDetails={data} />
            <SeriesDetailContent seriesDetails={data} />
          </div>
        </div>
      )}
    </>
  )
}

const SeriesDetailContent: FC<SeriesDetailsContentProps> = ({ seriesDetails }) => {
  return (
    <div
      className={cx(
        'mx-4 mb-4 md:ml-0 md:mt-4',
        !seriesDetails?.poster_path && 'mt-4',
      )}
    >
      <h1 className="mb-2 text-4xl">{seriesDetails?.name}</h1>
      <p className="text-2xl italic">{seriesDetails?.tagline}</p>
      <div className="my-3 flex gap-4">
        <p>{seriesDetails.first_air_date}</p>
        <p>{seriesDetails?.origin_country}</p>
        {/* <p>{seriesDetails?.Episode_run_time[0]} min</p> */}
      </div>
      <p className="text-xl">{seriesDetails?.overview}</p>
    </div>
  )
}

const SeriesPoster: FC<SeriesDetailsContentProps> = ({ seriesDetails }) => {
  return seriesDetails.poster_path ? (
    <Image
      className="h-auto scale-90 self-center rounded-lg drop-shadow-md md:m-4 md:scale-100"
      src={`https://image.tmdb.org/t/p/original${seriesDetails?.poster_path}`}
      width={400}
      height={250}
      alt={`${seriesDetails.name} poster`}
    />
  ) : (
    <div className="m-4 hidden aspect-[9/16] items-center justify-center rounded-lg bg-entertainment-pure-white p-4 text-center text-xl text-entertainment-greyish-blue md:flex md:text-2xl">
      {seriesDetails.name ?? 'No image available'}
    </div>
  )
}

export default seriesDetailsPage
