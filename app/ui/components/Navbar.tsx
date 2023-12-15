import Image from "next/image";
import Link from "next/link";
import HomeIcon from "./HomeIcon";
import TvIcon from "./TvIcon";
import BookmarkIcon from "./BookmarkIcon";
import MovieIcon from "./MovieIcon";

const Navbar = () => {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-1 lg:h-screen lg:grid-rows-3 lg:place-items-start bg-entertainment-semi-dark-blue items-center md:mx-6 md:w-auto md:mt-6 md:rounded-xl lg:max-h-[960px] h-auto w-full lg:mx-0 lg:justify-self-center lg:w-24">
      <div className="w-6 h-5 my-4 ml-4 lg:ml-0 md:ml-6 md:my-6 md:w-8 md:h-6 lg:mt-8 lg:justify-self-center">
        <Image src="/logo.svg" alt="icon" width={32} height={25} />
      </div>
      <div className="flex lg:flex-col justify-between lg:justify-self-center lg:justify-around lg:h-full h-4 lg:w-4">
        <Link href="/">
          <HomeIcon />{" "}
        </Link>
        <Link href="/movies">
          <MovieIcon />{" "}
        </Link>
        <Link href="/series">
          <TvIcon />
        </Link>
        <Link href="/bookmarks">
        <BookmarkIcon />
        </Link>
      </div>
      <div className="flex justify-end lg:justify-self-center lg:self-end">
        <Image
          className="w-6 h-6 md:w-8 md:h-8 mr-4 md:mr-6 lg:mr-0 lg:w-10 lg:h-10 lg:mb-8 w-6 h-6 border-entertainment-pure-white border-2 rounded-full"
          src="/image-avatar.png"
          alt="icon"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

export default Navbar;
