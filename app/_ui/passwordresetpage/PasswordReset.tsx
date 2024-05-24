'use client'
import { type SyntheticEvent, useState } from 'react'
import { useSignIn, useUser } from '@clerk/nextjs'
import type { NextPage } from 'next'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { hasErrorType } from '@/lib/utils/utils'
import { useRouter } from 'next/navigation'

type PasswordState = 'neutral' | 'success' | 'warn' | 'fail'
const colors: { [k in PasswordState]?: string } = {
  fail: 'red',
  success: 'green',
  warn: 'orange',
}

const SignInPage: NextPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [code, setCode] = useState('')
  const [successfulCreation, setSuccessfulCreation] = useState(false)
  const [complete, setComplete] = useState(false)
  const [passwordState, setPasswordState] = useState<PasswordState>('neutral')

  const router = useRouter()
    const { isSignedIn } = useUser()
  const { isLoaded, signIn, setActive } = useSignIn()

  if (!isLoaded) {
    return null
  }

  async function create(e: SyntheticEvent) {
    e.preventDefault()
    await signIn
      ?.create({
        strategy: 'reset_password_email_code',
        identifier: email,
      })
      .then((_) => {
        setSuccessfulCreation(true)
      })
      .catch((err) => {
        if (hasErrorType(err)) {
          const message = err.errors[0]?.message ?? null
          console.log('error', message)
        }
      })
  }

  async function reset(e: SyntheticEvent) {
    e.preventDefault()
    await signIn
      ?.attemptFirstFactor({
        strategy: 'reset_password_email_code',
        code,
        password,
      })
      .then((result) => {
        if (result.status === 'complete') {
          void setActive({ session: result.createdSessionId })
          setComplete(true)
          setTimeout(() => {
            router.replace('/')
          }, 3000)
        } else {
          console.log(result)
        }
      })
      .catch((err) => {
        if (hasErrorType(err)) {
          const message = err.errors[0]?.message ?? null
          console.log('error', message)
        }
      })
  }

  if (isSignedIn) {
    router.replace('/')
  }

  return (
    <div className="mt-12 flex justify-center justify-items-center md:mt-20">
      <div className="h-auto w-80 rounded-xl bg-entertainment-semi-dark-blue md:w-96 md:rounded-3xl">
        <div className="p-6 md:p-8">
          <h1 className="mb-6 text-3xl font-light text-entertainment-pure-white">
            Forgot Password?
          </h1>
          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1em',
            }}
            onSubmit={!successfulCreation ? create : reset}
          >
            {!successfulCreation && !complete && (
              <>
                <Input
                  type="email"
                  className="mb-4"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button
                  className="mb-6 h-12 w-full rounded-md bg-entertainment-red text-sm font-light text-entertainment-pure-white hover:bg-entertainment-pure-white hover:text-entertainment-dark-blue"
                  type="submit"
                >
                  Send reset code
                </Button>
                <p className="text-center text-sm font-light text-entertainment-pure-white">
                  Remembered password?
                  <Link className="ml-2 text-entertainment-red" href="/sign-in">
                    Login
                  </Link>
                </p>
              </>
            )}

            {successfulCreation && !complete && (
              <>
                <Input
                  type="password"
                  placeholder="New password"
                  value={password}
                  style={{
                    outline: 'none',
                    borderColor: colors[passwordState],
                  }}
                  onChange={(e) => {
                    signIn.validatePassword(e.target.value, {
                      onValidation(res) {
                        if (Object.values(res?.complexity ?? {}).length > 0) {
                          return setPasswordState('fail')
                        }

                        // Password Strength that fails
                        if (res?.strength?.state === 'fail') {
                          return setPasswordState('fail')
                        }

                        // Password Strength that can be better
                        if (res?.strength?.state === 'pass') {
                          return setPasswordState('warn')
                        }

                        // Password Perfection
                        return setPasswordState('success')
                      },
                    })
                    setPassword(e.target.value)
                  }}
                />

                <Input
                  type="text"
                  className="mb-4"
                  placeholder="Reset password code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />

                <Button
                  className="mb-6 h-12 w-full rounded-md bg-entertainment-red text-sm font-light text-entertainment-pure-white hover:bg-entertainment-pure-white hover:text-entertainment-dark-blue"
                  type="submit"
                >
                  Reset
                </Button>
              </>
            )}

            {complete && <p className='text-entertainment-pure-white'>You successfully changed you password</p>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
