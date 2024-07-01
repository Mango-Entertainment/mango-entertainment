"use client"
import Link from "next/link"
import { UserButton, useUser } from "@clerk/nextjs"

const Auth = () => {
  const { isSignedIn } = useUser()

  if(!isSignedIn){
    return (
      <div className="bg-entertainment-red text-entertainment-pure-white text-center w-14 h-7 rounded-md md:h-8 flex align-center justify-center"
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
    <div className="pt-1">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default Auth