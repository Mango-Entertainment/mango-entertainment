import Image from "next/image";
import Link from "next/link";
import HomeIcon from "@/app/_ui/components/HomeIcon";
import TvIcon from "@/app/_ui/components/TvIcon";
import BookmarkIcon from "@/app/_ui/components/BookmarkIcon";
import MovieIcon from "@/app/_ui/components/MovieIcon";
import Auth from "@/app/_ui/components/Auth";

const Navbar = () => {

  return (
    <div className="grid grid-cols-3 lg:grid-cols-1 lg:h-screen lg:grid-rows-[2fr_3fr_9fr] lg:place-items-start bg-entertainment-semi-dark-blue items-center md:mx-6 md:w-auto md:mt-6 md:rounded-xl lg:max-h-[960px] sticky h-auto w-full lg:mx-0 lg:justify-self-center lg:w-24">
      <div className="w-6 h-5 my-4 ml-4 lg:ml-0 md:ml-6 md:my-6 md:w-8 md:h-6 lg:mt-8 lg:justify-self-center">
        <Link href="/" className="w-4 md:w-5">
          <Image src="/logo.svg" alt="icon" width={32} height={25} />
        </Link>
      </div>
      <div className="flex justify-between lg:flex-col lg:justify-self-center lg:h-full lg:w-5">
        <Link href="/" className="w-4 md:w-5">
          <HomeIcon />
        </Link>
        <Link href="/movies" className="w-4 md:w-5">
          <MovieIcon />
        </Link>
        <Link href="/series" className="w-4 md:w-5">
          <TvIcon />
        </Link>
        <Link href="/bookmarks" className="w-4 md:w-5">
          <BookmarkIcon />
        </Link>
      </div>
      <div className="flex justify-end lg:justify-self-center lg:self-end">
        <div>
          <Auth />
        </div>
      </div>
    </div>
  )
};

export default Navbar;
