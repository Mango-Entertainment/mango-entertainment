import { FC } from "react"
import Image from 'next/image'
interface TrendingCardProps {
  id: string
  is_bookmarked: boolean
  title: string
  year: number
  category: string
  rating: string
  imageString: string
}

const TrendingCard: FC<TrendingCardProps> = ({id, is_bookmarked, title, year, category, rating, imageString }) => {
  const categoryIcon =
    category === "Movie"
      ? "/icon-category-movie.svg"
      : "/icon-category-tv.svg";

  return (
    <div className="relative entertainment-pure-white w-60 md:w-auto">
      <Image
        className="rounded-lg"
        src={imageString}
        width={470}
        height={230}
        alt="trending image"
      />
      <div className="absolute flex content-center justify-center top-2 right-2 md:top-4 md:right-6">
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
      <div className="absolute bottom-0 w-full p-3 rounded-b-lg md:p-6 bg-gradient-to-b from-transparent to-black/75">
        <div className="flex items-center text-xs font-light opacity-75 gap-2 md:text-base">
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
  );
};

export default TrendingCard