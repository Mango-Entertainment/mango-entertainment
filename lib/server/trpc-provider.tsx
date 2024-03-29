'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink, getFetch, loggerLink } from '@trpc/client'
import { useState } from 'react'
import superjson from 'superjson'
import { trpc } from '@/lib/server/trpc'
import queryClient from '@/lib/server/query-client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

export const TrpcProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const url = process.env.NEXT_PUBLIC_SITE_URL
    ? `${process.env.NEXT_PUBLIC_SITE_URL}api/trpc/`
    : 'http://localhost:3000/api/trpc/'

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url,
          fetch: async (input, init?) => {
            const fetch = getFetch()
            return fetch(input, {
              ...init,
              credentials: 'include',
            })
          },
        }),
      ],
      transformer: superjson,
    }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        {children}
        <ReactQueryDevtools />
      </trpc.Provider>
    </QueryClientProvider>
  )
}
