"use client"

import Image from 'next/image'
import Link from 'next/link'
import HomeIcon from '@/app/_ui/components/HomeIcon'
import TvIcon from '@/app/_ui/components/Series/TvIcon'
import BookmarkIcon from '@/app/_ui/components/BookmarkIcon'
import MovieIcon from '@/app/_ui/components/Movies/MovieIcon'
import Auth from '@/app/_ui/components/Auth'
import { useAuth } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const { isSignedIn } = useAuth()
  const pathName = usePathname()

  return (
    <div className="sticky grid h-20 w-full grid-cols-3 items-center bg-entertainment-semi-dark-blue md:mx-4 md:mt-6 md:w-auto md:rounded-xl lg:mx-0 lg:mx-0 lg:h-screen lg:max-h-[960px] lg:w-20 lg:grid-cols-1 lg:grid-rows-[3fr_3fr_9fr] lg:place-items-start lg:justify-self-center">
      <div className="mb-6 ml-4 mt-5 h-8 w-10 md:ml-6 lg:ml-0 lg:mt-8 lg:justify-self-center">
        <Link href="/" className="w-8 md:w-10">
          <Image src="/mango-logo.png" alt="icon" width={64} height={50} />
        </Link>
      </div>
      {isSignedIn ? (
        <div className="flex justify-between lg:h-full lg:w-5 lg:flex-col lg:justify-self-center">
          <Link href="/" className="w-4 md:w-5">
            <HomeIcon pathName={pathName} />
          </Link>
          <Link href="/movies" className="w-4 md:w-5">
            <MovieIcon pathName={pathName} />
          </Link>
          <Link href="/series" className="w-4 md:w-5">
            <TvIcon pathName={pathName} />
          </Link>
          <Link href="/bookmarks" className="w-4 md:w-5">
            <BookmarkIcon pathName={pathName} />
          </Link>
        </div>
      ) : (
        <div className="h-5"></div>
      )}
      <div className="flex justify-end lg:self-end lg:justify-self-center">
        <div>
          <Auth />
        </div>
      </div>
    </div>
  )
}

export default Navbar
