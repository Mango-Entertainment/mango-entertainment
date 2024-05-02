import { trpc } from '@/lib/server/trpc'
import { type MovieCardData } from '@/lib/server/routes/tmdb/tmdb'

type ToggleBookmarkArgs={
  selection_id: number
  user_id: string
  selection_type: string
  movie_data: MovieCardData
}

const useBookmarks = () => {
  const utils = trpc.useUtils()
  const { mutateAsync } = trpc.bookmarks.createBookmark.useMutation({
    onSuccess: async () => {
      await utils.bookmarks.getBookmarks.refetch()
      await utils.bookmarks.getBookmark.refetch()
    },
  })

  const toggleBookmark = async ({
    selection_id,
    user_id,
    selection_type,
    movie_data,
  }: ToggleBookmarkArgs) => {
    await mutateAsync({
      user_id: user_id,
      selection_id: selection_id,
      selection_type: selection_type,
      movie_data: movie_data,
    })
  }
  return toggleBookmark
}

export default useBookmarks