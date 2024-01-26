import prisma from '@/app/lib/prisma.db'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const trendingSelection = await prisma.selection.findMany({where:{is_trending: true}})
  res.status(200).json({ trendingSelection: trendingSelection })
}
