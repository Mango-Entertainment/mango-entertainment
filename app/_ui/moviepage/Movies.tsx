'use client'

import Search from "@/app/_ui/components/Search";
import SectionComponent from "@/app/_ui/components/SectionComponent";

const Movies = () => {
  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionType="movies" />
    </div>
  )
};

export default Movies;
