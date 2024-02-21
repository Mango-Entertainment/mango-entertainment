// import prisma from '@/lib/prisma/prisma.db'
// import { Prisma } from '@prisma/client'

// export const getTrending = async () => {
//   const data = await prisma.selection.findMany({
//     where: {
//       is_trending: true
//     },
//     include: {
//       TrendingThumb: true
//     }
//   })
//   return data
// }

// export type SelectionWithTrendingThumbs = Prisma.PromiseReturnType<typeof getTrending>


// export const getRecommended = async () => {
//     const data = await prisma.selection.findMany({
//       where: {
//         is_trending: false
//       },
//       include: {
//         RegularThumb: true
//       }
//     })

//     return data
// }

// export type WithRegularThumbs = Prisma.PromiseReturnType<typeof getRecommended>



// export const getMovies = async () => {
//     const data = await prisma.selection.findMany({
//       where: {
//         category: 'Movie'
//       },
//       include: {
//         RegularThumb: true
//       }
//     })
//     return data
// }

// export const getSeries = async () => {
//     const data = await prisma.selection.findMany({
//       where: {
//         category: 'TV Series'
//       },
//       include: {
//         RegularThumb: true
//       }
//     })
//     return data
// }

// export const getBookmarks = async () => {
//     const movieResult = await prisma.selection.findMany({
//       where: {
//         category: 'Movie',
//         is_bookmarked: true
//       },
//       include: {
//         RegularThumb: true
//       }
//     })
//     const seriesResult = await prisma.selection.findMany({
//       where: {
//         category: 'TV Series',
//         is_bookmarked: true
//       },
//       include: {
//         RegularThumb: true
//       }
//     })

//     return { movies: movieResult, series: seriesResult }
// }

// export type BookmarkedWithRegularThumbs = Prisma.PromiseReturnType<typeof getBookmarks>
