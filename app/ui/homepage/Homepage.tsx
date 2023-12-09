import Search from "../components/Search";
import Trending from "../components/Trending";
import TrendingCard from "../components/TrendingCard";

const Homepage = () => {
  return <div className="text-entertainment-greyish-blue">
    <Search />
    <Trending />
    <TrendingCard />
    </div>;
}

export default Homepage