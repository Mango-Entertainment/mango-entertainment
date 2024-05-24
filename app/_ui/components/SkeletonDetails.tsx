import { Skeleton } from '@/components/ui/skeleton'

const SkeletonDetails = () => {
  return (
    <>
      <div className="mt-2 aspect-video w-full bg-slate-700 bg-cover md:mt-4 lg:mt-8">
        <div className="flex flex-col gap-4 bg-entertainment-greyish-blue bg-opacity-80 p-4 backdrop-blur-lg md:m-4 md:aspect-video md:flex-row md:gap-2 md:p-4">
          <Skeleton
            id="poster"
            className="w-44 self-center md:self-start md:m-4 aspect-[2/3] md:w-96"
          />
          <div className="flex w-full flex-col gap-2">
            <Skeleton id="title" className="h-12 w-2/3" />
            <Skeleton id="tagline" className="h-7 w-1/2" />
            <Skeleton id="details" className="h-6 w-full" />
            <Skeleton id="description" className="h-24 w-full" />
          </div>
        </div>
      </div>
    </>
  )
}

export default SkeletonDetails
