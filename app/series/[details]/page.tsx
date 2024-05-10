'use client'

import { trpc } from '@/lib/server/trpc'
import Image from 'next/image'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import { type FC } from 'react'
import { cx } from 'class-variance-authority'
import useBookmarks from '@/app/_hooks/useBookmarks'
import { useUser } from '@clerk/nextjs'
import { CardHeader } from '@/components/ui/card'

type SeriesDetailsContentProps = {
  seriesDetails: RouterOutputs['tmdb']['getSeriesDetails']
  bookmarked: boolean
}

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
    ;<div>is loading</div>
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
            <SeriesPoster poster_path={data.poster_path} name={data.name} />
            <SeriesDetailContent bookmarked={bookmarked} seriesDetails={data} />
          </div>
        </div>
      ) : (
        <div className="mt-2 aspect-video w-full bg-black bg-cover p-8 md:mt-4 lg:mt-12">
          <div className="flex h-auto min-h-full flex-col bg-entertainment-greyish-blue bg-opacity-80 md:flex-row">
            <SeriesPoster poster_path={data.poster_path} name={data.name} />
            <SeriesDetailContent bookmarked={bookmarked} seriesDetails={data} />
          </div>
        </div>
      )}
    </>
  )
}

const SeriesDetailContent: FC<SeriesDetailsContentProps> = ({
  seriesDetails,
  bookmarked,
}) => {
  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()
  const bookmarkData = {
    id: seriesDetails.id,
    adult: seriesDetails.adult,
    backdrop_path: seriesDetails.backdrop_path,
    genre_ids: seriesDetails.genres.map((genre) => genre.id),
    origin_country: seriesDetails.origin_country,
    original_language: seriesDetails.original_language,
    original_name: seriesDetails.original_name,
    overview: seriesDetails.overview,
    popularity: seriesDetails.popularity,
    poster_path: seriesDetails.poster_path,
    first_air_date: seriesDetails.first_air_date,
    name: seriesDetails.name,
    vote_average: seriesDetails.vote_average,
    vote_count: seriesDetails.vote_count,
  }
  return (
    <div
      className={cx(
        'mx-4 mb-4 md:ml-0 md:mt-4',
        !seriesDetails?.poster_path && 'mt-4',
      )}
    >
      <div className="mb-2 flex flex-row justify-between">
        <h1 className="w-11/12 text-3xl md:w-auto md:text-4xl">
          {seriesDetails?.name}
        </h1>
        {isSignedIn ? (
          <CardHeader
            className="relative right-0 top-0 mr-2 h-12 justify-end md:right-0 md:top-0 md:w-56"
            onClick={() =>
              toggleBookmark({
                selection_id: seriesDetails.id,
                user_id: user?.id,
                selection_type: 'TV Series',
                series_data: bookmarkData,
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

const SeriesPoster = ({
  poster_path,
  name,
}: {
  poster_path: string
  name: string
}) => {
  return poster_path ? (
    <Image
      className="h-auto scale-90 self-center rounded-lg drop-shadow-md md:m-4 md:scale-100"
      src={`https://image.tmdb.org/t/p/original${poster_path}`}
      width={400}
      height={250}
      alt={`${name} poster`}
    />
  ) : (
    <div className="m-4 hidden aspect-[9/16] items-center justify-center rounded-lg bg-entertainment-pure-white p-4 text-center text-xl text-entertainment-greyish-blue md:flex md:text-2xl">
      {name ?? 'No image available'}
    </div>
  )
}

export default SeriesDetailsPage
