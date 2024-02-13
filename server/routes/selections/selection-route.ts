import { getTrendingHandler, getRecommendedHandler, getAllSelectionsHandler, getMoviesHandler, getSeriesHandler, getBookmarkedHandler, getBookmarkedMoviesHandler, getBookmarkedSeriesHandler } from './selection-controller'
import { t } from '@/utils/trpc-server'

const trendingSelectionRouter = t.router({
  getTrending: t.procedure
    .query(() => getTrendingHandler()),
})

const selectionRouter = t.router({
  getSelection: t.procedure.query(() => getAllSelectionsHandler()),
})

const recommendedRouter = t.router({
  getRecommended: t.procedure.query(() => getRecommendedHandler()),
})

const moviesRouter = t.router({
  getMovies: t.procedure.query(() => getMoviesHandler()),
})

const seriesRouter = t.router({
  getSeries: t.procedure.query(() => getSeriesHandler()),
})

const bookmarksRouter = t.router({
  getBookmarks: t.procedure.query(() => getBookmarkedHandler()),
})
const bookmarkedMovieRouter = t.router({
  getBookmarkedMovies: t.procedure.query(() => getBookmarkedMoviesHandler()),
})
const bookmarkedSeriesRouter = t.router({
  getBookmarkedSeries: t.procedure.query(() => getBookmarkedSeriesHandler()),
})

export {trendingSelectionRouter, selectionRouter, recommendedRouter, moviesRouter, seriesRouter, bookmarksRouter, bookmarkedMovieRouter, bookmarkedSeriesRouter}
