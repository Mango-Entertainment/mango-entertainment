import { Skeleton } from '@/components/ui/skeleton'

const TrendingSkeleton = () => {
  return (
    <div className="mb-6 flex gap-4 md:gap-6">
      <Skeleton className="h-[117px] w-[240px] md:w-[470px] md:h-[230px]" />
      <Skeleton className="h-[117px] w-[240px] md:w-[470px] md:h-[230px]" />
      <Skeleton className="h-[117px] w-[240px] md:w-[470px] md:h-[230px] hidden md:block" />
    </div>
  )
}

export default TrendingSkeleton
