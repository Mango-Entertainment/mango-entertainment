import RegularCard from '@/app/_ui/components/RegularCard'
import { type FC } from 'react'
import { type RouterOutputs } from '@/app/api/trpc/trpc-router'

type SectionComponentProps = {
  sectionData: RouterOutputs['getRecommended'] | undefined
  section: string
  bookmarks: RouterOutputs['getBookmarks'] | undefined
}

const SectionComponent: FC<SectionComponentProps> = ({
  sectionData,
  section,
  bookmarks,
}) => {
  if (sectionData && sectionData.length < 1) {
    return (
      <div className="ml-4 text-entertainment-pure-white">
        <h1 className="mb-4 text-xl font-light md:mb-6 md:text-3xl lg:mb-8">
          {section}
        </h1>
        <p className="text-center font-light opacity-75 lg:text-xl">
          No results found
        </p>
      </div>
    )
  }

  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:mb-6 md:text-3xl lg:mb-8">
        {section}
      </h1>
      <div className="mb-8 grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-4 md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">
        {sectionData?.map((selection) => {
          const bookmarked = bookmarks?.data.filter(
            (bookmark) => bookmark.selection_id === selection.id,
          )[0] ?? { bookmarked: false }
          const largeThumb = selection.RegularThumb?.large.slice(8) ?? null
          if (!largeThumb) return
          return (
            <RegularCard
              key={selection.id}
              id={selection.id}
              title={selection.title}
              year={selection.year}
              category={selection.category}
              rating={selection.rating}
              imageString={largeThumb}
              bookmarked={bookmarked.bookmarked}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SectionComponent
