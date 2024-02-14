'use client'

import Search from '@/app/_ui/components/Search'
import SectionComponent from '@/app/_ui/components/SectionComponent'

const Bookmarks = () => {

  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionType='bookmarked_movies' />
      <SectionComponent sectionType='bookmarked_series' />
    </div>
  )
}

export default Bookmarks
