import { trpc } from '@/lib/server/trpc'
import queryClient from '@/lib/server/query-client'

const useBookmarks = () => {
  const { mutateAsync } = trpc.createBookmark.useMutation({
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [
          ['getBookmarkedMovies', 'getBookmarkedSeries', 'getBookmarks'],
        ],
      })
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
      selection_id: selection_id,
    })
  }
  return toggleBookmark
}

export default useBookmarks