import Image from 'next/image'
import { type FC } from 'react'
import { useUser } from '@clerk/nextjs'
import useBookmarks from '@/app/_hooks/useBookmarks'

interface RegularCardProps {
  id: string
  title: string
  year: number
  category: string
  rating: string
  imageString: string
  bookmarked: boolean
}

const RegularCard: FC<RegularCardProps> = ({
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
    <div className="relative w-40 entertainment-pure-white md:w-56">
      <Image
        className="mb-1 rounded-lg md:mb-2"
        src={imageString}
        width={280}
        height={174}
        alt="trending image"
      />
      {isSignedIn ? (
        <div
          onClick={() => toggleBookmark({selection_id: id, user_id: user.id})}
          className="absolute flex content-center justify-center top-2 right-2 md:top-4 md:right-4"
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
      <div className="w-full">
        <div className="flex gap-1 text-[11px] md:text-sm font-light items-center opacity-75">
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
        <div className="text-sm font-medium md:text-lg">{title}</div>
      </div>
    </div>
  )
}

export default RegularCard
