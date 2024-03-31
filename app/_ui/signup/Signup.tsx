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
import Verify from '@/app/_ui/components/Verify'

const FormFieldsSchema = z
  .object({
    name: z.string({ required_error: 'Name is required' }),
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [verifying, setVerifying] = useState(false)

  const form = useForm<FormFields>({ resolver: zodResolver(FormFieldsSchema), mode: 'onTouched', defaultValues: {name: ''} })

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
    } catch (err) {
      if (hasErrorType(err)) {
        const message = err.errors[0]?.message ?? null
        setClerkError(message)
      }
    }
  }

 

  if (verifying) {
    return (
      <Verify handleVerify={handleVerify} code={code} setCode={setCode} />
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
                    name: d.name,
                    emailAddress: d.email,
                    password: d.password1,
                  }),
                )}
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="hidden">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormDescription className="hidden">
                        This is the field for your name.
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
