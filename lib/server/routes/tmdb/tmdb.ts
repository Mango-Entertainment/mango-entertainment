import { z } from 'zod'
import { t } from '@/lib/server/trpc-server'
import prisma from '@/prisma/prisma.db'

export type TmdbMovieListData = {
  page: number
  results: Array<{
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }>
  total_pages: number
  total_results: number
}

 const fetchOptions = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
        }
    }
    
const movieListUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
  
function fetchMovieList<T>(url: string): Promise<T> {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return fetch(url, fetchOptions).then((response) => {
    // fetching the reponse body data
    return response.json<T>()
  })
}


export const tmdbRouter = t.router({
  getRecommended: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const selections = await prisma.selection.findMany({
        where: {
          title: {
            mode: 'insensitive',
            contains: input.search,
          },
          is_trending: false,
        },
        include: {
          RegularThumb: true,
          // bookmarks:
        },
      })
      return selections
    }),

  getTrending: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const selections = await prisma.selection.findMany({
        where: {
          title: {
            mode: 'insensitive',
            contains: input.search,
          },
          is_trending: true,
        },
        include: {
          TrendingThumb: true,
        },
      })
      return selections
    }),

  getMovies: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const movies = await fetchMovieList<TmdbMovieListData>(movieListUrl)
       return movies
    }),
  getSeries: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const selections = await prisma.selection.findMany({
        where: {
          title: {
            mode: 'insensitive',
            contains: input.search,
          },
          category: 'TV Series',
        },
        include: {
          RegularThumb: true,
        },
      })
      return selections
    }),
  getBookmarkedMovies: t.procedure
    .input(z.object({ search: z.string(), user_id: z.string() }))
    .query(async ({ ctx, input }) => {
      const selections = await prisma.bookmarks.findMany({
        where: {
          user_id: input.user_id,
          bookmarked: true,
          selection: {
            is: {
              category: 'Movie',
              title: {
                mode: 'insensitive',
                contains: input.search,
              },
            },
          },
        },
        include: {
          selection: {
            include: {
              RegularThumb: true,
            },
          },
        },
      })
      return selections
    }),
  getBookmarkedSeries: t.procedure
    .input(z.object({ search: z.string(), user_id: z.string() }))
    .query(async ({ ctx, input }) => {
      const selections = await prisma.bookmarks.findMany({
        where: {
          user_id: input.user_id,
          bookmarked: true,
          selection: {
            is: {
              category: 'TV Series',
              title: {
                mode: 'insensitive',
                contains: input.search,
              },
            },
          },
        },
        include: {
          selection: {
            include: {
              RegularThumb: true,
            },
          },
        },
      })
      return selections
    }),
})
