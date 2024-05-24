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
import { type SeriesCardData } from '@/lib/server/routes/tmdb/tmdb'
import Link from 'next/link'

export type SeriesCardProps = {
  series_card_data: SeriesCardData
  bookmarked: boolean
}

const SeriesCard: FC<SeriesCardProps> = ({ series_card_data, bookmarked }) => {
  const categoryIcon = '/icon-category-series.svg'

  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()
  if (!series_card_data) return

  return (
    <Card variant={'regular'}>
      <CardContent>
        <div className="mb-1 flex h-60 flex-col justify-center rounded-lg bg-entertainment-pure-white bg-opacity-50 md:mb-2 md:h-[336px]">
          {series_card_data?.poster_path ? (
            <Image
              className="rounded-lg bg-origin-content backdrop-blur-md"
              src={`https://image.tmdb.org/t/p/w342${series_card_data?.poster_path}`}
              width={280}
              height={174}
              alt="poster image"
            />
          ) : (
            <div className="bg-entertainment-pure-white text-center text-xl text-entertainment-greyish-blue">
              {series_card_data.name ?? 'No image available'}
            </div>
          )}
        </div>
        {isSignedIn ? (
          <CardHeader
            onClick={() =>
              toggleBookmark({
                selection_id: series_card_data.id,
                user_id: user.id,
                selection_type: 'TV Series',
                series_data: series_card_data,
              })
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
      <Link href={`series/${series_card_data.id}`}>
        <CardFooter>
          <CardTitle className="md:text-lg">{series_card_data.name}</CardTitle>
          <CardDescription className="gap-1 text-[11px] md:text-sm">
            {series_card_data.original_language.toUpperCase()} {series_card_data.first_air_date.slice(0, 4)}
          </CardDescription>
        </CardFooter>
      </Link>
    </Card>
  )
}

export default SeriesCard
