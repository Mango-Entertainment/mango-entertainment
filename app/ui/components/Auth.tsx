'use client'
import Link from "next/link"
import Image from "next/image"
import { createClient } from '@/utils/supabase/client'
import { useState } from "react"

const Auth = () => {
  const [user, setUser] = useState('')
  const supabase = createClient()

  const subscription = supabase.auth.onAuthStateChange(async (event, session) => {
  console.log(event, session)

  if (event === 'INITIAL_SESSION') {
    // handle initial session
    const { data, error } = await supabase.auth.getSession()
  } else if (event === 'SIGNED_IN') {
    // handle sign in event
    // set user
    const { data, error } = await supabase.auth.getUser()
    if(!error?.status) {
      setUser(data.user?.email || '')
    }
  } else if (event === 'SIGNED_OUT') {
    // handle sign out event
    // unset user
    setUser('')
  } else if (event === 'PASSWORD_RECOVERY') {
    // handle password recovery event
    // supabase.auth.resetPasswordForEmail()
  } else if (event === 'TOKEN_REFRESHED') {
    // handle token refreshed event
  } else if (event === 'USER_UPDATED') {
    // handle user updated event
  }
})

// call unsubscribe to remove the callback
// subscription.unsubscribe()

  if(user === ''){
    return (
      <div>
        <Link href='/login'>Login</Link>
        <Link href='/signup'>Sign Up</Link>
      </div>
    )
  }
  return (
    <div>
      <Image
        className="w-6 h-6 mr-4 border-2 rounded-full md:w-8 md:h-8 md:mr-6 lg:mr-0 lg:w-10 lg:h-10 lg:mb-8 border-entertainment-pure-white"
        src="/image-avatar.png"
        onClick={() => supabase.auth.signOut()}
        alt="icon"
        width={80}
        height={80}
      />
    </div>
  )
}

export default Auth