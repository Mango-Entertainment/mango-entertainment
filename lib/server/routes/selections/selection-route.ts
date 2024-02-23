import { getTrendingHandler, getAllSelectionsHandler, getSelectionsHandler, getSearchHandler } from './selection-controller'
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
  trending: t.procedure.query(() => getTrendingHandler()),
  // all_selections: t.procedure.query(() => getAllSelectionsHandler()),
  all_selections: t.procedure.input(filterQuery).query(async (opts) => {
    const { input } = opts

    console.log(input)
    // getAllSelectionsHandler()),
   }),
  search: t.procedure.input(searchQuery).query(async (opts) => {
    const { input } = opts
    const data = await getSearchHandler({
      searchQuery: input,
    })
    return data
  })
})
export default selectionRouter
