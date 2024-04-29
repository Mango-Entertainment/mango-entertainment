import Image from 'next/image'
import { type FC } from 'react'
import { useUser } from '@clerk/nextjs'
import useBookmarks from '@/app/_hooks/useBookmarks'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type SeriesCardProps = {
    id: number
    name: string
    poster_path: string
    release_date: string
}

const SeriesCard: FC<SeriesCardProps> = ({
  id,
  name,
  poster_path,
  release_date,
}) => {
  const categoryIcon = '/icon-category-series.svg'

  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()

  return (
    <Card variant={'regular'}>
      <CardContent>
        <Image
          className="mb-1 rounded-lg md:mb-2"
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          width={280}
          height={174}
          alt="trending image"
        />
        {isSignedIn ? (
          <CardHeader
            // onClick={() =>
            //   toggleBookmark({ selection_id: id, user_id: user.id })
            // }
          >
            {/* {bookmarked ? (
              <Image
                src="/icon-bookmark-full.svg"
                height={32}
                width={32}
                alt="bookmark icon"
              />
            ) : (
              <Image
                src="/icon-bookmark-empty.svg"
                height={32}
                width={32}
                alt="bookmark icon"
              />
            )} */}
          </CardHeader>
        ) : (
          <></>
        )}
      </CardContent>
      <CardFooter>
        <CardDescription className="gap-1 text-[11px] md:text-sm">
          {release_date}
          {/* <span className="text-sm opacity-50 md:text-xl">•</span> */}
          {/* <Image
            className="h-3"
            src={categoryIcon}
            height={12}
            width={12}
            alt={`${category} icon`}
          />
          {category} */}
          {/* <span className="text-sm opacity-50 md:text-xl">•</span> */}
          {/* {rating} */}
        </CardDescription>
        <CardTitle className="md:text-lg">{name}</CardTitle>
      </CardFooter>
    </Card>
  )
}

export default SeriesCard
