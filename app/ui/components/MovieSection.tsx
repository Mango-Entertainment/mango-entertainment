import { getMovies } from "@/app/lib/db"
import SectionComponent from "./SectionComponent";

const MovieSection = async () => {
    const movieData = await getMovies();
    // console.log(movieData.length)
  return (
    <SectionComponent
      sectionTitle="Movies"
      data={movieData}
    />
  );
}

export default MovieSection