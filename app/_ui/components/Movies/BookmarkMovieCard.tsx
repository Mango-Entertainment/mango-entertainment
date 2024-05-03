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
import { trpc } from '@/lib/server/trpc'

type BookmarkedMovieCardProps = {
  id: number
  search: string
}

const BookmarkMovieCard: FC<BookmarkedMovieCardProps> = ({ id, search }) => {
  const { data, isLoading } = trpc.tmdb.getMovieDetails.useQuery({
    movie_id: id,
  })
  const categoryIcon = '/icon-category-movie.svg'

  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()
  const bookmark = trpc.bookmarks.getBookmark.useQuery({
    user_id: user?.id ?? '',
    selection_id: id,
    selection_type: 'Movie'
  })
  if (isLoading) return <>loading</>
  if(!bookmark.data?.bookmarked) return
  return (
    <Card variant={'regular'}>
      <CardContent>
        <div className="mb-1 flex h-60 flex-col justify-center rounded-lg   md:mb-2 md:h-[336px]">
          <Image
            className="rounded-lg bg-origin-content backdrop-blur-md"
            src={`https://image.tmdb.org/t/p/w342${data?.poster_path}`}
            width={280}
            height={336}
            alt="trending image"
          />
        </div>
        {isSignedIn ? (
          <CardHeader
            onClick={() =>
              toggleBookmark({
                selection_id: id,
                user_id: user.id,
                selection_type: 'Movie',
              })
            }
          >
            <Image
              src="/icon-bookmark-full.svg"
              height={32}
              width={32}
              alt="bookmark icon"
            />
          </CardHeader>
        ) : (
          <></>
        )}
      </CardContent>
      <CardFooter>
        <CardDescription className="gap-1 text-[11px] md:text-sm">
          {data?.release_date}
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
        <CardTitle className="md:text-lg">{data?.title}</CardTitle>
      </CardFooter>
    </Card>
  )
}

export default BookmarkMovieCard
