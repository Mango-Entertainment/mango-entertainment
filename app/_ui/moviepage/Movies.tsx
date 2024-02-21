'use client'

import Search from "@/app/_ui/components/Search";
import SectionComponent from "@/app/_ui/components/SectionComponent";

const Movies = () => {
  let sectionQuery = {
    category: 'Movie',
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionTitle="Movies" sectionQuery={sectionQuery} />
    </div>
  )
};

export default Movies;
