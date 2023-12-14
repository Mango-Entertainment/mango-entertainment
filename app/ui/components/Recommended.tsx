import { getRecommended } from "@/app/lib/db";
import RegularCard from "./RegularCard";

const Recommended = async () => {
    const recommendedData = await getRecommended();
    if (!recommendedData) return;
    console.log(recommendedData.length)
  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="text-xl md:text-3xl font-light mb-4 md:mb-6 lg:mb-8">
        Recommended for you
      </h1>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit md:gap-x-10 md:gap-y-8 mb-8"
        id="carousel"
      >
        {recommendedData.map((selection) => {
          // {console.log("selection", selection)}
          return <RegularCard selection={selection} key={selection.id} />;
        })}
      </div>
    </div>
  );
}

export default Recommended;