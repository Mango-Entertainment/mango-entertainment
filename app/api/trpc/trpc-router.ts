import userRouter from '@/server/routes/users/user-route'
import {trendingSelectionRouter, selectionRouter, recommendedRouter, moviesRouter, seriesRouter, bookmarksRouter, bookmarkedMovieRouter, bookmarkedSeriesRouter } from '@/server/routes/selections/selection-route'
import { t } from '@/utils/trpc-server'
import { createServerSideHelpers } from '@trpc/react-query/server'
import SuperJSON from 'superjson'

const healthCheckerRouter = t.router({
  healthchecker: t.procedure.query(({ ctx }) => {
    return {
      status: 'success',
      message: 'Welcome to trpc with Next.js 14 and React Query',
    }
  }),
})

export const appRouter = t.mergeRouters(userRouter, trendingSelectionRouter, selectionRouter, recommendedRouter, moviesRouter, seriesRouter, bookmarksRouter, bookmarkedMovieRouter, bookmarkedSeriesRouter, healthCheckerRouter)

export const createSSRHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    transformer: SuperJSON,
    ctx: () => {},
  })

export type AppRouter = typeof appRouter
