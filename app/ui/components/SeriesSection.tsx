import { getSeries } from "@/app/lib/db"
import SectionComponent from "./SectionComponent";

const SeriesSection = async () => {
    const seriesData = await getSeries();
    // console.log(seriesData)
  return <SectionComponent sectionTitle="TV Series" data={seriesData} />;
}

export default SeriesSection