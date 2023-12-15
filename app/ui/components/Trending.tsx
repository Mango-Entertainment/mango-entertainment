import TrendingCard from "./TrendingCard";
import { getTrending } from "@/app/lib/db";

const Trending = async () => {
  const trendingData = await getTrending();
  // console.table(trendingData);
  if (!trendingData) return;

  return (
    <div className="ml-4 text-entertainment-pure-white overflow-scroll">
      <h1 className="text-xl md:text-3xl font-light mb-4 md:mb-6">Trending</h1>
      <div
        className="flex flex-nowrap gap-4 md:gap-10 w-max mb-8"
        id="carousel"
      >
        {trendingData.map((selection) => {
          // {console.log("selection", selection)}
          return <TrendingCard selection={selection} key={selection.id} />;
        })}
      </div>
    </div>
  );
};

export default Trending;
