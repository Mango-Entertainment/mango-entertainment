import { appRouter } from '@/app/api/trpc/trpc-router'
import * as trpcNext from '@trpc/server/adapters/next'
import { createContext } from '@/lib/server/context'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: createContext,
})