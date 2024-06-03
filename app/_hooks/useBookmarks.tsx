import { trpc } from '@/lib/server/trpc'

type ToggleBookmarkArgs={
  selection_id: number
  user_id: string
  selection_type: string
  selection_title: string
  selection_poster_path: string
  selection_year: string
}

const useBookmarks = () => {
  const utils = trpc.useUtils()
  const { mutateAsync } = trpc.bookmarks.createBookmark.useMutation({
    onSuccess: async () => {
      await utils.bookmarks.invalidate()
      await utils.bookmarks.getBookmark.refetch()
    },
  })

  const toggleBookmark = async ({
    selection_id,
    user_id,
    selection_type,
    selection_title,
    selection_poster_path,
    selection_year
  }: ToggleBookmarkArgs) => {
    await mutateAsync({
      user_id: user_id,
      selection_id: selection_id,
      selection_type: selection_type,
      selection_title: selection_title,
      selection_poster_path: selection_poster_path,
      selection_year: selection_year,
    })
  }
  return toggleBookmark
}

export default useBookmarks