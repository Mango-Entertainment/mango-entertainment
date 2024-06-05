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
        selection_title: z.string(),
        selection_year: z.string(),
        selection_poster_path: z.string()
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
          selection_title: input.selection_title,
          selection_poster_path: input.selection_poster_path,
          selection_year: input.selection_year,
          bookmarked: true,
        },
        update: {
          bookmarked: !updateBookmarkValue?.bookmarked,
          selection_id: input.selection_id,
          selection_type: input.selection_type,
          selection_title: input.selection_title,
          selection_poster_path: input.selection_poster_path,
          selection_year: input.selection_year,
        },
      })

      return result
    }),
  getBookmarks: t.procedure
    .input(
      z.object({
        search: z.string(),
        user_id: z.string(),
        selection_type: z.string().default(''),
      }),
    )
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
  getBookmarkedMovies: t.procedure
    .input(z.object({ search: z.string(), user_id: z.string() }))
    .query(async ({ ctx, input }) => {
      const selections = await prisma.bookmarks.findMany({
        where: {
          user_id: input.user_id,
          bookmarked: true,
          selection_type: 'Movie',
        },
      })

      return {
        status: 'success',
        results: selections.length,
        data: selections ?? [],
      }
    }),
  getBookmarkedSeries: t.procedure
    .input(z.object({ search: z.string(), user_id: z.string() }))
    .query(async ({ ctx, input }) => {
      const selections = await prisma.bookmarks.findMany({
        where: {
          user_id: input.user_id,
          bookmarked: true,
          selection_type: 'TV Series',
        },
      })
      return {
        status: 'success',
        results: selections.length,
        data: selections ?? [],
      }
    }),
})
