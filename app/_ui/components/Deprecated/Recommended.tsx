import { trpc } from '@/lib/server/trpc'
import SectionComponent from '@/app/_ui/components/Deprecated/SectionComponent'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'
import { type FC } from 'react'
import SkeletonSectionComponent from '@/app/_ui/components/Deprecated/SkeletonSectionComponent'

type RecommendedSectionProps = {
  bookmarks: RouterOutputs['bookmarks']['getBookmarks'] | undefined
  search: string
}

const Recommended:FC<RecommendedSectionProps> = ({ search, bookmarks } ) => {
  const {data, isLoading} = trpc.selections.getRecommended.useQuery({ search })

  if (!data) null
  if(isLoading) return <SkeletonSectionComponent section="Recommended" />

  return <SectionComponent sectionData={data} section="Recommended" bookmarks={bookmarks} />
}

export default Recommended
