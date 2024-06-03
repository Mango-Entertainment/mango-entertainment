import useBookmarks from '@/app/_hooks/useBookmarks'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import type { DetailsProps } from '@/app/_ui/components/Details'
import type { FC } from 'react'
import { CardHeader } from '@/components/ui/card'
import type { Selection } from '@/app/_ui/components/Details'


const DetailContent: FC<DetailsProps> = ({
  selectionData,
  bookmarked,
}) => {
  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()
  // const emptyVideo = {
  //   iso_639_1: '',
  //   iso_3166_1: '',
  //   name: '',
  //   key: '',
  //   site: '',
  //   size: 0,
  //   type: '',
  //   official: false,
  //   published_at: '',
  //   id: '',
  // }
  // const emptySeason = {
  //     air_date: '',
  //     episode_count: 0,
  //     id: 0,
  //     name: '',
  //     overview: '',
  //     poster_path: '',
  //     season_number: 0,
  //     vote_average: 0,
  //   }
  
  // else {
  //   selection.title = seriesData?.name ?? ''
  //   selection.year = seriesData?.first_air_date.slice(0, 4) ?? ''
  //   selection.id = seriesData?.id ?? 0
  //   selection.details = seriesData?.overview ?? ''
  //   selection.tagline = seriesData?.tagline ?? ''
  //   selection.origin_country = seriesData?.origin_country ?? ['']
  //   selection.genres = seriesData?.genres ?? [{ id: 0, name: '' }]
  //   selection.videos = seriesData?.videos ?? null
  //   selection.seasons = seriesData?.seasons ?? null
  // }
  if (!selectionData.title) return
  return (
    <div className="h-auto">
      <div className="mb-2 flex flex-row justify-between">
        <h1 className="w-11/12 text-3xl md:w-auto lg:text-4xl">
          {selectionData.title}
        </h1>
        {/* {isSignedIn ? (
          <CardHeader
            className="relative right-0 top-0 mr-2 h-12 justify-end md:right-0 md:top-0 md:w-56"
            onClick={() =>
              toggleBookmark({
                selection_id: selection.id,
                user_id: user?.id,
                selection_type: selection_type,
                movie_data: movieData,
                series_data: seriesData
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
        )} */}
      </div>
      <p className="text-xl italic md:text-2xl">{selectionData.tagline}</p>
      <div className="my-2 flex flex-wrap justify-between lg:my-3">
        {selectionData.selection_type === 'Movie' ? (
          <p>{selectionData.runtime} min</p>
        ) : (
          <p>
            {selectionData.number_of_seasons === 1
              ? '1 season'
              : `${selectionData.number_of_seasons} seasons`}
          </p>
        )}
        <p>
          {selectionData.genres.map((genre, index) =>
            index === 0 ? `${genre.name}` : `, ${genre.name}`,
          )}
        </p>
        <p>
          {selectionData.origin_country} {selectionData.year}
        </p>
      </div>
    </div>
  )
}

export default DetailContent
