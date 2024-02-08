'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSignIn, useUser } from '@clerk/nextjs'
import { useState } from 'react'

const FormFieldsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type FormFields = z.infer<typeof FormFieldsSchema>

const Login = () => {
  const { isSignedIn } = useUser()
  const router = useRouter()
  const [clerkError, setClerkError] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(FormFieldsSchema) })
  const { isLoaded, signIn, setActive } = useSignIn()

  const loginWithEmail = async ({
    emailAddress,
    password,
  }: {
    emailAddress: string
    password: string
  }) => {
    if (!isLoaded) {
      return
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      })

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId })
        router.push('/')
      } else {
        /*Investigate why the login hasn't completed */
      }
    } catch (err: any) {
      setClerkError(err.errors[0].message)
    }
  }
  if (isSignedIn) {
    router.replace('/')
  }
  return (
    <div className="justify-center mt-12 grid justify-items-center md:mt-20">
      <Image
        className="mb-14 md:mb-20"
        src="/logo.svg"
        alt="icon"
        width={32}
        height={25.6}
      />
      <div className="h-auto bg-entertainment-semi-dark-blue rounded-xl md:rounded-3xl w-80 md:w-96">
        <div className="p-6 md:p-8">
          <h1 className="mb-6 text-3xl font-light text-entertainment-pure-white">
            Login
          </h1>
          <form
            onSubmit={handleSubmit((d) =>
              loginWithEmail({ emailAddress: d.email, password: d.password }),
            )}
          >
            <input
              className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
              type="email"
              {...register('email')}
              placeholder="Email address"
              required
            />
            <input
              className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
              type="password"
              placeholder="Password"
              {...register('password')}
              required
            />
            <h2 className="text-entertainment-red mb-8">
              {errors.email && <p>{errors.email.message}</p>}
              {errors.password && <p>{errors.password.message}</p>}
              {clerkError && <p>{clerkError}</p>}
            </h2>
            <button
              className="w-full h-12 mb-6 text-sm font-light text-entertainment-pure-white hover:text-entertainment-dark-blue hover:bg-entertainment-pure-white bg-entertainment-red rounded-md"
              type="submit"
            >
              Login to your account
            </button>
          </form>
          <p className="text-sm font-light text-center text-entertainment-pure-white">
            Don&apos;t have an acccount?
            <Link className="ml-2 text-entertainment-red" href="/sign-up">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
