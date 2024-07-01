import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import useBookmarks from '@/app/_hooks/useBookmarks'
import Image from 'next/image'
import { type FC } from 'react'
import { trpc } from '@/lib/server/trpc'
import { cx } from 'class-variance-authority'

interface DetailsPosterProps {
  selection_id: number
  bookmarked: boolean
  selection_type: 'Movie' | 'TV Series'
  selection_title: string
  selection_poster_path: string
  selection_year: string
}

const DetailsPoster: FC<DetailsPosterProps> = ({
  selection_id,
  bookmarked,
  selection_type,
  selection_title,
  selection_poster_path,
  selection_year,
}) => {
  const user = trpc.users.getCurrent.useQuery()
  const toggleBookmark = useBookmarks()
  if (!selection_title) return

  return (
    <div className="md:col-span-2">
      <Card variant="poster">
        {user.data ? (
          <CardHeader
            onClick={() =>
              toggleBookmark({
                selection_id: selection_id,
                user_id: user?.data?.id ?? '',
                selection_type: selection_type,
                selection_title: selection_title,
                selection_poster_path: selection_poster_path ?? '',
                selection_year: selection_year,
              })
            }
            className="click:scale-100 right-0 z-10 p-2 absolute top-0 origin-center cursor-pointer transition-transform duration-500 hover:scale-125 md:p-3 md:hover:scale-150"
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
        <AspectRatio
          style={{ background: 'rgba(255,255,255,0.2)' }}
          className="rounded-lg"
          ratio={2 / 3}
        >
          {selection_poster_path ? (
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={`https://image.tmdb.org/t/p/w342${selection_poster_path}`}
              />
              <source
                media="(min-width: 768px) and (max-width: 1023px)"
                srcSet={`https://image.tmdb.org/t/p/w500${selection_poster_path}`}
              />
              <source
                media="(min-width: 1024px)"
                srcSet={`https://image.tmdb.org/t/p/w780${selection_poster_path}`}
              />
              <img
                src={`https://image.tmdb.org/t/p/w342${selection_poster_path}}`}
                alt={`${selection_title} poster`}
                className="w-full rounded-lg"
              />
            </picture>
          ) : (
            <div className="h-full w-full rounded-lg grow content-center ">
              <div className=" bg-entertainment-pure-white p-2 text-center text-xl text-entertainment-greyish-blue">
                No image available
              </div>
            </div>
          )}
        </AspectRatio>
      </Card>
    </div>
  )
}

export default DetailsPoster
