import { getTrendingHandler, getSelectionHandler } from './selection-controller'
import { t } from '@/utils/trpc-server'

const trendingSelectionRouter = t.router({
  getTrending: t.procedure
    .query(() => getTrendingHandler()),
})

const selectionRouter = t.router({
  getSelection: t.procedure.query(() => getSelectionHandler()),
})

export {trendingSelectionRouter, selectionRouter}
