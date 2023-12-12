import TrendingCard from "./TrendingCard";
import {Tables} from "@/types"
import { getTrending } from "@/app/lib/db";

const Trending = async () => {
  const trendingData = await getTrending();
  // console.table(trendingData);
  if (!trendingData) return;

  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="text-xl font-light">Trending</h1>
      <div className="flex flex-nowrap gap-3 w-max" id="carousel">
        {trendingData.map((selection) => {
          // {console.log("selection", selection)}
          return <TrendingCard selection={selection} key={selection.id} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
