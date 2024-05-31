import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import useBookmarks from '@/app/_hooks/useBookmarks'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { type FC } from 'react'
import type {
  MovieCardData,
  SeriesCardData,
} from '@/lib/server/routes/tmdb/tmdb'
import Link from 'next/link'

interface SelectionCardProps {
  id: number
  bookmarked: boolean
  selection_type: 'Movie' | 'TV Series'
  movie_card_data?: MovieCardData
  series_card_data?: SeriesCardData
}

type Selection = {
  title: string
  year: string
  imageString: string
}

const SelectionCard: FC<SelectionCardProps> = ({
  id,
  bookmarked,
  selection_type,
  movie_card_data,
  series_card_data,
}) => {
  const selection: Selection = { title: '', year: '', imageString: '' }
  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()
  if (selection_type === 'Movie') {
    (selection.imageString = movie_card_data?.poster_path ?? ''),
    (selection.title = movie_card_data?.title ?? ''),
    (selection.year = movie_card_data?.release_date.slice(0, 4) ?? '')
  } else {
    (selection.imageString = series_card_data?.poster_path ?? ''),
    (selection.title = series_card_data?.name ?? ''),
    (selection.year = series_card_data?.first_air_date.slice(0, 4) ?? '')
  }
  if (!selection.title) return

  return (
    <div>
      <Card variant={'selection'}>
        <AspectRatio
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${selection.imageString}})`,
          }}
          className="rounded-lg bg-cover"
          ratio={2 / 3}
        >
          <CardContent className="flex h-full flex-col justify-between">
            <div className="flex flex-row justify-between">
              <Link
                href={
                  selection_type === 'Movie' ? `movies/${id}` : `series/${id}`
                }
                className="h-full w-full grow"
              />
              {isSignedIn ? (
                <CardHeader
                  onClick={() =>
                    toggleBookmark({
                      selection_id: id,
                      user_id: user.id,
                      selection_type: selection_type,
                      series_data: series_card_data,
                      movie_data: movie_card_data,
                    })
                  }
                  className="click:scale-100 origin-center cursor-pointer p-2 transition-transform duration-500 hover:scale-125 md:p-3 md:hover:scale-150"
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
            </div>
            <Link
              href={
                selection_type === 'Movie' ? `movies/${id}` : `series/${id}`
              }
              className="h-full w-full grow content-center"
            >
              {!selection.imageString ? (
                <div className="mb-12 bg-entertainment-pure-white p-2 text-center	text-xl text-entertainment-greyish-blue">
                  No image available
                </div>
              ) : (
                <></>
              )}
            </Link>
          </CardContent>
        </AspectRatio>
      </Card>
      <Link href={selection_type === 'Movie' ? `movies/${id}` : `series/${id}`}>
        <CardFooter className="w-40 pt-2 md:w-56">
          <CardTitle className="text-wrap md:text-lg">
            {selection.title}
          </CardTitle>
          <CardDescription className="text-xs md:text-sm">
            {selection.year}
          </CardDescription>
        </CardFooter>
      </Link>
    </div>
  )
}

export default SelectionCard
