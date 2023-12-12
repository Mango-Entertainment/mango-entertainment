import React from 'react';
import { TrendingData } from "@/app/lib/definitions"

interface TrendingCardProps {
  selection: TrendingData;
}

const TrendingCard: React.FC<TrendingCardProps> = ({selection}) => {
  return <div className="entertainment-pure-white">{selection?.title}</div>;
};

export default TrendingCard