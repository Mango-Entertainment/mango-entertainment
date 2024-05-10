import { z } from 'zod'
import { t } from '@/lib/server/trpc-server'

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
  adult: boolean
  backdrop_path: string
  belongs_to_collection: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  budget: number
  genres: [
    {
      id: number
      name: string
    },
  ]
  homepage: string
  id: number
  imdb_id: string
  origin_country: [string]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: [
    {
      id: number
      logo_path: string
      name: string
      origin_country: string
    },
  ]
  production_countries: [
    {
      iso_3166_1: string
      name: string
    },
  ]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: [
    {
      english_name: string
      iso_639_1: string
      name: string
    },
  ]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type TmdbSeriesDetailsData = {
  adult: boolean
  backdrop_path: string,
  created_by: [
    {
      id: number
      credit_id: string
      name: string
      original_name: string
      gender: number
      profile_path: null
    },
  ],
  Episode_run_time: number[]
  first_air_date: string
  genres: [
    {
      id: number
      name: string
    }
  ],
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: {
    id: number,
    overview: string,
    name: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    episode_type: string
    production_code: string
    runtime: number
    season_number: number
    show_id: number
    still_path: string
  },
  name: string
  next_episode_to_air: {
    id: number
    overview: string
    name: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    episode_type: string
    production_code: string
    runtime: null,
    season_number: number
    show_id: number
    still_path: null
  },
  networks: [
    {
      id: number
      logo_path: string
      name: string
      origin_country: string
    }
  ],
  number_of_episodes: number
  number_of_seasons: number
  origin_country: string[]
  original_language: string
  original_name: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: [
    {
      id: number
      logo_path: string
      name: string
      origin_country: string
    }
  ],
  production_countries: [
    {
      iso_3166_1: string
      name: string
    }
  ],
  seasons: [
    {
      air_date: string
      episode_count: number
      id: number
      name: string
      overview: string
      poster_path: string
      season_number: number
      vote_average: number
    }
  ],
  spoken_languages: [
    {
      english_name: string
      iso_639_1: string
      name: string
    }
  ],
  status: string
  tagline: string
  type: string
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

const trendingMovieUrl = 'https://api.themoviedb.org/3/trending/movie/day'

const trendingSeriesUrl = 'https://api.themoviedb.org/3/trending/tv/day'

const trendingPersonUrl = 'https://api.themoviedb.org/3/trending/person/day'

const seriesDetailsUrl = 'https://api.themoviedb.org/3/tv/'
const movieDetailsUrl = 'https://api.themoviedb.org/3/movie/'
const movieSearchListUrl = 'https://api.themoviedb.org/3/search/movie'
const seriesSearchListUrl = 'https://api.themoviedb.org/3/search/tv'

function fetchSelectionList<T>(url: string): Promise<T> {
  return fetch(url, fetchOptions).then((response): Promise<T> => {
    // fetching the reponse body data
    return response.json()
  })
}

export const tmdbRouter = t.router({
  getTrendingMovies: t.procedure
    .query(async () => {
      const trendingMovies =
        await fetchSelectionList<TmdbListData<MovieCardData>>(trendingMovieUrl)
      return trendingMovies
    }),
  getTrendingSeries: t.procedure
    .query(async () => {
      const trendingSeries =
        await fetchSelectionList<TmdbListData<SeriesCardData>>(
          trendingSeriesUrl,
        )
      return trendingSeries
    }),

  getMovies: t.procedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const queryUrl = input.search ? `${movieSearchListUrl}?query=${input.search}` : movieListUrl
      const movies =
        await fetchSelectionList<TmdbListData<MovieCardData>>(queryUrl)
      // const movieList = movies.results.filter((result) => result.poster_path !== null)
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
      const queryUrl = input.search ? `${seriesSearchListUrl}?query=${input.search}` : seriesListUrl
      const series =
        await fetchSelectionList<TmdbListData<SeriesCardData>>(queryUrl)
      // const seriesList = series.results.filter((result) => result.poster_path !== null)
      const seriesList = series.results
      return {
        status: 'success',
        results: seriesList.length,
        data: seriesList,
      }
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
      const series = await fetchSelectionList<TmdbSeriesDetailsData>(
        `${seriesDetailsUrl}${input.series_id}`,
      )
      return series
    }),
})
