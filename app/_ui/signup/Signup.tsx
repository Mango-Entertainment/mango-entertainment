'use client'
import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useSignUp, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import queryClient from '@/lib/server/query-client'
import { trpc } from '@/lib/server/trpc'
import { hasErrorType } from '@/lib/utils/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import VerifyForm from '@/app/_ui/components/VerifyForm'
import { FormProvider, useFormContext } from 'react-hook-form'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'

const FormFieldsSchema = z
  .object({
    firstName: z.string({ required_error: 'First name is required' }),
    lastName: z.string({ required_error: 'Last name is required' }),
    email: z.string({ required_error: 'Email is required' }).email(),
    password1: z
      .string({ required_error: 'Password is required' })
      .min(8, { message: 'Must be at least 8 characters long' })
      .max(32, {
        message: 'Password must be between 8 and 32 characters long',
      }),
    password2: z.string({ required_error: 'Repeated password is required' }),
  })
  .refine((data) => data.password1 === data.password2, {
    message: 'Passwords do not match',
    path: ['password2'],
  })

type FormFields = z.infer<typeof FormFieldsSchema>

const Signup = () => {
  const { isSignedIn } = useUser()
  const { isLoaded, signUp, setActive } = useSignUp()
  const [clerkError, setClerkError] = useState<string | null>(null)
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [code, setCode] = useState<string>('')
  const [verifying, setVerifying] = useState(false)

  const form = useForm<FormFields>({ resolver: zodResolver(FormFieldsSchema), mode: 'onTouched', defaultValues: {firstName: '', lastName: ''} })

  const { mutate } = trpc.createUser.useMutation({
    onSettled: () => {
      // setName('')
      // setEmail('')
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
    firstName,
    lastName,
  }: {
    emailAddress: string
    password: string
    firstName: string
    lastName: string
  }) => {
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress,
        password,
        firstName,
        lastName,
      })
      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // change the UI to our pending section.
      setFirstName(firstName)
      setLastName(lastName)
      setEmail(emailAddress)
      setVerifying(true)
    } catch (err) {
      if (hasErrorType(err)) {
        const message = err.errors[0]?.message ?? null
        setClerkError(message)
      }
    }
  }

  const handleVerify = async (e: FormEvent ) => {
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
       const clerkId: string = completeSignUp.createdUserId ?? ''
       mutate({ firstName, lastName, email, clerkId })

       router.replace('/')
     }
   } catch (err) {
     console.log('Error:', JSON.stringify(err, null, 2))
   }
 }
  if (verifying) {
  return (
    <div className="mt-12 flex justify-center justify-items-center md:mt-20">
      <div className="h-auto w-80 rounded-xl bg-entertainment-semi-dark-blue md:w-96 md:rounded-3xl">
        <div className="p-6 text-center md:p-8">
          <h1 className="mb-6 text-3xl font-light text-entertainment-pure-white">
            Verification Code
          </h1>
          <p className="font-light text-entertainment-pure-white">
            Check your email for the code 📧
          </p>
          <Form {...form}>
            <form onSubmit={handleVerify}>
              <div className="my-4 flex justify-center">
                <InputOTP
                  value={code}
                  className="border-entertainment-greyish-blue text-entertainment-pure-white"
                  maxLength={6}
                  onChange={(code) => setCode(code)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                  </InputOTPGroup>
                  <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>
              <Button
                className="mb-6 h-12 w-full rounded-md bg-entertainment-red text-sm font-light text-entertainment-pure-white hover:bg-entertainment-pure-white hover:text-entertainment-dark-blue"
                type="submit"
              >
                Complete sign up
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

  if (isSignedIn) {
    return router.replace('/')
  } else {
    return (
      <div className="mt-12 grid justify-center justify-items-center md:mt-20">
        <div className="h-auto w-80 rounded-xl bg-entertainment-semi-dark-blue md:w-96 md:rounded-3xl">
          <div className="p-6 md:p-8">
            <h1 className="mb-6 text-3xl font-light text-entertainment-pure-white">
              Sign Up
            </h1>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit((d) =>
                  signUpWithEmail({
                    firstName: d.firstName,
                    lastName: d.lastName,
                    emailAddress: d.email,
                    password: d.password1,
                  }),
                )}
              >
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First name" {...field} />
                      </FormControl>
                      <FormDescription className="hidden">
                        This is the field for your first name.
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Last name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last name" {...field} />
                      </FormControl>
                      <FormDescription className="hidden">
                        This is the field for your last name.
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Email Address" {...field} />
                      </FormControl>
                      <FormDescription className="hidden">
                        This is the field for your email address.
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password1"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="hidden">
                        This is the field for your password.
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password2"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Repeat Password</FormLabel>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="Repeat Password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription className="hidden">
                        This is the field to confirm your password by repeating
                        it.
                      </FormDescription>
                    </FormItem>
                  )}
                />
                <div className="mb-8 mt-4 text-center text-sm font-light text-entertainment-red">
                  {form.formState.dirtyFields.password1 &&
                  !form.formState.errors.password1 &&
                  !clerkError ? (
                    <>
                      <p className="text-s text-entertainment-pure-white">
                        8 character minimum
                      </p>
                      <p className="text-s text-entertainment-pure-white">
                        No common passwords (e.g. &quot;password123&quot;)
                      </p>
                    </>
                  ) : null}
                  {form.formState.errors.email && (
                    <p>{form.formState.errors.email.message}</p>
                  )}
                  {form.formState.errors.password1 && (
                    <p>{form.formState.errors.password1.message}</p>
                  )}
                  {form.formState.errors.password2 && (
                    <p>{form.formState.errors.password2.message}</p>
                  )}
                  {clerkError && <p>{clerkError}</p>}
                </div>
                <Button
                  className="mb-6 h-12 w-full rounded-md bg-entertainment-red text-sm font-light text-entertainment-pure-white hover:bg-entertainment-pure-white hover:text-entertainment-dark-blue"
                  type="submit"
                >
                  Create an account
                </Button>
              </form>
            </Form>
            <p className="text-center text-sm font-light text-entertainment-pure-white">
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
