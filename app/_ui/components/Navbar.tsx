"use client"

import Image from 'next/image'
import Link from 'next/link'
import HomeIcon from '@/app/_ui/components/HomeIcon'
import TvIcon from '@/app/_ui/components/Series/TvIcon'
import BookmarkIcon from '@/app/_ui/components/BookmarkIcon'
import MovieIcon from '@/app/_ui/components/Movies/MovieIcon'
import Auth from '@/app/_ui/components/Auth'
import { useAuth } from '@clerk/nextjs'

const Navbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className="grid grid-cols-3 h-20 lg:grid-cols-1 lg:h-screen lg:grid-rows-[3fr_3fr_9fr] lg:place-items-start bg-entertainment-semi-dark-blue items-center md:w-auto md:mt-6 md:rounded-xl lg:max-h-[960px] sticky w-full lg:mx-0 lg:justify-self-center lg:w-20">
      <div className="w-10 h-8 mt-5 mb-6 ml-4 lg:ml-0 md:ml-6 lg:mt-8 lg:justify-self-center">
        <Link href="/" className="w-8 md:w-10">
          <Image src="/mango-logo.png" alt="icon" width={64} height={50} />
        </Link>
      </div>
      {isSignedIn ? (
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
      ) : (
        <div></div>
      )}
      <div className="flex justify-end lg:justify-self-center lg:self-end">
        <div>
          <Auth />
        </div>
      </div>
    </div>
  )
}

export default Navbar
