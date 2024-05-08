'use client'

import { trpc } from "@/lib/server/trpc"
import Image from "next/image"

const movieDetailsPage = ({params}: {params: { details: string}}) => {
  const movie_id = parseInt(params.details)
  const {data, isLoading} = trpc.tmdb.getMovieDetails.useQuery({ movie_id })
  

  return (
      <div className="bg-cover p-8 mt-2 md:mt-4 lg:mt-12" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path}})` }}>
      <div className="flex bg-entertainment-greyish-blue bg-opacity-80">
        <Image
            className="rounded-lg bg-origin-content m-4"
            src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
            width={400}
            height={250}
            alt="poster image"
          />
      <div className="m-4">
        <p>Title: {data?.title}</p>
        <p>Tagline: {data?.tagline}</p>
        <p>Runtime: {data?.runtime}</p>
        <p>Overview: {data?.overview}</p>
        <p>Id: {data?.id}</p>
        <p>Budget: {data?.budget}</p>
        <p>Revenue: {data?.revenue}</p>
        <p>Original Language: {data?.original_language}</p>
        <p>Origin Country: {data?.origin_country}</p>
        <p>Popularity: {data?.popularity}</p>
      </div>
      </div>
      </div>
  )
}

export default movieDetailsPage