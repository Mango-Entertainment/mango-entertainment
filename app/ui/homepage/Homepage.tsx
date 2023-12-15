import Search from "@/app/ui/components/Search";
import Trending from "@/app/ui/components/Trending";
import Recommended from "@/app/ui/components/Recommended";

const Homepage = () => {
  return <div className="text-entertainment-greyish-blue">
    <Search />
    <Trending />
    <Recommended />
    </div>;
}

export default Homepage