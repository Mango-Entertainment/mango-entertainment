import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const SkeletonCard = () => {
  return (
    <Card variant={'regular'}>
      <CardContent>
        <Skeleton className="mb-1 h-60 w-40 rounded-lg md:mb-2 md:h-[336px] md:w-56" />
      </CardContent>
      <CardFooter>
        <CardTitle className="mb-1 gap-1">
          <Skeleton className="h-5 w-32 md:h-7 md:w-56" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="md:w-42 h-4 w-28 md:h-5" />
        </CardDescription>
      </CardFooter>
    </Card>
  )
}

export default SkeletonCard
