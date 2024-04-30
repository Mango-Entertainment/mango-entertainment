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

export type TmdbSeriesListData = {
  page: number
  results: Array<{
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    first_air_date: string
    name: string
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
    Authorization: `Bearer ${process.env.TMDB_ACCESS_TOKEN}`,
  },
}

const movieListUrl =
  'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
const seriesListUrl =
  'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1'

const trendingMovieUrl =
  'https://api.themoviedb.org/3/trending/movie/day'

const trendingSeriesUrl =
  'https://api.themoviedb.org/3/trending/tv/day'

const trendingPersonUrl =
  'https://api.themoviedb.org/3/trending/person/day'

function fetchSelectionList<T>(url: string): Promise<T> {
  return fetch(url, fetchOptions).then((response): Promise<T> => {
    // fetching the reponse body data
    return response.json()
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

  getTrendingMovies: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const trendingMovies =
        await fetchSelectionList<TmdbMovieListData>(trendingMovieUrl)
      return trendingMovies
    }),
  getTrendingSeries: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const trendingSeries =
        await fetchSelectionList<TmdbSeriesListData>(trendingSeriesUrl)
      return trendingSeries
    }),

  getMovies: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const movies = await fetchSelectionList<TmdbMovieListData>(movieListUrl)
      return movies
    }),
  getSeries: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const series = await fetchSelectionList<TmdbSeriesListData>(seriesListUrl)
      return series
    }),
  getBookmarkedMovies: t.procedure
    .input(z.object({ search: z.string(), user_id: z.string() }))
    .query(async ({ ctx, input }) => {
      const selections = await prisma.bookmarks.findMany({
        where: {
          user_id: input.user_id,
          bookmarked: true,
         
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
          
        },
      })
      return selections
    }),
})
