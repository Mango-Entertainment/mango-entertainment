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
        include: {
          bookmarks: true,
        },
      })
    }),
  createUser: t.procedure
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
        },
      })
    }),
  updateUser: t.procedure
    .input(z.object({ clerkId: z.string(), email: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const result = await prisma.user.upsert({
        where: {
          email: input.email,
        },
        create: {
          id: input.clerkId,
          email: input.email,
          name: '',
        },
        update: {
          id: input.clerkId,
        },
      })
      return result
    }),
})
