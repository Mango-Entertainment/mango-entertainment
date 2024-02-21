import prisma from '@/lib/prisma/prisma.db'
import { TRPCError } from '@trpc/server'
import { SectionFilterQuery, FilterQuery, imageSelect, ImageSelect } from '@/lib/server/routes/selections/selection-schema'
import { filterQuery } from './selection-schema';

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

// export const getAllSelectionsHandler = async () => {
//   try {
//     const selections = await prisma.selection.findMany({
//       include: {
//         RegularThumb: true,
//         TrendingThumb: true
//       },
//     })
//     return {
//       status: 'success',
//       results: selections.length,
//       data: { selections },
//     }
//   } catch (err: any) {
//     throw new TRPCError({ code: 'INTERNAL_SERVER_ERROR', message: err.message })
//   }
// }


export const getAllSelectionsHandler = async ({filterQuery, imageSelect}: {filterQuery: FilterQuery, imageSelect: ImageSelect} ) => {
  try {
    const selections = await prisma.selection.findMany({
      where: filterQuery,
        include: imageSelect
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

export const getSelectionsHandler = async ({
  sectionFilterQuery,
}: {
  sectionFilterQuery: SectionFilterQuery
}) => {
  try {
    const selections = await prisma.selection.findMany({where: sectionFilterQuery, include: {RegularThumb: true}})
    return {
        status: 'success',
        results: selections.length,
        data: { selections },
    }
  } catch (error) {
    console.log(error)
  }
}