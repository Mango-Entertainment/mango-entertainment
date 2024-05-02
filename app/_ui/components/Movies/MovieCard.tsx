import Image from 'next/image'
import { type FC } from 'react'
import { useUser } from '@clerk/nextjs'
import useBookmarks from '@/app/_hooks/useBookmarks'
import { type MovieCardData } from '@/lib/server/routes/tmdb/tmdb'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export type MovieCardProps = {
 movie_card_data: MovieCardData
 bookmarked: boolean
}

const MovieCard: FC<MovieCardProps> = ({
  movie_card_data,
  bookmarked,
}) => {
  const categoryIcon = '/icon-category-movie.svg'
  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()
  if(!movie_card_data) return
  return (
    <Card variant={'regular'}>
      <CardContent>
        <Image
          className="mb-1 rounded-lg md:mb-2"
          src={`https://image.tmdb.org/t/p/original${movie_card_data.poster_path}`}
          width={280}
          height={174}
          alt="trending image"
        />
        {isSignedIn ? (
          <CardHeader
            onClick={() =>
              toggleBookmark({
                selection_id: movie_card_data.id,
                user_id: user.id,
                selection_type: 'Movie',
                movie_data: movie_card_data,
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
      <CardFooter>
        <CardDescription className="gap-1 text-[11px] md:text-sm">
          {movie_card_data.release_date}
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
        <CardTitle className="md:text-lg">{movie_card_data.title}</CardTitle>
      </CardFooter>
    </Card>
  )
}

export default MovieCard
