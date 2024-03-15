import prisma from '@/prisma/prisma.db';
import { FilterQuery, ImageSelect, SearchQuery, SectionFilterQuery } from '@/lib/server/routes/selections/selection-schema';
import { TRPCError } from '@trpc/server';
// import {type RouterInputs, type RouterOutputs} from '@'

// export const getAllSelectionsHandler = async ({filterQuery, imageSelect}: {filterQuery: FilterQuery, imageSelect: ImageSelect} ) => {
//   try {
//     const selections = await prisma.selection.findMany({
//       where: filterQuery,
//         include: imageSelect
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

// export const getSelectionsHandler = async ({
//   sectionFilterQuery,
// }: {
//   sectionFilterQuery: SectionFilterQuery
// }) => {
//   try {
//     const selections = await prisma.selection.findMany({where: sectionFilterQuery, include: {RegularThumb: true}})
//     return {
//         status: 'success',
//         results: selections.length,
//         data: { selections },
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

export const getTrendingWithSearchHandler = async ({searchQuery} : {searchQuery: SearchQuery}) => {
  const selections = await prisma.selection.findMany({
    where: {
      title: {
        mode: 'insensitive',
        contains: searchQuery,
      },
      is_trending: true,
    },
    include: {
      TrendingThumb: true,
    },
  })
  return {
    status: 'success',
    results: selections.length,
    data: { selections },
  }
}

export const getRecommendedWithSearchHandler = async ({
  searchQuery,
}: {
  searchQuery: SearchQuery
}) => {
  const selections = await prisma.selection.findMany({
    where: {
      title: {
        mode: 'insensitive',
        contains: searchQuery,
      },
      is_trending: false,
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
}

export const getMoviesWithSearchHandler = async ({
  searchQuery,
}: {
  searchQuery: SearchQuery
}) => {
  const selections = await prisma.selection.findMany({
    where: {
      title: {
        mode: 'insensitive',
        contains: searchQuery,
      },
      category: 'Movie',
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
}

export const getSeriesWithSearchHandler = async ({
  searchQuery,
}: {
  searchQuery: SearchQuery
}) => {
  const selections = await prisma.selection.findMany({
    where: {
      title: {
        mode: 'insensitive',
        contains: searchQuery,
      },
      category: 'TV Series',
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
}
export const getBookmarkedMoviesWithSearchHandler = async ({
  searchQuery,
}: {
  searchQuery: SearchQuery
}) => {
  const selections = await prisma.selection.findMany({
    where: {
      title: {
        mode: 'insensitive',
        contains: searchQuery,
      },
      category: 'Movie',
      is_bookmarked: true,
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
}

export const getBookmarkedSeriesWithSearchHandler = async ({
  searchQuery,
}: {
  searchQuery: SearchQuery
}) => {
  const selections = await prisma.selection.findMany({
    where: {
      title: {
        mode: 'insensitive',
        contains: searchQuery,
      },
      category: 'TV Series',
      is_bookmarked: true,
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
}