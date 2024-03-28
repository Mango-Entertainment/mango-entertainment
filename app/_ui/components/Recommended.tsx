import { trpc } from '@/lib/server/trpc'
import SectionComponent from '@/app/_ui/components/SectionComponent'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import { type FC } from 'react'

type RecommendedSectionProps = {
  bookmarks: RouterOutputs['getBookmarks'] | undefined
  search: string
}

const getRecommendedData = (search: string) => {
  const recommendedData = trpc.getRecommended.useQuery({search})
  return recommendedData.data
}

const Recommended:FC<RecommendedSectionProps> = ({ search, bookmarks } ) => {
  const sectionData = getRecommendedData(search)

  if (!sectionData) null

  return <SectionComponent sectionData={sectionData} section="Recommended" bookmarks={bookmarks} />
}

export default Recommended
