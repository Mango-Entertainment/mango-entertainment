import Image from "next/image"

const Search = () => {
  return (
    <div className="flex items-center my-2 md:my-4 ml-4 md:ml-6 lg:ml-0 lg:mt-12">
      <Image
        className="w-6 h-6 md:w-8 md:h-8"
        src="icon-search.svg"
        height={32}
        width={32}
        alt="search icon"
      />
      <input
        className="text-base md:text-2xl block w-full bg-transparent border-0 text-entertainment-pure-white caret-entertainment-red font-light focus:border-entertainment-pure-white"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default Search