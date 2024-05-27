import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'


const SelectionCard = () => {
  return (
    <Card variant={'selection'}>
      <AspectRatio ratio={9 / 16}>
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/bcM2Tl5HlsvPBnL8DKP9Ie6vU4r.jpg})`,
          }}
        >
          <CardContent>
            <CardHeader>Bookmarked</CardHeader>
            <CardFooter>
              <CardTitle>title</CardTitle>
              <CardDescription>date</CardDescription>
            </CardFooter>
          </CardContent>
        </div>
      </AspectRatio>
    </Card>
  )
}

export default SelectionCard
