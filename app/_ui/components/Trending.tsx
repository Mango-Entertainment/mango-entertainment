import { trpc } from "@/lib/server/trpc";
import TrendingCard from "@/app/_ui/components/TrendingCard";
import { type RouterOutputs } from "@/app/api/trpc/trpc-router";
import { type FC } from "react";

type TrendingSectionProps = {
  bookmarks: RouterOutputs["getBookmarks"] | undefined
  search: string
}

const getTrendingData = (search: string) => {
  const trendingData = trpc.getTrending.useQuery({search})
  return trendingData.data
}

const Trending:FC<TrendingSectionProps> = ({search, bookmarks}) => {
  const trendingData = getTrendingData(search)
  if(trendingData && trendingData.results < 1) return <></>
  return (
    <div className="ml-4 overflow-scroll text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:text-3xl md:mb-6">Trending</h1>
      {trendingData ? (
        <div
          className="flex mb-8 gap-4 flex-nowrap md:gap-10 w-max"
          id="carousel"
        >
          {trendingData.data.map((selection) => {
            const bookmarked = bookmarks?.data.filter((bookmark) => bookmark.selection_id === selection.id)[0] ?? {bookmarked: false}
            if (!selection.TrendingThumb?.large) return
            return (
              <TrendingCard
                key={selection.id}
                id={selection.id}
                title={selection.title}
                rating={selection.rating}
                category={selection.category}
                year={selection.year}
                imageString={selection.TrendingThumb?.large.slice(8)}
                bookmarked={bookmarked.bookmarked}
              />
            )
          })}
        </div>
      ) : (
        <div>Loading</div>
      )}
    </div>
  )
}

export default Trending;
