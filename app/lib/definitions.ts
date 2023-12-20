export type Selection = {
  id: string
  title: string
  category: string
  year: number
  rating: string
  isTrending: boolean
  isBookmarked: boolean
}

export type TrendingThumbs = {
  id: string
  selectionId: string
  small: string
  large: string
}

export type RegularThumbs = {
  id: string
  selectionId: string
  small: string
  medium: string
  large: string
}

export type TrendingData = {
  id: string
  title: string
  rating: string
  year: number
  category: string
  is_bookmarked: boolean
  large: string
  small: string
}

export type RegularData = {
  id: string
  title: string
  rating: string
  year: number
  category: string
  is_bookmarked: boolean
  large: string
  small: string
  medium: string
}
