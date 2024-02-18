'use client'

import { trpc } from "@/lib/server/trpc";
import RegularCard from "@/app/_ui/components/RegularCard";
import { SectionFilterQuery } from '@/lib/server/routes/selections/selection-schema';

const SectionComponent = ({ sectionType }: {sectionType: SectionFilterQuery}) => {
  const {data, isLoading} = trpc.getSelections.useQuery(sectionType)
  
  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:text-3xl md:mb-6 lg:mb-8">
        {data?.sectionTitle}
      </h1>
      {/* <div className="mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit md:gap-x-10 md:gap-y-8"> */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 mb-8">
        {data?.sectionData?.map((selection) => {
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