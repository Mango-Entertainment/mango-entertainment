import type * as trpc from '@trpc/server'
import type * as trpcNext from '@trpc/server/adapters/next'
import { getAuth } from '@clerk/nextjs/server'

export const createContext = async (
  opts: trpcNext.CreateNextContextOptions,
) => {
  return { auth: getAuth(opts.req) }
}

export type Context = trpc.inferAsyncReturnType<typeof createContext>
