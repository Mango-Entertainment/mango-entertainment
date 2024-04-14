import { type FC } from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import useBookmarks from '@/app/_hooks/useBookmarks'

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
    <div className="entertainment-pure-white relative md:w-auto w-60">
        <Image
          className="rounded-lg"
          src={imageString}
          width={470}
          height={230}
          alt="trending image"
        />
        {isSignedIn ? (
          <div
            onClick={() =>
              toggleBookmark({ selection_id: id, user_id: user.id })
            }
            className="absolute right-2 top-2 flex content-center justify-center md:right-6 md:top-4"
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
          </div>
        ) : (
          <></>
        )}
        <div className="absolute bottom-0 w-full rounded-b-lg bg-gradient-to-b from-transparent to-black/75 p-3 md:p-6">
          <div className="flex items-center gap-2 text-xs font-light opacity-75 md:text-base">
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
          </div>
          <div className="text-sm font-medium md:text-2xl">{title}</div>
        </div>
      
    </div>
  )
}

export default TrendingCard