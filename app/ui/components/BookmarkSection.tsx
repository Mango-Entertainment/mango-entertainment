import {getBookmarks} from "@/app/lib/db";
import SectionComponent from "./SectionComponent";

const BookmarkSection = async () => {
  const BookmarkData = await getBookmarks();
  console.log(BookmarkData)
  return (
    <>
      <SectionComponent sectionTitle="Movies" data={BookmarkData.movies} />
      <SectionComponent sectionTitle="TV Series" data={BookmarkData.series} />
    </>
  );
};

export default BookmarkSection;
