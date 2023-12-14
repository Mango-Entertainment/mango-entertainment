import {FC} from "react";
import {RegularData} from "@/app/lib/definitions";
import Image from "next/image";

interface RegularCardProps {
  selection: RegularData;
}

const categoryIcons = {
  Movie: "/icon-category-movie.svg",
  "TV Series": "/icon-category-tv.svg",
};

const RegularCard: FC<RegularCardProps> = ({selection}) => {
  let imageString = selection.large;
  imageString = imageString.slice(8);
  const categoryIcon =
    selection.category === "Movie"
      ? "/icon-category-movie.svg"
      : "/icon-category-tv.svg";

  return (
    <div className="entertainment-pure-white w-40 md:w-56 relative">
      <Image
        className="rounded-lg mb-1 md:mb-2"
        src={imageString}
        width={280}
        height={174}
        alt="trending image"
      />
      <div className="absolute flex justify-center content-center top-2 right-2 md:top-4 md:right-4">
        {selection.is_bookmarked ? (
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
          {selection.year}
          <span className="opacity-50 text-sm md:text-xl">•</span>
          <Image
            className="h-3"
            src={categoryIcon}
            height={12}
            width={12}
            alt={`${selection.category} icon`}
          />
          {selection.category}
          <span className="opacity-50 text-sm md:text-xl">•</span>
          {selection.rating}
        </div>
        <div className="text-sm md:text-lg font-medium">{selection.title}</div>
      </div>
    </div>
  );
};

export default RegularCard;
