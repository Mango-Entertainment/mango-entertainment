import RegularCard from "./RegularCard";
import { RegularData } from "@/app/lib/definitions";
import { FC } from "react";

interface SectionComponentProps {
    data: RegularData[]
    sectionTitle: string
}

const SectionComponent: FC<SectionComponentProps> = ({sectionTitle, data}) => {
  return (
    <div className="ml-4 text-entertainment-pure-white">
      <h1 className="text-xl md:text-3xl font-light mb-4 md:mb-6 lg:mb-8">
        {sectionTitle}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-fit md:gap-x-10 md:gap-y-8 mb-8">
      {/* <div className="grid grid-cols-[repeat(auto-fit_minmax(280px_1fr))] gap-4 w-fit md:gap-x-10 md:gap-y-8 mb-8"> */}
        {data.map((selection) => {
          // {console.log("selection", selection)}
          return <RegularCard selection={selection} key={selection.id} />;
        })}
      </div>
    </div>
  );
}

export default SectionComponent