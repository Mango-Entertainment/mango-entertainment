import { z } from 'zod'

export const createSelectionSchema = z.object({
  id: z.string(),
  title: z.string(),
  category: z.string(),
  year: z.number(),
  rating: z.string(),
  isTrending: z.boolean(),
  isBookmarked: z.boolean(),
})

export const createTrendingThumbsSchema = z.object({
  id: z.string(),
  selectionId: z.string(),
  small: z.string(),
  large: z.string(),
})

export const createRegularThumbsSchema = z.object({
  id: z.string(),
  selectionId: z.string(),
  small: z.string(),
  medium: z.string(),
  large: z.string(),
})

export const sectionFilterQuery = z.object({
  sectionType: z.enum(["recommended", "movies", "series", "bookmarked_movies", "bookmarked_series"])
})



export type CreateSelection = z.TypeOf<typeof createSelectionSchema>
export type CreateTrendingThumbs = z.TypeOf<typeof createTrendingThumbsSchema>
export type CreateRegularThumbs = z.TypeOf<typeof createRegularThumbsSchema>
export type SectionFilterQuery = z.TypeOf<typeof sectionFilterQuery>