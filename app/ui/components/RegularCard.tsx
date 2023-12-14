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
    <div className="entertainment-pure-white w-60 md:w-auto relative">
      <Image
        className="rounded-lg"
        src={imageString}
        width={470}
        height={230}
        alt="trending image"
      />
      <div className="absolute flex justify-center content-center top-2 right-2 md:top-4 md:right-6">
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
      <div className="absolute bottom-0 w-full p-3 md:p-6 rounded-b-lg bg-gradient-to-b from-transparent to-black/75">
        <div className="flex gap-2 text-xs md:text-base font-light items-center opacity-75">
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
        <div className="text-sm md:text-2xl font-medium">{selection.title}</div>
      </div>
    </div>
  );
};

export default RegularCard;
