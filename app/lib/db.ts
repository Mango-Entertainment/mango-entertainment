// import {z} from 'zod'
import { TrendingData, RegularData } from '@/app/lib/definitions'
// import postgres from 'postgres'
import prisma from '@/prisma/prisma.db'
import { TrendingThumb } from '@prisma/client'
import { log } from 'console'

// const connectionString = `${process.env.DATABASE_URL}`
// const sql = postgres(connectionString)

const getTrending = async () => {
  const data = await prisma.selection.findMany({
      where: {
        is_trending: true
      },
      include: {
        TrendingThumb: true
      }
    })
    const result: TrendingData[] = []
    data.forEach(element => result.push({ id: element.id, title: element.title, rating: element.rating,  year: element.year, category: element.category, is_bookmarked: element.is_bookmarked, large: element.TrendingThumb.large, small: element.TrendingThumb.small })
    );
    // const { id, title, rating, year, category, is_bookmarked, large, small } 
    return result
  }


export const getRecommended = async () => {
  try {
    // const data: RegularData[] = await sql<
    //   RegularData[]
    // >`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, regular_thumbs.large, regular_thumbs.medium, regular_thumbs.small, selections.is_trending
    //             FROM selections
    //             JOIN regular_thumbs ON regular_thumbs.selection_id = selections.id
    //             WHERE selections.is_trending != true`
    const data = await prisma.selection.findMany({
      where: {
        is_trending: false
      },
      include: {
        RegularThumb: true
      }
    })

    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch recommended data.')
  }
}

export const getMovies = async () => {
  try {
    // const data: RegularData[] = await sql<
    //   RegularData[]
    // >`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, regular_thumbs.large, regular_thumbs.medium, regular_thumbs.small, selections.is_trending
    //             FROM selections
    //             JOIN regular_thumbs ON regular_thumbs.selection_id = selections.id
    //             WHERE selections.category = 'Movie'`
    const data = await prisma.selection.findMany({
      where: {
        category: 'Movie'
      },
      include: {
        RegularThumb: true
      }
    })
    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch movie data.')
  }
}

export const getSeries = async () => {
  try {
    const data = await prisma.selection.findMany({
      where: {
        category: 'TV Series'
      },
      include: {
        RegularThumb: true
      }
    })
  } catch (error) {
    console.error('Database error:', error)
    throw new Error('Failed to fetch series data.')
  }
  // try {
  //   const data: RegularData[] = await sql<
  //     RegularData[]
  //   >`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, regular_thumbs.large, regular_thumbs.medium, regular_thumbs.small, selections.is_trending
  //               FROM selections
  //               JOIN regular_thumbs ON regular_thumbs.selection_id = selections.id
  //               WHERE selections.category = 'TV Series'`
  //   return data
  // } catch (error) {
  //   console.error('Database Error:', error)
  //   throw new Error('Failed to fetch series data.')
  // }
}

export const getBookmarks = async () => {
  try {
    // const movieResult: RegularData[] =
    // await sql<RegularData[]>`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, regular_thumbs.large, regular_thumbs.medium, regular_thumbs.small, selections.is_trending
    // FROM selections
    // JOIN regular_thumbs ON regular_thumbs.selection_id = selections.id
    // WHERE selections.category = 'Movie'
    // AND selections.is_bookmarked = true`
    // const seriesResult: RegularData[] =
    //   await sql<RegularData[]>`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, regular_thumbs.large, regular_thumbs.medium, regular_thumbs.small, selections.is_trending
    //             FROM selections
    //             JOIN regular_thumbs ON regular_thumbs.selection_id = selections.id
    //             WHERE selections.category = 'TV Series'
    //             AND selections.is_bookmarked = true`
    const movieResult = await prisma.selection.findMany({
      where: {
        category: 'Movie',
        is_bookmarked: true
      },
      include: {
        RegularThumb: true
      }
    })
    const seriesResult = await prisma.selection.findMany({
      where: {
        category: 'TV Series',
        is_bookmarked: true
      },
      include: {
        RegularThumb: true
      }
    })

    return { movies: movieResult, series: seriesResult }
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch bookmark data.')
  }
}

export {getTrending}