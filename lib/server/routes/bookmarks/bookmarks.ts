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
        movie_data: z
          .object({
            adult: z.boolean(),
            backdrop_path: z.string(),
            genre_ids: z.number().array(),
            id: z.number(),
            original_language: z.string(),
            original_title: z.string(),
            overview: z.string(),
            popularity: z.number(),
            poster_path: z.string(),
            release_date: z.string(),
            title: z.string(),
            video: z.boolean(),
            vote_average: z.number(),
            vote_count: z.number(),
          })
          .optional(),
        series_data: z
          .object({
            adult: z.boolean(),
            backdrop_path: z.string(),
            genre_ids: z.number().array(),
            id: z.number(),
            origin_country: z.string().array(),
            original_language: z.string(),
            original_name: z.string(),
            overview: z.string(),
            popularity: z.number(),
            poster_path: z.string(),
            first_air_date: z.string(),
            name: z.string(),
            vote_average: z.number(),
            vote_count: z.number(),
          })
          .optional(),
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
      if (input.selection_type === 'Movie') {
        await prisma.movies.upsert({
          where: {
            id: input.selection_id,
          },
          create: {
            adult: input.movie_data?.adult ?? false,
            backdrop_path: input.movie_data?.backdrop_path ?? '',
            genre_ids: input.movie_data?.genre_ids ?? [],
            id: input.movie_data?.id ?? -0,
            original_language: input.movie_data?.original_language ?? '',
            original_title: input.movie_data?.original_title ?? '',
            overview: input.movie_data?.overview ?? '',
            popularity: input.movie_data?.popularity ?? -0,
            poster_path: input.movie_data?.poster_path ?? '',
            release_date: input.movie_data?.release_date ?? '',
            title: input.movie_data?.title ?? '',
            video: input.movie_data?.video ?? false,
            vote_average: input.movie_data?.vote_average ?? -0,
            vote_count: input.movie_data?.vote_count ?? -0,
          },
          update: {},
        })
      }
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
})
