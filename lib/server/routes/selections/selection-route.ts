import {
  getTrendingHandler,
  getRecommendedWithSearchHandler,
  getSelectionsHandler,
  getTrendingWithSearchHandler,
} from './selection-controller'
import { t } from '@/lib/server/trpc-server'
import { sectionFilterQuery, filterQuery, imageSelect, searchQuery } from '@/lib/server/routes/selections/selection-schema'

const selectionRouter = t.router({
  selections: t.procedure.input(sectionFilterQuery).query(async (opts) => {
    const { input } = opts
    const data = await getSelectionsHandler({
      sectionFilterQuery: input,
    })
    return data
  }),
  trending: t.procedure.input(searchQuery).query(async (opts) => {
    const { input } = opts
    const data = await getTrendingWithSearchHandler({
      searchQuery: input,
    })
    return data
  }),
  recommended: t.procedure.input(searchQuery).query(async (opts) => {
    const { input } = opts
    const data = await getRecommendedWithSearchHandler({
      searchQuery: input,
    })
    return data
  })
})
export default selectionRouter
