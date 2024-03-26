import { z } from 'zod'
import { t } from '@/lib/server/trpc-server'
import prisma from '@/prisma/prisma.db'

export const userRouter = t.router({
  getUsers: t.procedure
    .input(z.object({ search: z.string() }))
    .query(({ ctx }) => {
      return prisma.user.findMany()
    }),
  getUserById: t.procedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return prisma.user.findFirst({
        where: { id: input.id },
      })
    }),
  createUser: t.procedure
    .input(
      z.object({ clerkId: z.string(), name: z.string(), email: z.string() }),
    )
    .mutation(({ ctx, input }) => {
      return prisma.user.create({
        data: {
          id: input.clerkId,
          name: input.name,
          email: input.email,
        },
      })
    }),
})
