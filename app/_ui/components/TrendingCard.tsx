import { type FC } from 'react'
import Image from 'next/image'
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

interface TrendingCardProps {
  id: string
  title: string
  year: number
  category: string
  rating: string
  imageString: string
  bookmarked: boolean
}

const TrendingCard: FC<TrendingCardProps> = ({
  id,
  title,
  year,
  category,
  rating,
  imageString,
  bookmarked,
}) => {
  const categoryIcon =
    category === 'Movie' ? '/icon-category-movie.svg' : '/icon-category-tv.svg'

  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()

  return (
    <Card variant={'trending'}>
      <CardContent>
        <Image
          className="rounded-lg"
          src={imageString}
          width={470}
          height={230}
          alt="trending image"
        />
        {isSignedIn ? (
          <CardHeader
            onClick={() =>
              toggleBookmark({ selection_id: id, user_id: user.id })
            }
          >
            {bookmarked ? (
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
            )}
          </CardHeader>
        ) : (
          <></>
        )}
      </CardContent>
      <CardFooter className="absolute bottom-0 rounded-b-lg bg-gradient-to-b from-transparent to-black/75 p-3 md:p-6">
        <CardDescription className="gap-2 text-xs md:text-base">
          {year}
          <span className="text-sm opacity-50 md:text-xl">•</span>
          <Image
            className="h-3"
            src={categoryIcon}
            height={12}
            width={12}
            alt={`${category} icon`}
          />
          {category}
          <span className="text-sm opacity-50 md:text-xl">•</span>
          {rating}
        </CardDescription>
        <CardTitle className="md:text-2xl">{title}</CardTitle>
      </CardFooter>
    </Card>
  )
}

export default TrendingCard
