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
    <div className="fixed bottom-0 left-0 right-0 z-20 grid h-14 md:h-16 w-full grid-cols-3 items-center bg-entertainment-semi-dark-blue md:w-auto lg:top-0 lg:h-screen lg:w-20 lg:grid-cols-1 lg:grid-rows-[3fr_3fr_9fr] lg:place-items-start">
      <div 
      className="mb-1 ml-4 h-8 w-10 md:ml-6 lg:ml-0 lg:mt-8 lg:justify-self-center"
      >
        <Link href="/">
          <Image src="/mango-logo.png" alt="icon" width={64} height={50} />
        </Link>
      </div>
      {isSignedIn ? (
        <div className="flex content-center justify-between lg:h-full lg:w-5 lg:flex-col lg:justify-self-center">
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
      <div className="mr-4  lg:mr-0 lg:mb-4 justify-self-end lg:self-end lg:justify-self-center">
        <div>
          <Auth />
        </div>
      </div>
    </div>
  )
}

export default Navbar
