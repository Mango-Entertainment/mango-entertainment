import RegularCard from "@/app/_ui/components/RegularCard";
import { type FC } from "react";
import { type RouterOutputs } from "@/app/api/trpc/trpc-router";

type SectionComponentProps = {
  sectionData: RouterOutputs["getRecommended"] | undefined
  section: string
}

const SectionComponent: FC<SectionComponentProps> = ({sectionData, section}) => {
  if (sectionData && sectionData.results < 1) return <></>

  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:text-3xl md:mb-6 lg:mb-8">
        {section}
      </h1>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 mb-8">
        {sectionData?.data.map((selection) => {
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
            />
          )
        })}
      </div>
    </div>
  )
}

export default SectionComponent