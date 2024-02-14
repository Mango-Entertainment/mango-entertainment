'use client'

import { trpc } from "@/lib/server/trpc";
import RegularCard from "@/app/_ui/components/RegularCard";

interface SectionComponentProps {
  sectionType?: "recommended" | "movies" | "series" | "bookmarked_movies" | "bookmarked_series"
}

const SectionComponent = ({ sectionType }: SectionComponentProps) => {
  let sectionData, sectionTitle, data

  switch (sectionType){
    case "recommended":
      sectionTitle = "Recommended"
      data = trpc.getRecommended.useQuery().data
      sectionData = data?.data.selections
      break
    case "movies":
      sectionTitle = "Movies"
      data = trpc.getMovies.useQuery().data
      sectionData = data?.data.selections
      break
    case "series":
      sectionTitle = "TV Series"
      data = trpc.getSeries.useQuery().data
      sectionData = data?.data.selections
      break
    case "bookmarked_movies":
      sectionTitle = "Movies"
      data = trpc.getBookmarkedMovies.useQuery().data
      sectionData = data?.data.selections
      break
    case "bookmarked_series":
      sectionTitle = "TV Series"
      data = trpc.getBookmarkedSeries.useQuery().data
      sectionData = data?.data.selections
      break
    default:
      break
  }

  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:text-3xl md:mb-6 lg:mb-8">
        {sectionTitle}
      </h1>
      {/* <div className="mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit md:gap-x-10 md:gap-y-8"> */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 mb-8">
        {sectionData?.map((selection) => {
          if (!selection.RegularThumb?.large) return
          return (
            <RegularCard
              key={selection.id}
              id={selection.id}
              title={selection.title}
              year={selection.year}
              category={selection.category}
              is_bookmarked={selection.is_bookmarked}
              rating={selection.rating}
              imageString={selection.RegularThumb?.large.slice(8)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default SectionComponent