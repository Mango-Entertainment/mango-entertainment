import { z } from 'zod'
import { t } from '@/lib/server/trpc-server'
import { trpc } from '@/lib/server/trpc'
import prisma from '@/prisma/prisma.db'

export type MovieCardData = {
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
}

export type SeriesCardData = {
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
}

export interface TmdbListData<T> {
  page: number
  results: T[]
  total_pages: number
  total_results: number
}

export type TmdbMovieDetailsData = {
  adult: boolean,
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  },
  budget: number
  genres: [
    {
      Id: number
      name: string
    },
    {
      id: number
      name: string
    },
    {
      id: number
      name: string
    }
  ],
  homepage: string
  id: number
  imdb_id: string
  origin_country: [
    string
  ],
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: [
    {
      Id: number
      logo_path: string
      name: string
      origin_country: string
    },
    {
      Id: number
      logo_path: string
      name: string
      origin_country: string
    }
  ],
  production_countries: [
    {
      iso_3166_1: string,
      name: string
    }
  ],
  release_date: string
  revenue: number,
  runtime: number,
  spoken_languages: [
    {
      english_name: string
      iso_639_1: string
      name: string
    }
  ],
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
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

const seriesDetailsUrl = 'https://api.themoviedb.org/3/tv/'
const movieDetailsUrl = 'https://api.themoviedb.org/3/movie/'


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
        await fetchSelectionList<TmdbListData<MovieCardData>>(trendingMovieUrl)
      return trendingMovies
    }),
  getTrendingSeries: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const trendingSeries =
        await fetchSelectionList<TmdbListData<SeriesCardData>>(trendingSeriesUrl)
      return trendingSeries
    }),

  getMovies: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const movies = await fetchSelectionList<TmdbListData<MovieCardData>>(movieListUrl)
      const movieList = movies.results
      return {
        status: 'success',
        results: movieList.length,
        data: movieList,
      }
    }),
  getSeries: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const series =
        await fetchSelectionList<TmdbListData<SeriesCardData>>(seriesListUrl)
      return series
    }),
    getMovieDetails: t.procedure
    .input(z.object({ movie_id: z.number() }))
    .query(async ({ ctx, input }) => {
      const movies = await fetchSelectionList<TmdbMovieDetailsData>(
        `${movieDetailsUrl}${input.movie_id}`,
      )
      return movies
    }),
    getSeriesDetails: t.procedure
    .input(z.object({ series_id: z.number() }))
    .query(async ({ ctx, input }) => {
      const series = await fetchSelectionList<TmdbListData<SeriesCardData>>(`${seriesDetailsUrl}${input.series_id}`)
      return series
    }),
})
