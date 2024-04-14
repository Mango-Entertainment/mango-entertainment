'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useSignIn, useUser } from '@clerk/nextjs'
import { useState } from 'react'
import { hasErrorType } from '@/lib/utils/utils'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const FormFieldsSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type FormFields = z.infer<typeof FormFieldsSchema>

const Login = () => {
  const { isSignedIn } = useUser()
  const router = useRouter()
  const [clerkError, setClerkError] = useState<string | null>(null)
  const form = useForm<FormFields>({ resolver: zodResolver(FormFieldsSchema) })
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
        router.replace('/')
      } else {
        /*Investigate why the login hasn't completed */
      }
    } catch (err) {
      if (hasErrorType(err)) {
        const message = err.errors[0]?.message ?? null
        setClerkError(message)
      }
    }
  }
  if (isSignedIn) {
    router.replace('/')
  }
  return (
    <div className="mt-12 flex justify-center justify-items-center md:mt-20">
      <div className="h-auto w-80 rounded-xl bg-entertainment-semi-dark-blue md:w-96 md:rounded-3xl">
        <div className="p-6 md:p-8">
          <h1 className="mb-6 text-3xl font-light text-entertainment-pure-white">
            Login
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((d) =>
                loginWithEmail({ emailAddress: d.email, password: d.password }),
              )}
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Email address</FormLabel>
                    <FormControl>
                      <Input placeholder="Email address" {...field} />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is the field for your email address.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription className="sr-only">
                      This is the field for your password.
                    </FormDescription>
                  </FormItem>
                )}
              />
              <div className="mb-8 mt-4 text-center text-sm font-light text-entertainment-red">
                {form.formState.errors.email && (
                  <p>{form.formState.errors.email.message}</p>
                )}
                {form.formState.errors.password && (
                  <p>{form.formState.errors.password.message}</p>
                )}
                {clerkError && <p>{clerkError}</p>}
              </div>
              <Button
                className="mb-6 h-12 w-full rounded-md bg-entertainment-red text-sm font-light text-entertainment-pure-white hover:bg-entertainment-pure-white hover:text-entertainment-dark-blue"
                type="submit"
              >
                Login to your account
              </Button>
            </form>
          </Form>
          <p className="text-center text-sm font-light text-entertainment-pure-white">
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
