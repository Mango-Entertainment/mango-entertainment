// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.

export type Selection = {
  id: string;
  title: string;
  category: string;  
  year: number;
  rating: string;
  isTrending: boolean;
  isBookmarked: boolean
}

export type TrendingThumbs = {
  id: string;
  selectionId: string;
  small: string;
  large: string
}

export type RegularThumbs = {
  id: string;
  selectionId: string;
  small: string;
  medium: string;
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