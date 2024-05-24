import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { type FC } from 'react'
import { useUser } from '@clerk/nextjs'
import useBookmarks from '@/app/_hooks/useBookmarks'
import { cx } from 'class-variance-authority'
import { CardHeader } from '@/components/ui/card'
// import SkeletonDetails from '@/app/_ui/components/SkeletonDetails'
import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '@/components/ui/arrowbuttons'
import Image from 'next/image'

type SeriesDetailsContentProps = {
  seriesDetails: RouterOutputs['tmdb']['getSeriesDetails']
  bookmarked: boolean
}

const SeriesInfo: FC<SeriesDetailsContentProps> = ({
  seriesDetails,
  bookmarked,
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: false,
    align: 'start',
  })

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)

  return (
    <div
      className={cx(
        'relative mx-4 my-2 max-w-full md:mx-2 md:mt-2 md:w-full lg:place-content-stretch',
        // if there's no poster path, add margin top
        !seriesDetails?.poster_path && 'mt-4',
      )}
    >
      <Tabs defaultValue="details">
        <div className="flex justify-center">
          <TabsList className=" mb-2">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="details">
          <SeriesDetailContent
            bookmarked={bookmarked}
            seriesDetails={seriesDetails}
          />
        </TabsContent>
        <TabsContent value="description">
          <p className="text-lg lg:text-xl">
            {seriesDetails?.overview
              ? seriesDetails.overview
              : 'No description available'}
          </p>
        </TabsContent>
        <TabsContent
          // className="h-max-full mb-20 flex flex-col flex-wrap md:flex-row"
          value="videos"
        >
          <section className="m-auto max-w-full">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="mb-2 flex touch-pan-y touch-pinch-zoom gap-4">
                {seriesDetails?.videos.results.map((video) => {
                  return (
                    <div
                      key={video.id}
                      className="w-full min-w-0 flex-[0_0_100%] "
                    >
                      <iframe
                        className="aspect-video w-full rounded-xl"
                        src={`https://www.youtube.com/embed/${video.key}`}
                        allowFullScreen
                      />
                    </div>
                  )
                })}
              </div>
              <div className="grid grid-cols-1 justify-items-end">
                <div className="grid w-24 grid-cols-2 gap-1 md:mr-4">
                  <PrevButton
                    onClick={onPrevButtonClick}
                    disabled={prevBtnDisabled}
                  />
                  <NextButton
                    onClick={onNextButtonClick}
                    disabled={nextBtnDisabled}
                  />
                </div>
              </div>
            </div>
          </section>
        </TabsContent>
      </Tabs>
    </div>
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
      className='h-auto'
      // {cx(
      //   'relative mx-4 mb-2 md:ml-0 md:mt-2 lg:w-full lg:place-content-stretch',
      //   // if there's no poster path, add margin top
      //   !seriesDetails?.poster_path && 'mt-4',
      // )}
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
        <p>
          {seriesDetails.number_of_seasons === 1
            ? '1 season'
            : `${seriesDetails.number_of_seasons} seasons`}
        </p>
        <p>
          {seriesDetails?.genres.map((genre, index) =>
            index === 0 ? `${genre.name}` : `, ${genre.name}`,
          )}
        </p>
        <p>
          {seriesDetails?.origin_country}{' '}
          {seriesDetails.first_air_date.slice(0, 4)}
        </p>
      </div>
    </div>
  )
}

export default SeriesInfo