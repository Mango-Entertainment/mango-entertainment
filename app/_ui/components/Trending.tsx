import { trpc } from '@/lib/server/trpc'
import TrendingCard from '@/app/_ui/components/TrendingCard'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import { type FC } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

type TrendingSectionProps = {
  bookmarks: RouterOutputs['getBookmarks'] | undefined
  search: string
}

const getTrendingData = (search: string) => {
  const trendingData = trpc.getTrending.useQuery({ search })
  return trendingData.data
}

const Trending: FC<TrendingSectionProps> = ({ search, bookmarks }) => {
  const trendingData = getTrendingData(search)
  if (trendingData && trendingData.results < 1) return <></>
  return (
    <div className="ml-4 max-w-[95%] text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:mb-6 md:text-3xl">Trending</h1>
      {trendingData ? (
        <div className="mb-8 flex max-w-full flex-nowrap gap-4 md:gap-10">
          <Carousel opts={{ align: 'start' }}>
            <CarouselContent>
              {Array.from(
                trendingData.data.map((selection) => {
                  const bookmarked = bookmarks?.data.filter(
                    (bookmark) => bookmark.selection_id === selection.id,
                  )[0] ?? { bookmarked: false }
                  if (!selection.TrendingThumb?.large) return
                  return (
                    <CarouselItem key={selection.id}>
                      <TrendingCard
                        id={selection.id}
                        title={selection.title}
                        rating={selection.rating}
                        category={selection.category}
                        year={selection.year}
                        imageString={selection.TrendingThumb?.large.slice(8)}
                        bookmarked={bookmarked.bookmarked}
                      />
                    </CarouselItem>
                  )
                }),
              )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  )
}

export default Trending
