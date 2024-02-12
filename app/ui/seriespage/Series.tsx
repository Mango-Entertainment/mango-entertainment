'use client'

import SectionComponent from "@/app/ui/components/SectionComponent";
import { trpc } from "@/utils/trpc";
import Search from "../components/Search";


const Series = () => {
  const { data } = trpc.getSelection.useQuery()
  let selectionData = data?.data.selections
  if (!selectionData) return

  const seriesData = selectionData.filter((selection) => {
    return selection.category === 'TV Series'
  })
  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionTitle="TV Series" {...seriesData} />
    </div>
  );
};

export default Series;
