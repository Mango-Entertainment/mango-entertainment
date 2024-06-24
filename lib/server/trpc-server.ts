import { initTRPC, TRPCError } from '@trpc/server'
import superjson from 'superjson'
// import { type Context, createTRPCContext } from './context'
import { type Context } from './context'
import prisma from '@/prisma/prisma.db'
// import { getAuth } from '@clerk/nextjs/server'
// import { cache } from 'react'
// import { cookies, headers } from 'next/headers'
// import { NextRequest } from 'next/server'

// const createContext = cache(() => {
//   return createTRPCContext({
//     headers: new Headers({
//       cookie: cookies().toString(),
//       'x-trpc-source': 'rsc',
//     }),
//     auth: getAuth(
//       new NextRequest(process.env.NEXT_PUBLIC_URL, { headers: headers() }),
//     ),
//   })
// })

const t = initTRPC.context<Context>().create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape
  },
})

// check if the user is signed in, otherwise throw an UNAUTHORIZED code
const isAuthed = t.middleware(({ next, ctx }) => {
  if (!ctx.auth.userId) {
    throw new TRPCError({ code: 'UNAUTHORIZED' })
  }
  return next({
    ctx: {
      auth: ctx.auth,
      prisma
    },
  })
})

export const router = t.router

export const publicProcedure = t.procedure

export const protectedProcedure = t.procedure.use(isAuthed)