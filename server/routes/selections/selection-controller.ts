import prisma from '@/prisma/prisma.db'
import { TRPCError } from '@trpc/server'

export const getTrendingHandler = async () => {
  try {
    const trendingSelections = await prisma.selection.findMany({
      where: {
        is_trending: true,
      },
      include: {
        TrendingThumb: true,
      },
    })
    return {status: 'success', results: trendingSelections.length, data: {trendingSelections}}
  } catch (err: any) {
    throw new TRPCError({code: 'INTERNAL_SERVER_ERROR', message: err.message})
  }
}

export const getAllSelectionsHandler = async () => {
  try {
    const selections = await prisma.selection.findMany({
      include: {
        RegularThumb: true,
      },
    })
    return {
      status: 'success',
      results: selections.length,
      data: { selections },
    }
  } catch (err: any) {
    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: err.message })
  }
}

export const getRecommendedHandler = async () => {
  try {
    const selections = await prisma.selection.findMany({
      where: {
        is_trending: false
      },
      include: {
        RegularThumb: true,
      },
    })
    return {
      status: 'success',
      results: selections.length,
      data: { selections },
    }
  } catch (err: any) {
    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: err.message })
  }
}

export const getMoviesHandler = async () => {
  try {
    const selections = await prisma.selection.findMany({
      where: {
        category: 'Movie'
      },
      include: {
        RegularThumb: true,
      },
    })
    return {
      status: 'success',
      results: selections.length,
      data: { selections },
    }
  } catch (err: any) {
    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: err.message })
  }
}

export const getSeriesHandler = async () => {
  try {
    const selections = await prisma.selection.findMany({
      where: {
        category: 'TV Series'
      },
      include: {
        RegularThumb: true,
      },
    })
    return {
      status: 'success',
      results: selections.length,
      data: { selections },
    }
  } catch (err: any) {
    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: err.message })
  }
}

export const getBookmarkedHandler = async () => {
  try {
    const selections = await prisma.selection.findMany({
      where: {
        is_bookmarked: true
      },
      include: {
        RegularThumb: true,
      },
    })
    return {
      status: 'success',
      results: selections.length,
      data: { selections },
    }
  } catch (err: any) {
    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: err.message })
  }
}

export const getBookmarkedMoviesHandler = async () => {
  try {
    const selections = await prisma.selection.findMany({
      where: {
        is_bookmarked: true,
        category: "Movie"
      },
      include: {
        RegularThumb: true,
      },
    })
    return {
      status: 'success',
      results: selections.length,
      data: { selections },
    }
  } catch (err: any) {
    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: err.message })
  }
}

export const getBookmarkedSeriesHandler = async () => {
  try {
    const selections = await prisma.selection.findMany({
      where: {
        is_bookmarked: true,
        category: "TV Series"
      },
      include: {
        RegularThumb: true,
      },
    })
    return {
      status: 'success',
      results: selections.length,
      data: { selections },
    }
  } catch (err: any) {
    throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: err.message })
  }
}
