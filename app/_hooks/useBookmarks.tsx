import { useUser } from '@clerk/nextjs'
import { trpc } from '@/lib/server/trpc'
import queryClient from '@/lib/server/query-client'

const useBookmarks = (selection_id: string) => {
  const { user } = useUser()
  const user_id = user?.id ?? ''
  const is_bookmarked = trpc.getBookmark.useQuery({ user_id, selection_id })
  const { mutateAsync } = trpc.createBookmark.useMutation({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [
          ['getBookmarkedMovies', 'getBookmarkedSeries', 'getBookmark']
        ]
      })
    }
  })

  const toggleBookmark = async () => {
    await mutateAsync({
      user_id: user_id,
      selection_id: selection_id,
      bookmarked: !is_bookmarked.data?.bookmarked,
    })
    
  }
  return { is_bookmarked, toggleBookmark}
}

export default useBookmarks