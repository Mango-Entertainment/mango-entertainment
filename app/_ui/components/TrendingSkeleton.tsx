import useEmblaCarousel from 'embla-carousel-react'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from '@/components/ui/arrowbuttons'
import RegularCardSkeleton from './RegularCardSkeleton'


const TrendingSkeleton = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    containScroll: false,
    align: 'start',
  })
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi)
  
  return (
    <div className="ml-4 text-entertainment-pure-white">
      <section>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="mb-2 flex w-max touch-pan-y gap-4 md:gap-6">
            <RegularCardSkeleton />
            <RegularCardSkeleton />
            <RegularCardSkeleton />
            <RegularCardSkeleton />
            <RegularCardSkeleton />
            <RegularCardSkeleton />
            <RegularCardSkeleton />
            <RegularCardSkeleton />
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-end">
          <div className="grid w-24 grid-cols-2 gap-1 md:mr-4">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
export default TrendingSkeleton
