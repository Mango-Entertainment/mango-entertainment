import { TrendingData } from "@/app/lib/definitions"

const TrendingCard = (selection: TrendingData) => {
  return (
    <div className="entertainment-pure-white">
        {selection.title}
    </div>
  )
}

export default TrendingCard