import { nullable, z } from 'zod'

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
  category: z.string().optional(),
  is_bookmarked: z.boolean().optional(),
  is_trending: z.boolean().optional(),
  title: z
    .object({
      search: z.string(),
    })
    .optional(),
})



export type CreateSelection = z.TypeOf<typeof createSelectionSchema>
export type CreateTrendingThumbs = z.TypeOf<typeof createTrendingThumbsSchema>
export type CreateRegularThumbs = z.TypeOf<typeof createRegularThumbsSchema>
export type SectionFilterQuery = z.TypeOf<typeof sectionFilterQuery>