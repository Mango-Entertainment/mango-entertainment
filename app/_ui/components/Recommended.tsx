import { trpc } from '@/lib/server/trpc'
import SectionComponent from '@/app/_ui/components/SectionComponent'

const getRecommendedData = (search: string) => {
  const recommendedData = trpc.getRecommended.useQuery({search})
  return recommendedData.data
}

const Recommended = ({ search }: { search: string }) => {
  const sectionData = getRecommendedData(search)

  if (!sectionData) null

  return <SectionComponent sectionData={sectionData} section="Recommended" />
}

export default Recommended
