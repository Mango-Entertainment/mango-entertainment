import { getTrendingHandler, getAllSelectionsHandler, getSelectionsHandler } from './selection-controller'
import { t } from '@/lib/server/trpc-server'
import { sectionFilterQuery } from '@/lib/server/routes/selections/selection-schema'

const selectionRouter = t.router({
  selections: t.procedure.input(sectionFilterQuery).query(async (opts) => {
    const { input } = opts
    const data = await getSelectionsHandler({
      sectionFilterQuery: input,
    })
    return data
  }),
  trending: t.procedure.query(() => getTrendingHandler()),
  all_selections: t.procedure.query(() => getAllSelectionsHandler()),
})
export default selectionRouter
