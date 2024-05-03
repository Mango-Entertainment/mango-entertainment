import { trpc } from '@/lib/server/trpc'
import { type SeriesCardData, type MovieCardData } from '@/lib/server/routes/tmdb/tmdb'

type ToggleBookmarkArgs={
  selection_id: number
  user_id: string
  selection_type: string
  movie_data: MovieCardData
  series_data: SeriesCardData
}

const useBookmarks = () => {
  const utils = trpc.useUtils()
  const { mutateAsync } = trpc.bookmarks.createBookmark.useMutation({
    onSuccess: async () => {
      await utils.bookmarks.invalidate()
    },
  })

  const toggleBookmark = async ({
    selection_id,
    user_id,
    selection_type,
    movie_data,
    series_data,
  }: ToggleBookmarkArgs) => {
    await mutateAsync({
      user_id: user_id,
      selection_id: selection_id,
      selection_type: selection_type,
      movie_data: movie_data,
      series_data: series_data,
    })
  }
  return toggleBookmark
}

export default useBookmarks