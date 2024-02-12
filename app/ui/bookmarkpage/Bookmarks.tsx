'use client'

import Search from '@/app/ui/components/Search'
import SectionComponent from '@/app/ui/components/SectionComponent'
import { trpc } from '@/utils/trpc'

const Bookmarks = () => {
  const { data } = trpc.getSelection.useQuery()

  let selectionData = data?.data.selections
  if (!selectionData) return
  
  const bookmarkedData = selectionData.filter((selection) => {
    return selection.is_bookmarked === true
  })

  const movieData = bookmarkedData.filter((selection) => {
    return selection.category === 'Movie'
  })

  // const seriesData = selectionData.filter((selection) => {
  //   return selection.category === 'TV Series'
  // })

  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionTitle="Movies" {...movieData} />
      {/* <SectionComponent sectionTitle="TV Series" {...seriesData} /> */}
    </div>
  )
}

export default Bookmarks
