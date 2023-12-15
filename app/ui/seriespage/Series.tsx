import { getSeries } from "@/app/lib/db"
import SectionComponent from "@/app/ui/components/SectionComponent";
import Search from "@/app/ui/components/Search";

const Series = async () => {
    const seriesData = await getSeries();
  return (
  <div className="text-entertainment-greyish-blue">
    <Search />
  <SectionComponent sectionTitle="TV Series" data={seriesData} />
  </div>
  );
}

export default Series