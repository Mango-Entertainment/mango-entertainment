'use client'

import SectionComponent from "@/app/_ui/components/SectionComponent";

const Recommended = ({search}: {search: string}) => {
  return (
    <SectionComponent section="Recommended" bookmarked={false} search={search} />    
  );
}

export default Recommended;