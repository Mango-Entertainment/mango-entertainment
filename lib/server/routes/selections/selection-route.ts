import { z } from 'zod'
import { getTrendingHandler, getRecommendedHandler, getAllSelectionsHandler, getMoviesHandler, getSeriesHandler, getBookmarkedHandler, getBookmarkedMoviesHandler, getBookmarkedSeriesHandler, getSelectionsHandler } from './selection-controller'
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
  // getSelections: t.procedure.input(sectionFilterQuery).query(async (opts) => {
  //   const { input } = opts
  //   const { sectionTitle, sectionData } = await getSelectionsHandler({
  //     sectionFilterQuery: input,
  //   })
  //   return { sectionTitle, sectionData }
  // }),
  getTrending: t.procedure.query(() => getTrendingHandler()),
  getSelection: t.procedure.query(() => getAllSelectionsHandler()),
  getRecommended: t.procedure.query(() => getRecommendedHandler()),
  getMovies: t.procedure.query(() => getMoviesHandler()),
  getSeries: t.procedure.query(() => getSeriesHandler()),
  getBookmarks: t.procedure.query(() => getBookmarkedHandler()),
  getBookmarkedMovies: t.procedure.query(() => getBookmarkedMoviesHandler()),
  getBookmarkedSeries: t.procedure.query(() => getBookmarkedSeriesHandler()),
})
export default selectionRouter
