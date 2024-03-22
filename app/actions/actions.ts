"use server"
import { trpc } from '@/lib/server/trpc'

const getBookmark = (user_id: string, selection_id: string) => {
    const is_bookmarked = trpc.getBookmark.useQuery({user_id, selection_id})
    return is_bookmarked.data
}

export const toggleBookmark = async (user_id: string, selection_id: string) => {
    console.log(`user with id ${user_id} is bookmarking selection ${selection_id}`)
    if(getBookmark(user_id, selection_id)) {
        console.log('found a bookmark')
        // deleteBookmark(user_id, selection_id)
    } else {
        console.log('no bookmark found')
        // addBookmark(user_id, selection_id)
    }
}