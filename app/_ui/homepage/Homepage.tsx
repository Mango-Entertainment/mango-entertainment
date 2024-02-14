import Search from "@/app/_ui/components/Search";
import Trending from "@/app/_ui/components/Trending";
import Recommended from "@/app/_ui/components/Recommended";

const Homepage = () => {
  return <div className="text-entertainment-greyish-blue">
    <Search />
    <Trending />
    <Recommended />
    </div>;
}

export default Homepage