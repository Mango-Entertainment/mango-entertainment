'use client'

import { trpc } from '@/lib/server/trpc'
import Image from 'next/image'
// import { cx } from 'class-variance-authority'
import { useUser } from '@clerk/nextjs'
import SkeletonDetails from '@/app/_ui/components/SkeletonDetails'
import SeriesInfo from '@/app/_ui/components/Series/SeriesInfo'
import DetailsPoster from '@/app/_ui/components/DetailsPoster'

const SeriesDetailsPage = ({ params }: { params: { details: string } }) => {
  const series_id = parseInt(params.details)
  const { data, isLoading } = trpc.tmdb.getSeriesDetails.useQuery({ series_id })
  const { isSignedIn, user } = useUser()
  const bookmark = trpc.bookmarks.getBookmark.useQuery({
    selection_id: series_id,
    user_id: user?.id ?? '',
    selection_type: 'TV Series',
  })
  const bookmarked = bookmark?.data?.bookmarked ?? false

  if (isLoading) {
    return <SkeletonDetails />
  }
  if (!data) return
  return (
    <div className="p-2 md:p-4">
      {data.backdrop_path ? (
        <div
          className="w-full max-w-full bg-cover md:p-4 p-2"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.backdrop_path}})`,
          }}
        >
          <div className="flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:aspect-video md:flex-row md:gap-4 md:p-4">
            <DetailsPoster poster_path={data.poster_path} name={data.name} />
            <SeriesInfo bookmarked={bookmarked} seriesDetails={data} />
          </div>
        </div>
      ) : (
        <div className="mt-2 aspect-video w-full bg-slate-700 bg-cover md:mt-4 lg:mt-8">
          <div className="flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:m-4 md:aspect-video md:flex-row md:gap-2 md:p-4">
            <DetailsPoster poster_path={data.poster_path} name={data.name} />
            <SeriesInfo bookmarked={bookmarked} seriesDetails={data} />
          </div>
        </div>
      )}
    </div>
  )
}


// const SeriesPoster = ({
//   poster_path,
//   name,
// }: {
//   poster_path: string
//   name: string
// }) => {
//   return poster_path ? (
//     <div className="mx-auto aspect-[2/3] max-w-full rounded-lg md:mx-0">
//       <Image
//         className="rounded-lg"
//         src={`https://image.tmdb.org/t/p/original${poster_path}`}
//         width={400}
//         height={250}
//         alt={`${name} poster`}
//       />
//     </div>
//   ) : (
//     <div className="m-4 hidden aspect-[2/3] items-center justify-center rounded-lg bg-entertainment-pure-white p-4 text-center text-xl text-entertainment-greyish-blue md:flex md:text-2xl">
//       {name ?? 'No image available'}
//     </div>
//   )
// }

export default SeriesDetailsPage
