'use client'

import DetailsPoster from '@/app/_ui/components/DetailsPoster'
import type { FC } from 'react'
import type { DetailsProps } from '@/app/_ui/components/Details'
import DetailsTabs from '@/app/_ui/components/DetailsTabs'

const DetailsPage: FC<DetailsProps> = ({bookmarked, selectionData}) => {
  
  return (
    <div className="p-2 md:p-4">
      {selectionData.backdrop_path ? (
        <div
          className="w-full max-w-full bg-cover p-2 md:p-4"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${selectionData?.backdrop_path}})`,
          }}
        >
          <div className="grid grid-cols-1 gap-3 bg-entertainment-greyish-blue bg-opacity-80 p-3 backdrop-blur-lg md:aspect-video md:grid-cols-3 md:gap-6 md:p-6">
            <DetailsPoster
              poster_path={selectionData.poster_path}
              name={selectionData.title}
            />
            <DetailsTabs
              bookmarked={bookmarked}
              selectionData={selectionData}
            />
          </div>
        </div>
      ) : (
        <div className="mt-2 aspect-video w-full bg-slate-700 bg-cover md:mt-4 lg:mt-8">
          <div className="flex flex-col bg-entertainment-greyish-blue bg-opacity-80 backdrop-blur-lg md:m-4 md:aspect-video md:flex-row md:gap-2 md:p-4">
            <DetailsPoster
              poster_path={selectionData.poster_path}
              name={selectionData.title}
            />
            <DetailsTabs
              bookmarked={bookmarked}
              selectionData={selectionData}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailsPage