import { trpc } from '@/lib/server/trpc'
import TrendingCard from '@/app/_ui/components/TrendingCard'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import { type FC } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from '@/components/ui/arrowbuttons'

type TrendingSectionProps = {
  bookmarks: RouterOutputs['getBookmarks'] | undefined
  search: string
}

const getTrendingData = (search: string) => {
  const trendingData = trpc.getTrending.useQuery({ search })
  return trendingData.data
}

const Trending: FC<TrendingSectionProps> = ({ search, bookmarks }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({containScroll: false, align: 'start'})
  const trendingData = getTrendingData(search)
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  if (trendingData && trendingData.results < 1) return <></>
  return (
    <div className="ml-4 border border-orange-500 text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:mb-6 md:text-3xl">Trending</h1>
      <section>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="mb-8 flex w-max touch-pan-y gap-4 md:gap-10">
            {trendingData?.data.map((selection) => {
              const bookmarked = bookmarks?.data.filter(
                (bookmark) => bookmark.selection_id === selection.id,
              )[0] ?? { bookmarked: false }
              if (!selection.TrendingThumb?.large) return
              return (
                <TrendingCard
                  id={selection.id}
                  title={selection.title}
                  rating={selection.rating}
                  category={selection.category}
                  year={selection.year}
                  imageString={selection.TrendingThumb?.large.slice(8)}
                  bookmarked={bookmarked.bookmarked}
                  key={selection.id}
                />
              )
            })}
          </div>
        </div>
        <div className="items-right mt-2 grid grid-cols-1 justify-items-end md:mt-4">
          <div className="grid w-24 grid-cols-2 items-center gap-1 md:mr-12 lg:mr-24">
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
      </section>
    </div>
  )

}
export default Trending