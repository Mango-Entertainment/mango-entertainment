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
  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()
  if (!selection_title) return

  return (
    <div className="md:col-span-2">
      <Card variant="poster">
        <AspectRatio
          style={
            selection_poster_path
              ? {
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${selection_poster_path}})`,
                }
              : {background: 'rgba(255,255,255,0.2)'}
          }
          className="rounded-lg bg-cover p-2"
          ratio={2 / 3}
        >
          <CardContent className="flex h-full flex-col">
            <div className="flex flex-row ">
              <div className="h-full w-full grow"></div>
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
            {!selection_poster_path && (
              <div className="flex 	grow items-center">
                <div className="mb-12 grow bg-entertainment-pure-white p-2 text-center text-xl text-entertainment-greyish-blue">
                  No image available
                </div>
              </div>
            )}
          </CardContent>
        </AspectRatio>
      </Card>
    </div>
  )
}

export default DetailsPoster
