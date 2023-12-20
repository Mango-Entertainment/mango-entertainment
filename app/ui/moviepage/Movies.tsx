import {getMovies} from "@/app/lib/db";
import SectionComponent from "@/app/ui/components/SectionComponent";
import Search from "@/app/ui/components/Search";

const Movies = async () => {
  const movieData = await getMovies();
  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionTitle="Movies" data={movieData} />
    </div>
  );
};

export default Movies;
