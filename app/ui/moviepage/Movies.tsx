'use client'

import Search from "@/app/ui/components/Search";
import SectionComponent from "@/app/ui/components/SectionComponent";
import { trpc } from '@/utils/trpc';

const Movies = () => {
   const { data } = trpc.getSelection.useQuery()
   let selectionData = data?.data.selections
   if (!selectionData) return

   const movieData = selectionData.filter((selection) => {
     return selection.category === 'Movie'
   })
  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionTitle="Movies" {...movieData} />
    </div>
  )
};

export default Movies;
