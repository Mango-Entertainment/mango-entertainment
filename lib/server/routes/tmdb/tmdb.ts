import { z } from 'zod'
import { router, publicProcedure, protectedProcedure } from '@/lib/server/trpc-server'


export type SelectionCardData = {
  selection_id: number  
  selection_title: string
  selection_poster_path: string
  selection_year: string
}

export type MovieCardList = {
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

export type SeriesCardList = {
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
  videos: {
    results: [
      {
        iso_639_1: string
        iso_3166_1: string
        name: string
        key: string
        site: string
        size: number
        type: string
        official: boolean
        published_at: string
        id: string
      },
    ]
  }
  vote_average: number
  vote_count: number
}

export type TmdbSeriesDetailsData = {
  adult: boolean
  backdrop_path: string
  created_by: [
    {
      id: number
      credit_id: string
      name: string
      original_name: string
      gender: number
      profile_path: null
    },
  ]
  Episode_run_time: number[]
  first_air_date: string
  genres: [
    {
      id: number
      name: string
    },
  ]
  homepage: string
  id: number
  in_production: boolean
  languages: string[]
  last_air_date: string
  last_episode_to_air: {
    id: number
    overview: string
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
  }
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
    runtime: null
    season_number: number
    show_id: number
    still_path: null
  }
  networks: [
    {
      id: number
      logo_path: string
      name: string
      origin_country: string
    },
  ]
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
    },
  ]
  production_countries: [
    {
      iso_3166_1: string
      name: string
    },
  ]
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
    },
  ]
  spoken_languages: [
    {
      english_name: string
      iso_639_1: string
      name: string
    },
  ]
  status: string
  tagline: string
  type: string
  vote_average: number
  vote_count: number
  videos: {
    results: [
      {
        iso_639_1: string
        iso_3166_1: string
        name: string
        key: string
        site: string
        size: number
        type: string
        official: boolean
        published_at: string
        id: string
      },
    ]
  }
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

export const tmdbRouter = router({
  getTrendingMovies: publicProcedure.query(async () => {
    const trendingMovies =
      await fetchSelectionList<TmdbListData<MovieCardList>>(trendingMovieUrl)
    const trendingMovieData: SelectionCardData[] = trendingMovies.results.map(
      (selection) => {
        return {
          selection_poster_path: selection?.poster_path,
          selection_id: selection?.id,
          selection_title: selection?.title,
          selection_year: selection?.release_date.slice(0, 4),
        }
      },
    )
    return trendingMovieData
  }),
  getTrendingSeries: publicProcedure.query(async () => {
    const trendingSeries =
      await fetchSelectionList<TmdbListData<SeriesCardList>>(trendingSeriesUrl)
    const trendingSeriesData: SelectionCardData[] = trendingSeries.results.map(
      (selection) => {
        return {
          selection_poster_path: selection?.poster_path,
          selection_id: selection?.id,
          selection_title: selection?.name,
          selection_year: selection?.first_air_date.slice(0, 4),
        }
      },
    )
    return trendingSeriesData
  }),

  getMovies: protectedProcedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const queryUrl = input.search
        ? `${movieSearchListUrl}?query=${input.search}`
        : movieListUrl
      const movies =
        await fetchSelectionList<TmdbListData<MovieCardList>>(queryUrl)
      const movieList: SelectionCardData[] = movies.results.map((selection) => {
        return {
          selection_poster_path: selection?.poster_path,
          selection_id: selection?.id,
          selection_title: selection?.title,
          selection_year: selection?.release_date.slice(0, 4),
        }
      })
      return {
        status: 'success',
        results: movieList.length,
        data: movieList,
      }
    }),
  getSeries: protectedProcedure
    .input(z.object({ search: z.string() }))
    .query(async ({ ctx, input }) => {
      const queryUrl = input.search
        ? `${seriesSearchListUrl}?query=${input.search}`
        : seriesListUrl
      const series =
        await fetchSelectionList<TmdbListData<SeriesCardList>>(queryUrl)
      const seriesList: SelectionCardData[] = series.results.map(
        (selection) => {
          return {
            selection_poster_path: selection?.poster_path,
            selection_id: selection?.id,
            selection_title: selection?.name,
            selection_year: selection?.first_air_date.slice(0, 4),
          }
        },
      )
      return {
        status: 'success',
        results: seriesList.length,
        data: seriesList,
      }
    }),
  getMovieDetails: protectedProcedure
    .input(z.object({ movie_id: z.number() }))
    .query(async ({ ctx, input }) => {
      const movies = await fetchSelectionList<TmdbMovieDetailsData>(
        `${movieDetailsUrl}${input.movie_id}?append_to_response=videos`,
      )
      return movies
    }),
  getSeriesDetails: protectedProcedure
    .input(z.object({ series_id: z.number() }))
    .query(async ({ ctx, input }) => {
      const series = await fetchSelectionList<TmdbSeriesDetailsData>(
        `${seriesDetailsUrl}${input.series_id}?append_to_response=videos`,
      )
      return series
    }),
})
