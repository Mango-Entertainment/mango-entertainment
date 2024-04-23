import { trpc } from '@/lib/server/trpc'

const useBookmarks = () => {
  const utils = trpc.useUtils()
  const { mutateAsync } = trpc.bookmarks.createBookmark.useMutation({
    onSuccess: async () => {
      await utils.bookmarks.getBookmarks.refetch()
      await utils.selections.getBookmarkedMovies.refetch()
      await utils.selections.getBookmarkedSeries.refetch()
    },
  })

  const toggleBookmark = async ({
    selection_id,
    user_id,
  }: {
    selection_id: string
    user_id: string
  }) => {
    await mutateAsync({
      user_id: user_id,
      selection_id: selection_id
    })
  }
  return toggleBookmark
}

export default useBookmarks