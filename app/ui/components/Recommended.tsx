'use client'

import SectionComponent from "@/app/ui/components/SectionComponent";
import { trpc } from '@/utils/trpc'

const Recommended = () => {
  const {data} = trpc.getSelection.useQuery()
  let selectionData = data?.data.selections
  if (!selectionData) return

  
  const recommendedData = selectionData.filter((selection) => {
          return !selection.is_trending
        })
  return (
    <SectionComponent sectionTitle="Recommended for you" {...recommendedData} />    
  );
}

export default Recommended;