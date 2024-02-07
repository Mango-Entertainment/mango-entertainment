import TrendingCard from "@/app/ui/components/TrendingCard";
// import {getTrending, SelectionWithTrendingThumbs} from "@/app/lib/db";
import queryClient from "@/utils/query-client";
import { trpc } from "@/utils/trpc";

// const storedTrendingData = getTrending();

const Trending = async () => {
  const query = trpc.getTrending.useQuery()
  console.log(query)
  // const trendingData: SelectionWithTrendingThumbs = await storedTrendingData
  // if (!trendingData) return;

  return (
    <div className="ml-4 overflow-scroll text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:text-3xl md:mb-6">Trending</h1>
      <div
        className="flex mb-8 gap-4 flex-nowrap md:gap-10 w-max"
        id="carousel"
      >
        {/* {trendingData.map((selection) => {
          if(!selection.TrendingThumb?.large) return
          return <TrendingCard 
            key={selection.id}
            id={selection.id} 
            is_bookmarked={selection.is_bookmarked} 
            title={selection.title} 
            rating={selection.rating} 
            category={selection.category} 
            year={selection.year} 
            imageString={selection.TrendingThumb?.large.slice(8)} 
          />;
        })} */}
      </div>
    </div>
  );
};

export default Trending;
