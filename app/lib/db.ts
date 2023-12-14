import { TrendingThumbs, Selection, RegularThumbs, TrendingData } from "@/app/lib/definitions";
import postgres from "postgres";

const connectionString = `${process.env.SUPABASE_POSTGRES_CONNECTION_STRING}`
const sql = postgres(connectionString)

export const getTrending = async () => {
  try {
    const result: TrendingData[] = []
    const data = await sql`SELECT selections.id, selections.title, selections.rating, selections.year, selections.category, selections.is_bookmarked, trending_thumbs.large, trending_thumbs.small
FROM selections
JOIN trending_thumbs ON trending_thumbs.selection_id = selections.id`;
data.forEach(item => {
  const {id, title, rating, year, category, is_bookmarked, large, small} = item
  result.push({id, title, rating, year, category, is_bookmarked, large, small})})
return result
  } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch trending data.');
  }
};