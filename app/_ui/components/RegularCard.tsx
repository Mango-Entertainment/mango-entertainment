import Image from 'next/image'
import { type FC } from 'react'
import { useUser } from "@clerk/nextjs";
import { trpc } from "@/lib/server/trpc";

// Each selection (regular card) has a bookmark icon for logged in users
// Logged in user can click bookmark icon to add/remove bookmarks
// To do that we need to: get userID, and the selectionID (rewrite server action accordingly)
// trigger the mutation call to the db
// Bookmarks toggle and are tied to the current user
// 

interface RegularCardProps {
  id: string
  is_bookmarked: boolean
  title: string
  year: number
  category: string
  rating: string
  imageString: string
}

const RegularCard: FC<RegularCardProps> = ({
  id,
  title,
  year,
  is_bookmarked,
  category,
  rating,
  imageString
}) => {
  const categoryIcon =
    category === 'Movie'
      ? '/icon-category-movie.svg'
      : '/icon-category-tv.svg'

const {user} = useUser()
const user_id = user?.id ?? ""

const getBookmark = (user_id: string, selection_id: string) => {
    const is_bookmarked = trpc.getBookmark.useQuery({user_id, selection_id})
    return is_bookmarked.data
}

const toggleBookmark = (user_id: string, selection_id: string) => {
    console.log(`user with id ${user_id} is bookmarking selection ${selection_id}`)
    if(getBookmark(user_id, selection_id)) {
        console.log('found a bookmark')
        // deleteBookmark(user_id, selection_id)
    } else {
        console.log('no bookmark found')
        // addBookmark(user_id, selection_id)
    }
}

  return (
    <div className="relative w-40 entertainment-pure-white md:w-56">
      <Image
        className="mb-1 rounded-lg md:mb-2"
        src={imageString}
        width={280}
        height={174}
        alt="trending image"
      />
      <div onClick={() => toggleBookmark(user_id, id)} className="absolute flex content-center justify-center top-2 right-2 md:top-4 md:right-4">
        {is_bookmarked ? (
          <Image
            src="/icon-bookmark-full.svg"
            height={32}
            width={32}
            alt="bookmark icon"
          />
        ) : (
          <Image
            src="/icon-bookmark-empty.svg"
            height={32}
            width={32}
            alt="bookmark icon"
          />
        )}
      </div>
      <div className="w-full">
        <div className="flex gap-1 text-[11px] md:text-sm font-light items-center opacity-75">
          {year}
          <span className="text-sm opacity-50 md:text-xl">•</span>
          <Image
            className="h-3"
            src={categoryIcon}
            height={12}
            width={12}
            alt={`${category} icon`}
          />
          {category}
          <span className="text-sm opacity-50 md:text-xl">•</span>
          {rating}
        </div>
        <div className="text-sm font-medium md:text-lg">{title}</div>
      </div>
    </div>
  )
}

export default RegularCard
