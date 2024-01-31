import SectionComponent from "@/app/ui/components/SectionComponent";
import Search from "@/app/ui/components/Search";
import prisma from "@/prisma/prisma.db";
// import { RegularData } from "@/app/lib/definitions";
import { Prisma } from '@prisma/client'


// const RegularData = Prisma.validator<Prisma.SelectionDefaultArgs>()({
//   include: {RegularThumb: true},
// })

// type RegularDataType = Prisma.PromiseReturnType<typeof RegularData>

// interface SectionComponentProps {
//   sectionTitle: string
//   data: RegularDataType[]
// }

const getSeries = async () => {
  const res = await fetch(process.env.BASE_URL + '/api/selection')
}

const Series = async () => {
  const seriesData = await getSeries();
  return (
    <div className="text-entertainment-greyish-blue">
      <Search />
      <SectionComponent sectionTitle="TV Series" data={seriesData} />
    </div>
  );
};

export default Series;
