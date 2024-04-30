import { trpc } from '@/lib/server/trpc'

const useBookmarks = () => {
  const utils = trpc.useUtils()
  const { mutateAsync } = trpc.bookmarks.createBookmark.useMutation({
    onSuccess: async () => {
      await utils.bookmarks.getBookmarks.refetch()
    },
  })

  const toggleBookmark = async ({
    selection_id,
    user_id,
    selection_type,
  }: {
    selection_id: number
    user_id: string
    selection_type: string
  }) => {
    await mutateAsync({
      user_id: user_id,
      selection_id: selection_id,
      selection_type: selection_type
    })
  }
  return toggleBookmark
}

export default useBookmarks