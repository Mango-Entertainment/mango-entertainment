import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import useBookmarks from '@/app/_hooks/useBookmarks'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import { type FC } from 'react'
import Link from 'next/link'

interface SelectionCardProps {
  selection_id: number
  bookmarked: boolean
  selection_type: 'Movie' | 'TV Series'
  selection_title: string
  selection_poster_path: string
  selection_year: string
}

export type Selection = {
  title: string
  year: string
  imageString: string
}

const SelectionCard: FC<SelectionCardProps> = ({
  selection_id,
  bookmarked,
  selection_type,
  selection_title,
  selection_poster_path,
  selection_year,
}) => {
  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()
  if (!selection_title) return

  return (
    <div>
      <Card variant={'selection'}>
        <AspectRatio
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${selection_poster_path}})`,
          }}
          className="rounded-lg bg-cover"
          ratio={2 / 3}
        >
          <CardContent className="flex h-full flex-col justify-between">
            <div className="flex flex-row justify-between">
              <Link
                href={
                  selection_type === 'Movie' ? `movies/${selection_id}` : `series/${selection_id}`
                }
                className="h-full w-full grow"
              />
              {isSignedIn ? (
                <CardHeader
                  onClick={() =>
                    toggleBookmark({
                      selection_id: selection_id,
                      user_id: user.id,
                      selection_type: selection_type,
                      selection_title: selection_title,
                      selection_poster_path: selection_poster_path,
                      selection_year: selection_year,
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
                selection_type === 'Movie' ? `movies/${selection_id}` : `series/${selection_id}`
              }
              className="h-full w-full grow content-center"
            >
              {!selection_poster_path ? (
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
      <Link href={selection_type === 'Movie' ? `movies/${selection_id}` : `series/${selection_id}`}>
        <CardFooter className="w-40 pt-2 md:w-56">
          <CardTitle className="text-wrap md:text-lg">
            {selection_title}
          </CardTitle>
          <CardDescription className="text-xs md:text-sm">
            {selection_year}
          </CardDescription>
        </CardFooter>
      </Link>
    </div>
  )
}

export default SelectionCard
