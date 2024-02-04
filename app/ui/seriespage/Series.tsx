import SectionComponent from "@/app/ui/components/SectionComponent";
import { getSeries } from "@/app/lib/db";
import Search from "../components/Search";

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
