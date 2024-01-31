import RegularCard from "@/app/ui/components/RegularCard";
// import { RegularData } from "@/app/lib/definitions";
import { FC } from "react";
// import prisma from '@/app/lib/prisma.db'
import { Prisma } from "@prisma/client";
import { Selection, RegularThumb } from '@prisma/client'

interface SelectionDataType {
  data: Selection& {RegularThumb}
}
interface Props {
  data: Selection[]
  sectionTitle: string
}



// const SectionComponent: FC<SectionComponentProps> = ({sectionTitle, data}) => {
const SectionComponent = ({sectionTitle, data}: Props) => {

  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="mb-4 text-xl font-light md:text-3xl md:mb-6 lg:mb-8">
        {sectionTitle}
      </h1>
      {/* <div className="mb-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit md:gap-x-10 md:gap-y-8"> */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4 mb-8">
        {/* {data.map((selection) => {
          return <RegularCard title={selection.title} id={selection.id} year={selection.year} category={selection.category} is_bookmarked={selection.is_bookmarked} rating={selection.rating} key={selection.id} large={selection.large} />;
        })} */}
      </div>
    </div>
  );
}

export default SectionComponent