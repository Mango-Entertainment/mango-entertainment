'use client'

import Search from "@/app/ui/components/Search";
import SectionComponent from "@/app/ui/components/SectionComponent";

const Movies = () => {
  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionType="movies" />
    </div>
  )
};

export default Movies;
