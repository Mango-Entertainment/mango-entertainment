'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { zodResolver } from '@hookform/resolvers/zod'
import type{ SetStateAction, Dispatch, FormEvent } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useSignUp, useUser } from '@clerk/nextjs'
import { trpc } from '@/lib/server/trpc'
import { useRouter } from 'next/navigation'
import queryClient from '@/lib/server/query-client'


type Props = {
  
}

const FormSchema = z.object({
  pin: z
    .string()
    .min(6, { message: 'Your one-time password must be 6 characters.' }),
})

const Verify = (props: Props) => {
  const [code, setCode] = useState<string>('')
  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: { pin: '' },
  })

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
         const clerkId: string = completeSignUp.createdUserId ?? ''
         mutate({ name, email, clerkId })

         router.replace('/')
       }
     } catch (err) {
       console.log('Error:', JSON.stringify(err, null, 2))
     }
   }

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
              {/* <input
                  value={code}
                  className="h-37 mb-3 block w-full border-0 border-b-2 border-entertainment-greyish-blue bg-transparent pb-4 pl-4 text-sm font-light text-entertainment-pure-white caret-entertainment-red focus:border-entertainment-pure-white"
                  id="code"
                  name="code"
                  onChange={(e) => setCode(e.target.value)}
                /> */}
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

export default Verify
