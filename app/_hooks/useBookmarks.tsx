import { useUser } from '@clerk/nextjs'
import { trpc } from '@/lib/server/trpc'

const useBookmarks = (selection_id: string) => {
  const { user } = useUser()
  const user_id = user?.id ?? ''

  const is_bookmarked = trpc.getBookmark.useQuery({ user_id, selection_id })
  const set_bookmarked = trpc.createBookmark.useMutation({
    onSettled: async () => {
      await is_bookmarked.refetch()
    },
  })

  const toggleBookmark = async () => {
    set_bookmarked.mutate({
      user_id: user_id,
      selection_id: selection_id,
      bookmarked: !is_bookmarked.data?.bookmarked,
    })
  }
  return { is_bookmarked, toggleBookmark}
}

export default useBookmarks