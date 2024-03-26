import {userRouter} from '@/lib/server/routes/users/users'
// import selectionRouter from '@/lib/server/routes/selections/selection-route'
import { t } from '@/lib/server/trpc-server'
import { createServerSideHelpers } from '@trpc/react-query/server'
import SuperJSON from 'superjson'
import { selectionRouter } from '@/lib/server/routes/selections/selections'
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'
import { bookmarkRouter } from '@/lib/server/routes/bookmarks/bookmarks'


const healthCheckerRouter = t.router({
  healthchecker: t.procedure.query(({ ctx }) => {
    return {
      status: 'success',
      message: 'Welcome to trpc with Next.js 14 and React Query',
    }
  }),
})

export const appRouter = t.mergeRouters(userRouter, selectionRouter, bookmarkRouter, healthCheckerRouter)


export const createSSRHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    transformer: SuperJSON,
    ctx: () => {},
  })

export type AppRouter = typeof appRouter
export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>
