import {getBookmarks} from "@/app/lib/db";
import Search from "@/app/ui/components/Search";
import SectionComponent from '@/app/ui/components/SectionComponent';

const Bookmarks = async () => {
  const BookmarkData = await getBookmarks();
  // console.log(BookmarkData)
  return (
    <div className="text-entertainment-greyish-blue">
    <Search />
      <SectionComponent sectionTitle="Movies" data={BookmarkData.movies} />
      <SectionComponent sectionTitle="TV Series" data={BookmarkData.series} />
    </div>
  );
};

export default Bookmarks;
