import { z } from 'zod'

const User = z.object({
  id: z.string(),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(7, { message: 'Must be 7 or more characters long' }),
})

// const Selection = z.object({
//   id: z.string(),
//   title: z.string(),
//   category: z.string(),
//   year: z.number(),
//   rating: z.string(),
//   isTrending: z.boolean(),
//   isBookmarked: z.boolean(),
// })

// const TrendingThumbs = z.object({
//   id: z.string(),
//   selectionId: z.string(),
//   small: z.string(),
//   large: z.string(),
// })

// const RegularThumbs = z.object({
//   id: z.string(),
//   selectionId: z.string(),
//   small: z.string(),
//   medium: z.string(),
//   large: z.string(),
// })

const TrendingData = z.object({
  id: z.string(),
  title: z.string(),
  rating: z.string(),
  year: z.number(),
  category: z.string(),
  is_bookmarked: z.boolean(),
  large: z.string(),
  small: z.string(),
})

const RegularData = z.object({
  id: z.string(),
  title: z.string(),
  rating: z.string(),
  year: z.number(),
  category: z.string(),
  is_bookmarked: z.boolean(),
  large: z.string(),
  small: z.string(),
  medium: z.string(),
})

// export type Selection = z.infer<typeof Selection>
// export type TrendingThumbs = z.infer<typeof TrendingThumbs>
// export type RegularThumbs = z.infer<typeof RegularThumbs>
export type TrendingData = z.infer<typeof TrendingData>
export type RegularData = z.infer<typeof RegularData>