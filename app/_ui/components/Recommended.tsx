import { SelectionWithRegularThumbs } from '@/types/db'
import { trpc } from '@/lib/server/trpc'
import SectionComponent from '@/app/_ui/components/SectionComponent'

const getRecommendedData = (search: string) => {
  const recommendedData = trpc.recommended.useQuery(search)
  return recommendedData?.data?.data?.selections as SelectionWithRegularThumbs[]
}

const Recommended = ({ search }: { search: string }) => {
  const sectionData = getRecommendedData(search)

  if (!sectionData) null

  return <SectionComponent sectionData={sectionData} section="Recommended" />
}

export default Recommended
