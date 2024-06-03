import {
  type TmdbMovieDetailsData,
  type TmdbSeriesDetailsData,
} from '@/lib/server/routes/tmdb/tmdb'

export type DetailsProps = {
  bookmarked: boolean
  selectionData: Selection
}

export type VideoResults = {
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

export type SeasonsResults = [
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

export type Selection = {
  title: string
  id: number
  year: string
  details: string
  tagline?: string
  origin_country: string[]
  genres: [{ id: number; name: string }]
  runtime?: number
  videos: VideoResults
  number_of_seasons?: number
  poster_path: string
  backdrop_path: string
  selection_type: 'Movie' | 'TV Series'
}
