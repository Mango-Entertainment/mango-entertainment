import { PrismaClient } from '@prisma/client'
import { log } from 'console'
const prisma = new PrismaClient()

const data = require('./data.json')

// async function main () {
//   const id = crypto.randomUUID()

//   const user0 = await prisma.user.upsert({
//     where: { id: id },
//     update: {},
//     create: {
//       id: id,
//       name: "User0",
//       email: "user0@emailAddresses.com",
//     }
//   })

//   console.log(user0)

// }

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

      console.log(addTrending)
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
  
      console.log(newSelection)
    }


  })

  // for (let i = 0; i < data.length; i++) {
  //   if (!data[i].id) {
  //     const record_id = crypto.randomUUID()
  //     data[i].id = record_id

  //     const trending_thumbs = data[i].thumbnail.trending
  //     trending_thumbs.id = crypto.randomUUID()
  //     trending_thumbs.selection_id = record_id

  //     const regular_thumbs = data[i].thumbnail.regular
  //     regular_thumbs.id = crypto.randomUUID()
  //     regular_thumbs.selection_id = record_id


  //     console.log(selection)
  //   }
  // }

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