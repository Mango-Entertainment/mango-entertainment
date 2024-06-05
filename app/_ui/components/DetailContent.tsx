import useBookmarks from '@/app/_hooks/useBookmarks'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import type { DetailsProps } from '@/app/_ui/components/Details'
import type { FC } from 'react'
import { CardHeader } from '@/components/ui/card'
import type { Selection } from '@/app/_ui/components/Details'

const DetailContent: FC<DetailsProps> = ({ selectionData, bookmarked }) => {
  const { isSignedIn, user } = useUser()
  const toggleBookmark = useBookmarks()

  if (!selectionData.title) return
  
  return (
    <div className="h-auto">
      <div className="mb-2 flex flex-row justify-between">
        <h1 className="w-11/12 text-3xl md:w-auto lg:text-4xl">
          {selectionData.title}
        </h1>
      </div>
      <p className="text-xl italic md:text-2xl">{selectionData.tagline}</p>
      <div className="my-2 flex flex-wrap justify-between lg:my-3">
        {selectionData.selection_type === 'Movie' ? (
          <p>{selectionData.runtime} min</p>
        ) : (
          <p>
            {selectionData.number_of_seasons === 1
              ? '1 season'
              : `${selectionData.number_of_seasons} seasons`}
          </p>
        )}
        <p>
          {selectionData.genres.map((genre, index) =>
            index === 0 ? `${genre.name}` : `, ${genre.name}`,
          )}
        </p>
        <p>
          {selectionData.origin_country} {selectionData.year}
        </p>
      </div>
    </div>
  )
}

export default DetailContent
