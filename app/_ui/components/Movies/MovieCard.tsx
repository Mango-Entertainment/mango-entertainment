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
import Link from 'next/link'

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
    <Link className="z-10" href={`movies/${movie_card_data.id}`}>
      <Card variant={'regular'}>
        <CardContent>
          <div className="mb-1 flex h-60 flex-col justify-center rounded-lg bg-entertainment-pure-white bg-opacity-50 md:mb-2 md:h-[336px]">
            {movie_card_data.poster_path ? (
              <Image
                className="rounded-lg bg-origin-content backdrop-blur-md"
                src={`https://image.tmdb.org/t/p/w342${movie_card_data?.poster_path}`}
                width={280}
                height={174}
                alt="poster image"
              />
            ) : (
              <div className="bg-entertainment-pure-white text-center text-xl text-entertainment-greyish-blue">
                {movie_card_data.title ?? 'No image available'}
              </div>
            )}
          </div>
          {isSignedIn ? (
            <CardHeader
              className="z-20"
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
               <div onClick={(e) => e.stopPropagation()}></div>
            </CardHeader>
          ) : (
            <></>
          )}
        </CardContent>
        <CardFooter>
          <CardTitle className="md:text-lg">{movie_card_data.title}</CardTitle>
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
        </CardFooter>
      </Card>
    </Link>
  )
}

export default MovieCard
