import { z } from 'zod'
import { t } from '@/lib/server/trpc-server'
import prisma from '@/prisma/prisma.db'

export const bookmarkRouter = t.router({
  getBookmark: t.procedure
    .input(
      z.object({
        user_id: z.string(),
        selection_id: z.number(),
        selection_type: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const is_bookmarked = await prisma.bookmarks.findFirst({
        where: {
          user_id: input.user_id,
          selection_id: input.selection_id,
          selection_type: input.selection_type,
        },
      })
      return is_bookmarked
    }),

  createBookmark: t.procedure
    .input(
      z.object({
        user_id: z.string(),
        selection_id: z.number(),
        selection_type: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const updateBookmarkValue = await prisma.bookmarks.findFirst({
        where: {
          user_id: input.user_id ?? null,
          selection_id: input.selection_id ?? null,
          selection_type: input.selection_type ?? null,
        },
      })

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
          selection_id: input.selection_id,
          selection_type: input.selection_type,
          bookmarked: true,
        },
        update: {
          bookmarked: !updateBookmarkValue?.bookmarked,
        },
      })
      return result
    }),
  getBookmarks: t.procedure
    .input(z.object({ search: z.string(), user_id: z.string(), selection_type: z.string().default('') }))
    .query(async ({ ctx, input }) => {
      const bookmarks = await prisma.bookmarks.findMany({
        where: {
          user_id: input.user_id,
          bookmarked: true,
          selection_type: input.selection_type,
        },
      })
      return {
        status: 'success',
        results: bookmarks.length,
        data: bookmarks,
      }
    }),
})
