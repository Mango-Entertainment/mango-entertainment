import { z } from 'zod'
import { t } from '@/lib/server/trpc-server'
import prisma from '@/prisma/prisma.db'

export const bookmarkRouter = t.router({
  getBookmark: t.procedure
    .input(z.object({ user_id: z.string(), selection_id: z.string() }))
    .query(async ({ ctx, input }) => {
      const is_bookmarked = await prisma.bookmarks.findFirst({
        where: {
          user_id: input.user_id,
          selection_id: input.selection_id,
        },
      })
      return is_bookmarked
    }),
  createBookmark: t.procedure
    .input(
      z.object({
        bookmarked: z.boolean(),
        user_id: z.string(),
        selection_id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const result = await prisma.bookmarks.upsert({
        where: {
          user_selection: {
            user_id: input.user_id ?? null,
            selection_id: input.selection_id ?? null,
          },
        },
        create: {
          user: {
            connect: {
              id: input.user_id,
            },
          },
          selection: {
            connect: {
              id: input.selection_id,
            },
          },
          bookmarked: input.bookmarked,
        },
        update: {
          bookmarked: input.bookmarked,
        },
      })
      return result
    }),
  getBookmarks: t.procedure
    .input(z.object({ search: z.string(), user_id: z.string() }))
    .query(async ({ ctx, input }) => {
      const bookmarks = await prisma.bookmarks.findMany({
        where: {
          user_id: input.user_id,
          bookmarked: true,
        },
      })
      return {
        status: 'success',
        results: bookmarks.length,
        data: bookmarks,
      }
    }),
})