import { getRecommended } from "@/app/lib/db";
import SectionComponent from "./SectionComponent";

const Recommended = async () => {
    const recommendedData = await getRecommended();
    if (!recommendedData) return;
  return (
    <SectionComponent sectionTitle="Recommended for you" data={recommendedData} />    
  );
}

export default Recommended;