'use client'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useSignUp, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import Image from 'next/image'
import { zodResolver } from '@hookform/resolvers/zod'
import queryClient from '@/lib/server/query-client'
import { trpc } from '@/lib/server/trpc'

const FormFieldsSchema = z
  .object({
    name: z.string({ required_error: 'Name is required' }),
    email: z.string().email(),
    password1: z
      .string()
      .min(8, { message: 'Must be at least 8 characters long' })
      .max(32, {
        message: 'Password must be between 8 and 32 characters long',
      }),
    password2: z.string(),
  })
  .refine((data) => data.password1 === data.password2, {
    message: 'Passwords do not match',
    path: ['password2'],
  })

type FormFields = z.infer<typeof FormFieldsSchema>

const Signup = () => {
  const { isSignedIn } = useUser()
  const { isLoaded, signUp, setActive } = useSignUp()
  const [clerkError, setClerkError] = useState(null)
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [verifying, setVerifying] = useState(false)
  const [code, setCode] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({ resolver: zodResolver(FormFieldsSchema) })

  const { mutate } = trpc.createUser.useMutation({
    onSettled: () => {
      setName('')
      setEmail('')
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [
          ['getUsers'],
          { input: { limit: 10, page: 1 }, type: 'query' },
        ],
      })
    },
  })

  const signUpWithEmail = async ({
    emailAddress,
    password,
    name,
  }: {
    emailAddress: string
    password: string
    name: string
  }) => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      })
      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // change the UI to our pending section.
      setName(name)
      setEmail(emailAddress)
      setVerifying(true)
    } catch (err: any) {
      setClerkError(err.errors[0].message)
    }
  }

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault()
    if (!isLoaded) return

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })
      if (completeSignUp.status !== 'complete') {
        console.log(JSON.stringify(completeSignUp, null, 2))
      }

      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        console.log(JSON.stringify(completeSignUp, null, 2))
        // ADD USERS NAME, EMAIL, AND USER ID TO OUR DATABASE
        const clerk_id: string = completeSignUp.createdUserId || ''
        mutate({ name, email, clerk_id })

        router.push('/')
      }
    } catch (err) {
      console.log('Error:', JSON.stringify(err, null, 2))
    }
  }

  if (verifying) {
    return (
      <div className="flex justify-center mt-12 grid justify-items-center md:mt-20">
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
              Verification Code
            </h1>
            <form onSubmit={handleVerify}>
              <input
                value={code}
                className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
                id="code"
                name="code"
                onChange={(e) => setCode(e.target.value)}
              />

              <button
                className="w-full h-12 mb-6 text-sm font-light text-entertainment-pure-white hover:text-entertainment-dark-blue hover:bg-entertainment-pure-white bg-entertainment-red rounded-md"
                type="submit"
              >
                Complete sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  if (isSignedIn) {
    return router.replace('/')
  } else {
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
              Sign Up
            </h1>
            <form
              onSubmit={handleSubmit((d) =>
                signUpWithEmail({
                  name: d.name,
                  emailAddress: d.email,
                  password: d.password1,
                }),
              )}
            >
              <input
                {...register('name')}
                className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
                placeholder="Name"
                type="text"
                required
              />
              <input
                {...register('email')}
                className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
                placeholder="Email address"
                type="email"
                required
              />
              <input
                {...register('password1')}
                className="block w-full pb-4 pl-4 mb-3 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
                placeholder="Password"
                type="password"
                required
              />
              <input
                {...register('password2')}
                className="block w-full pb-4 pl-4 mb-10 text-sm font-light bg-transparent border-0 border-b-2 h-37 border-entertainment-greyish-blue text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
                placeholder="Repeat Password"
                type="password"
                required
              />
              <h2 className="text-entertainment-red mb-8">
                {errors.email && <p>{errors.email.message}</p>}
                {errors.password1 && <p>{errors.password1.message}</p>}
                {errors.password2 && <p>{errors.password2.message}</p>}
                {clerkError && <p>{clerkError}</p>}
              </h2>
              <button
                className="w-full h-12 mb-6 text-sm font-light text-entertainment-pure-white hover:text-entertainment-dark-blue hover:bg-entertainment-pure-white bg-entertainment-red rounded-md"
                type="submit"
              >
                Create an account
              </button>
            </form>
            <p className="text-sm font-light text-center text-entertainment-pure-white">
              Already have an acccount?
              <Link className="ml-2 text-entertainment-red" href="/sign-in">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Signup
