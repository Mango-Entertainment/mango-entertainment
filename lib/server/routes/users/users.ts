import { z } from 'zod'
import {
  router,
  publicProcedure,
  protectedProcedure,
} from '@/lib/server/trpc-server'
import prisma from '@/prisma/prisma.db'

export const userRouter = router({
  getAll: protectedProcedure
    .input(z.object({ search: z.string() }))
    .query(({ ctx }) => {
      return prisma.user.findMany()
    }),
  getById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return prisma.user.findFirst({
        where: { id: input.id },
        include: {
          bookmarks: true,
        },
      })
    }),
  create: publicProcedure
    .input(
      z.object({ clerkId: z.string(), firstName: z.string(), lastName: z.string(), email: z.string() }),
    )
    .mutation(({ ctx, input }) => {
      return prisma.user.upsert({
        where: { email: input.email },
        create: {
          id: input.clerkId,
          firstName: input.firstName,
          lastName: input.lastName,
          email: input.email,
        },
        update: {
          id: input.clerkId,
          firstName: input.firstName,
          lastName: input.lastName,
        },
      })
    })
})
