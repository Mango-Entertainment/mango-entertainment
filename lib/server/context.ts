import { type getAuth } from '@clerk/nextjs/server'
import type * as trpc from '@trpc/server'
import prisma from '@/prisma/prisma.db'

type AuthObject = ReturnType<typeof getAuth>

export const createTRPCContext = async (opts: {
  headers: Headers
  auth: AuthObject
}) => {
  return { prisma, userId: opts.auth.userId, ...opts }
}

export type Context = trpc.inferAsyncReturnType<typeof createTRPCContext>
