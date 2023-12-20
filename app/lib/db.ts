import { TrendingData, RegularData } from '@/app/lib/definitions'
import postgres from 'postgres'

const connectionString = `${process.env.SUPABASE_POSTGRES_CONNECTION_STRING}`
const sql = postgres(connectionString)

export const getTrending = async () => {
  try {
    const result: TrendingData[] = []
    const data =
      await sql`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, trending_thumbs.large, trending_thumbs.small
                FROM selections
                JOIN trending_thumbs ON trending_thumbs.selection_id = selections.id`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    data.forEach((item) => result.push(item))
    return result
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch trending data.')
  }
}

export const getRecommended = async () => {
  try {
    const result: RegularData[] = []
    const data =
      await sql`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, regular_thumbs.large, regular_thumbs.medium, regular_thumbs.small, selections.is_trending
                FROM selections
                JOIN regular_thumbs ON regular_thumbs.selection_id = selections.id
                WHERE selections.is_trending != true`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    data.forEach((item) => result.push(item))
    return result
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch recommended data.')
  }
}

export const getMovies = async () => {
  try {
    const result: RegularData[] = []
    const data =
      await sql`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, regular_thumbs.large, regular_thumbs.medium, regular_thumbs.small, selections.is_trending
                FROM selections
                JOIN regular_thumbs ON regular_thumbs.selection_id = selections.id
                WHERE selections.category = 'Movie'`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    data.forEach((item) => result.push(item))
    return result
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch movie data.')
  }
}

export const getSeries = async () => {
  try {
    const result: RegularData[] = []
    const data =
      await sql`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, regular_thumbs.large, regular_thumbs.medium, regular_thumbs.small, selections.is_trending
                FROM selections
                JOIN regular_thumbs ON regular_thumbs.selection_id = selections.id
                WHERE selections.category = 'TV Series'`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    data.forEach((item) => result.push(item))
    return result
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch series data.')
  }
}

export const getBookmarks = async () => {
  try {
    const movieResult: RegularData[] = []
    const seriesResult: RegularData[] = []
    const movieData =
      await sql`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, regular_thumbs.large, regular_thumbs.medium, regular_thumbs.small, selections.is_trending
                FROM selections
                JOIN regular_thumbs ON regular_thumbs.selection_id = selections.id
                WHERE selections.category = 'Movie'
                AND selections.is_bookmarked = true`
    const seriesData =
      await sql`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, regular_thumbs.large, regular_thumbs.medium, regular_thumbs.small, selections.is_trending
                FROM selections
                JOIN regular_thumbs ON regular_thumbs.selection_id = selections.id
                WHERE selections.category = 'TV Series'
                AND selections.is_bookmarked = true`
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    movieData.forEach((item) => movieResult.push(item))
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    seriesData.forEach((item) => seriesResult.push(item))
    return { movies: movieResult, series: seriesResult }
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch bookmark data.')
  }
}
