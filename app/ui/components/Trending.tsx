import {createClient} from "@/utils/supabase/client";
import TrendingCard from "./TrendingCard";
import {Tables} from "@/types"

const apiCall = async () => {
  const supabase = createClient();
  let {data: data, error} = await supabase
    .from("data")
    .select("*")
    .eq("isTrending", true);
  return data;
};

const Trending = () => {
    const {
      title,
      id,
      thumbnail,
      year,
      category,
      rating,
      isBookmarked,
      isTrending,
    } = apiCall();

  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="text-xl font-light">Trending</h1>
      {data.map((selection) => {
        return (
            <TrendingCard selection={selection} />
        )
      })}
    </div>
  );
};

export default Trending;
