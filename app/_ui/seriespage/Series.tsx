'use client'

import SectionComponent from "@/app/_ui/components/SectionComponent";
import Search from "../components/Search";


const Series = () => {
  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionType="series" />
    </div>
  );
};

export default Series;
