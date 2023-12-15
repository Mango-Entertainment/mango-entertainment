import SeriesSection from "@/app/ui/components/SeriesSection"
import MovieSection from "../components/MovieSection";
import Recommended from "../components/Recommended";
import Search from "../components/Search";
import Trending from "../components/Trending";
import BookmarkSection from "../components/BookmarkSection";

const Homepage = () => {
  return <div className="text-entertainment-greyish-blue">
    <Search />
    <Trending />
    <Recommended />
    </div>;
}

export default Homepage