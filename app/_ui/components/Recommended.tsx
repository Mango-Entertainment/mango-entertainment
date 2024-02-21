'use client'

import SectionComponent from "@/app/_ui/components/SectionComponent";

const Recommended = () => {
  let sectionQuery = {
    is_trending: false
  }

  return (
    <SectionComponent sectionTitle="Recommended" sectionQuery={sectionQuery} />    
  );
}

export default Recommended;