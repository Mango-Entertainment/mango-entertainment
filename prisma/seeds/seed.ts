import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import data from './data.json'

async function main() {
  const deleteRegularThumb = prisma.regularThumb.deleteMany()
  const deleteSelection = prisma.selection.deleteMany()
  const deleteTrendingThumb = prisma.trendingThumb.deleteMany()
  // const deleteUsers = prisma.user.deleteMany()
  await prisma.$transaction([
    deleteRegularThumb,
    deleteTrendingThumb,
    deleteSelection,
    // deleteUsers,
  ])

  data.map(async (selection: any) => {
    const record_id = crypto.randomUUID()
    const regular_id = crypto.randomUUID()
    const trending_id = crypto.randomUUID()
    const { title, year, rating, category, isTrending, thumbnail } = selection
    const { regular, trending } = thumbnail

    if (isTrending) {
      const addTrending = await prisma.selection.upsert({
        where: { id: record_id },
        update: {},
        create: {
          title: title,
          rating: rating,
          category: category,
          year: year,
          is_trending: isTrending,
          RegularThumb: {
            create: {
              id: regular_id,
              small: regular.small,
              medium: regular.medium,
              large: regular.large,
            },
          },
          TrendingThumb: {
            create: {
              id: trending_id,
              small: trending.small,
              large: trending.large,
            },
          },
        },
      })
    } else {
      const newSelection = await prisma.selection.upsert({
        where: { id: record_id },
        update: {},
        create: {
          title: title,
          rating: rating,
          category: category,
          year: year,
          is_trending: isTrending,
          RegularThumb: {
            create: {
              id: regular_id,
              small: regular.small,
              medium: regular.medium,
              large: regular.large,
            },
          },
        },
      })
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
