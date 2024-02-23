'use client'

import SectionComponent from "@/app/_ui/components/SectionComponent";
import Search from "../components/Search";
import { ChangeEvent, useState } from 'react'

const Series = () => {
  const [search, setSearch] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  return (
    <div className="text-entertainment-greyish-blue">
      <Search search={search} handleChange={handleChange} />
      <SectionComponent section="TV Series" bookmarked={false} search={search} />
    </div>
  )
};

export default Series;
