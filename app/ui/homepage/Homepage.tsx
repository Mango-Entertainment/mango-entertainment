import Recommended from "../components/Recommended";
import Search from "../components/Search";
import Trending from "../components/Trending";

const Homepage = () => {
  return <div className="text-entertainment-greyish-blue">
    <Search />
    <Trending />
    <Recommended />
    </div>;
}

export default Homepage