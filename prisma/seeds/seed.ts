import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const data = require('./data.json')

async function main() {
  data.map(async (selection: any) => {
    const record_id = crypto.randomUUID()
    const regular_id = crypto.randomUUID()
    const trending_id = crypto.randomUUID()
    const { title, year, rating, category, isTrending, isBookmarked, thumbnail } = selection
    const { regular, trending } = thumbnail

    if(trending) {
      const addTrending = await prisma.selection.upsert({
        where: { id: record_id },
        update: {},
        create: {
          title: title,
          rating: rating,
          category: category,
          year: year,
          is_bookmarked: isBookmarked,
          is_trending: isTrending,
          RegularThumb: {
            create: {
              id: regular_id,
              small: regular.small,
              medium: regular.medium,
              large: regular.large,
            }
          },
          TrendingThumb: {
            create: {
              id: trending_id,
              small: trending.small,
              large: trending.large,
            }
          }
        }
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
          is_bookmarked: isBookmarked,
          is_trending: isTrending,
          RegularThumb: {
            create: {
              id: regular_id,
              small: regular.small,
              medium: regular.medium,
              large: regular.large,
            }
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