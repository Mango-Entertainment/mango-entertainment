import { type FC } from 'react'
import SkeletonCard from '@/app/_ui/components/SkeletonCard'

type SkeletonSectionComponentProps = {
    section: string
}

const SkeletonSectionComponent: FC<SkeletonSectionComponentProps> = ({
  section,
}) => {
  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:mb-6 md:text-3xl lg:mb-8">
        {section}
      </h1>
      <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  )
}

export default SkeletonSectionComponent
