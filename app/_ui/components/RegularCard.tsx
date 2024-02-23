import Image from 'next/image'
import { FC } from 'react'

interface RegularCardProps {
  id: string
  is_bookmarked: boolean
  title: string
  year: number
  category: string
  rating: string
  imageString: string
}

const RegularCard: FC<RegularCardProps> = ({
  id,
  title,
  year,
  category,
  is_bookmarked,
  rating,
  imageString
}) => {
  const categoryIcon =
    category === 'Movie'
      ? '/icon-category-movie.svg'
      : '/icon-category-tv.svg'

  return (
    <div className="relative w-40 entertainment-pure-white md:w-56">
      <Image
        className="mb-1 rounded-lg md:mb-2"
        src={imageString}
        width={280}
        height={174}
        alt="trending image"
      />
      <div className="absolute flex content-center justify-center top-2 right-2 md:top-4 md:right-4">
        {is_bookmarked ? (
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
