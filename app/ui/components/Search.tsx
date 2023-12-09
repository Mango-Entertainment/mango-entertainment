import Image from "next/image"

const Search = () => {
  return (
    <div className="flex items-center my-2 pl-4">
      <Image
        className="w-6 h-6"
        src="icon-search.svg"
        height={32}
        width={32}
        alt="search icon"
      />
      <input
        className="text-base block w-full bg-transparent border-0 text-entertainment-pure-white caret-entertainment-red font-light focus:border-entertainment-pure-white"
        type="text"
        placeholder="Search for movies or TV series"
      />
    </div>
  );
}

export default Search