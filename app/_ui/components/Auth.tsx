"use client"
import Link from "next/link"
import { UserButton, useUser } from "@clerk/nextjs"

const Auth = () => {
  const { isSignedIn, user, isLoaded } = useUser()

  if(!isSignedIn){
    return (
      <div className="bg-entertainment-red text-entertainment-pure-white text-center w-14 h-7 mr-4 rounded-md md:h-8 md:mr-6 lg:mr-0 lg:mb-8 flex align-center justify-center"
>
        <Link
          href="/sign-in"
          className="self-center"
        >
          Login
        </Link>
      </div>
    )
  }
  
  return (
    <div className="mr-4 mt-.5 md:mr-6 lg:mb-8 lg:mr-0">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default Auth