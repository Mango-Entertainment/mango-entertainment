import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const RegularCardSkeleton = () => {
  return (
    <Card variant={'regular'}>
      <CardContent>
        <Skeleton className="mb-1 h-[87px] w-40 rounded-lg md:mb-2 md:h-[160px] md:w-[250px]" />
      </CardContent>
      <CardFooter>
        <CardDescription className="mb-1 gap-1 text-[11px] md:text-sm">
          <Skeleton className="h-[12px] w-[150px] md:w-[180px]" />
        </CardDescription>
        <CardTitle className="md:text-lg">
          <Skeleton className="md:w-[150px] w-[120px] h-[15px]" />
        </CardTitle>
      </CardFooter>
    </Card>
  )
}

export default RegularCardSkeleton
