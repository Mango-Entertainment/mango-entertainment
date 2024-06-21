import { userRouter } from '@/lib/server/routes/users/users'
import { router } from '@/lib/server/trpc-server'
// import { createServerSideHelpers } from '@trpc/react-query/server'
// import SuperJSON from 'superjson'
import { type inferRouterInputs, type inferRouterOutputs } from '@trpc/server'
import { bookmarkRouter } from '@/lib/server/routes/bookmarks/bookmarks'
import { tmdbRouter } from '@/lib/server/routes/tmdb/tmdb'

export const appRouter = router({
  users: userRouter,
  bookmarks: bookmarkRouter,
  tmdb: tmdbRouter
})

// export const createSSRHelper = () =>
//   createServerSideHelpers({
//     router: appRouter,
//     transformer: SuperJSON,
//     ctx: () => {},
//   })

export type AppRouter = typeof appRouter
export type RouterInputs = inferRouterInputs<AppRouter>
export type RouterOutputs = inferRouterOutputs<AppRouter>
