import { type FC, type ReactNode } from 'react'
import { outfit } from './_ui/fonts'
import './globals.css'
import Navbar from './_ui/components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'
import { TrpcProvider } from '@/lib/server/trpc-provider'

const meta = {
  favicon: '/icon.ico',
  title: 'Mango Entertainment',
  description: 'Generated by the best coders who eat mangoes',
  url: 'https://mango-entertainment-alexvcs.vercel.app/',
  type: 'website',
}

export const metadata = {
  title: meta.title,
  description: meta.description,
  favicon: meta.favicon,
  url: meta.url,
  openGraph: {
    url: meta.url,
    title: meta.title,
    description: meta.description,
    type: meta.type,
    site_name: meta.title,
  },
}



const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.className} grid max-w-full grid-cols-1 items-start overflow-x-hidden bg-entertainment-dark-blue lg:grid-cols-[160px_1fr]`}
        >
          <TrpcProvider>
            <Navbar />
            <div className='overflow-x-hidden'>{children}</div>
          </TrpcProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
