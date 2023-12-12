import { FC } from 'react';
import { TrendingData } from "@/app/lib/definitions"
import Image from 'next/image';

interface TrendingCardProps {
  selection: TrendingData;
}

const TrendingCard: FC<TrendingCardProps> = ({selection}) => {
  let imageString = selection.large
  imageString = imageString.slice(8)
  return (
    <div className="entertainment-pure-white w-60 relative">
      <Image
        className="rounded-lg"
        src={imageString}
        width={470}
        height={230}
        alt="trending image"
      />
      <div className="absolute flex justify-center content-center top-2 right-2">
        {selection.is_bookmarked ? (
          <Image
            className="p-2 overflow-visible w-7 h-7 rounded-full bg-entertainment-dark-blue/50"
            src="/icon-bookmark-full.svg"
            width={10}
            height={10}
            alt="bookmark icon"
          />
        ) : (
          <Image
            className="p-2 overflow-visible w-7 h-7 rounded-full bg-entertainment-dark-blue/50"
            src="/icon-bookmark-empty.svg"
            width={10}
            height={10}
            alt="bookmark icon"
          />
        )}
      </div>
      <div className="absolute left-3 bottom-2">
        <div className="text-xs font-light">
          {selection.year}
          {selection.category}
          {selection.rating}
        </div>
        <div className="text-sm font-medium">{selection.title}</div>
      </div>
    </div>
  );
};

export default TrendingCard