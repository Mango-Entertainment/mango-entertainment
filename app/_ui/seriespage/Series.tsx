'use client'

import SectionComponent from "@/app/_ui/components/SectionComponent";
import Search from "../components/Search";


const Series = () => {
  let sectionQuery = {
    category: 'TV Series',
  }
  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionTitle="Tv series" sectionQuery={sectionQuery} />
    </div>
  );
};

export default Series;
