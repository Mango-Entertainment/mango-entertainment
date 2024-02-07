import prisma from '@/prisma/prisma.db'
import { TRPCError } from '@trpc/server'
import {
  CreateSelection,
  CreateTrendingThumbs,
  CreateRegularThumbs,
} from './selection-schema'

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

// export type SelectionWithTrendingThumbs = Prisma.PromiseReturnType<
//   typeof getTrending
// >
