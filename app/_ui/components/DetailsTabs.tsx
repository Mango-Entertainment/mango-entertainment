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
import type { DetailsProps } from '@/app/_ui/components/Details'

import DetailContent from '@/app/_ui/components/DetailContent'

const DetailsTabs: FC<DetailsProps> = ({ selectionData, bookmarked }) => {
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
        'relative max-w-full md:col-span-2 md:w-full lg:place-content-stretch',
        // if there's no poster path, add margin top
        !selectionData?.poster_path && 'mt-4',
      )}
    >
      <Tabs defaultValue="details">
        <div className="flex justify-center">
          <TabsList className=" mb-1 md:mb-2">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="details">
          <DetailContent
            bookmarked={bookmarked}
            selectionData={selectionData}
          />
        </TabsContent>
        <TabsContent value="description">
          <p className="text-lg lg:text-xl">
            {selectionData?.details
              ? selectionData.details
              : 'No description available'}
          </p>
        </TabsContent>
        <TabsContent value="videos">
          {selectionData?.videos.results.length >= 1 ? (
            <section className="m-auto max-w-full">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="mb-2 flex touch-pan-y touch-pinch-zoom gap-4">
                  {selectionData?.videos.results.map((video) => {
                    return (
                      <div key={video.id} className="min-w-0 flex-[1_0_100%]">
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
          ) : (
            <p className="text-lg lg:text-xl">No videos available</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}



export default DetailsTabs
