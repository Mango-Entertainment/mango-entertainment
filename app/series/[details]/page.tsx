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
          className="mt-2 w-full bg-cover md:mt-4 lg:mt-8"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path}})`,
          }}
        >
          <div className="m-4 flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:aspect-video md:flex-row md:gap-2 md:p-4">
            <SeriesPoster poster_path={data.poster_path} name={data.name} />
            <SeriesDetailContent bookmarked={bookmarked} seriesDetails={data} />
          </div>
        </div>
      ) : (
        <div className="mt-2 aspect-video w-full bg-slate-700 bg-cover md:mt-4 lg:mt-8">
          <div className="flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:m-4 md:aspect-video md:flex-row md:gap-2 md:p-4">
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
        'relative mx-4 mb-2 md:ml-0 md:mt-2 lg:w-full lg:place-content-stretch',
        // if there's no poster path, add margin top
        !seriesDetails?.poster_path && 'mt-4',
      )}
    >
      <div className="mb-2 flex flex-row justify-between">
        <h1 className="w-11/12 text-3xl md:w-auto lg:text-4xl">
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
          <div className="relative right-0 top-0 mr-2 h-12 justify-end md:right-0 md:top-0 md:w-56"></div>
        )}
      </div>
      <p className="text-xl italic md:text-2xl">{seriesDetails?.tagline}</p>
      <div className="my-2 flex flex-wrap justify-between lg:my-3">
        <p>{seriesDetails.number_of_seasons} season(s)</p>
        {/* <span className="text-lg opacity-50 md:text-xl md:hidden">•</span> */}
        <p>
          {seriesDetails?.genres.map((genre, index) =>
            index === 0 ? `${genre.name}` : `, ${genre.name}`,
          )}
        </p>
        {/* <span className="text-lg opacity-50 md:text-xl md:hidden">•</span> */}
        <p>
          {seriesDetails?.origin_country}{' '}
          {seriesDetails.first_air_date.slice(0, 4)}
        </p>
        {/* <p>{seriesDetails?.Episode_run_time[0]} min</p> */}
      </div>
      <p className="text-clip text-lg lg:text-xl">{seriesDetails?.overview ? seriesDetails.overview : 'No description available'}</p>
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
    <div className="mx-auto aspect-[2/3] max-w-96 rounded-lg">
      <Image
        className="scale-90 rounded-lg"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        width={400}
        height={250}
        alt={`${name} poster`}
      />
    </div>
  ) : (
    <div className="m-4 hidden aspect-[9/16] items-center justify-center rounded-lg bg-entertainment-pure-white p-4 text-center text-xl text-entertainment-greyish-blue md:flex md:text-2xl">
      {name ?? 'No image available'}
    </div>
  )
}

export default SeriesDetailsPage
