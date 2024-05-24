import Image from "next/image"

const DetailsPoster = ({
  poster_path,
  name,
}: {
  poster_path: string
  name: string
}) => {
  return poster_path ? (
    <div className="mx-auto p-4 md:p-2 max-w-full rounded-lg md:mx-0">
      <Image
        className="rounded-lg"
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        width={400}
        height={250}
        alt={`${name} poster`}
      />
    </div>
  ) : (
    <div className="m-4 hidden aspect-[2/3] items-center justify-center rounded-lg bg-entertainment-pure-white p-4 text-center text-xl text-entertainment-greyish-blue md:flex md:text-2xl">
      {name ?? 'No image available'}
    </div>
  )
}

export default DetailsPoster