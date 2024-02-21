'use client'

import Search from '@/app/_ui/components/Search'
import SectionComponent from '@/app/_ui/components/SectionComponent'

const Bookmarks = () => {
  let movieQuery = {
    category: 'Movie',
    is_bookmarked: true
  }

  let seriesQuery = {
    category: 'TV Series',
    is_bookmarked: true,
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionTitle="Movies" sectionQuery={movieQuery} />
      <SectionComponent sectionTitle="TV Series" sectionQuery={seriesQuery} />
    </div>
  )
}

export default Bookmarks
