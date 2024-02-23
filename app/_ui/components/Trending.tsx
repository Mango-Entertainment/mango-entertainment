import TrendingCard from "@/app/_ui/components/TrendingCard";
import { trpc } from "@/lib/server/trpc";


const Trending = ({search} : {search: string}) => {
  const { data } = trpc.trending.useQuery(search)
  const trendingData = data?.data.selections
  if(trendingData && trendingData.length < 1) return
  return (
    <div className="ml-4 overflow-scroll text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:text-3xl md:mb-6">Trending</h1>
      {trendingData ? (
        <div
          className="flex mb-8 gap-4 flex-nowrap md:gap-10 w-max"
          id="carousel"
        >
          {trendingData.map((selection) => {
            if (!selection.TrendingThumb?.large) return
            return (
              <TrendingCard
                key={selection.id}
                id={selection.id}
                is_bookmarked={selection.is_bookmarked}
                title={selection.title}
                rating={selection.rating}
                category={selection.category}
                year={selection.year}
                imageString={selection.TrendingThumb?.large.slice(8)}
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