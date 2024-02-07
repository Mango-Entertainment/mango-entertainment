import { getTrendingHandler } from './selection-controller'
import { t } from '@/utils/trpc-server'

const trendingSelectionRouter = t.router({
  getTrending: t.procedure
    .query(() => getTrendingHandler()),
})

export default trendingSelectionRouter
