import { type FC, type ReactNode } from 'react'
import { outfit } from './_ui/fonts'
import './globals.css'
import Navbar from './_ui/components/Navbar'
import { ClerkProvider } from '@clerk/nextjs'
import { TrpcProvider } from '@/lib/server/trpc-provider'

const meta = {
  favicon: '/favicon.ico',
  title: 'Mango Entertainment',
  description: 'Generated by the best coders who eat mangoes',
  url: 'https://mango-entertainment.vercel.app',
  type: 'website',
  image: 'https://mango-entertainment.vercel.app/mango-logo.png',
  creator: 'Steve Smodish & Alex Curtis-Slep',
}

export const metadata = {
  description: meta.description,
  title: meta.title,
  // url: meta.url,
  // keyword: 'nextjs, reactjs, tailwind, trpc, javascript, typescript, tmdb, shadcn',
  // locale: 'en_US',
  // type: 'website',
  twitter: {
    card: 'summary_large_image',
    domain: 'mango-entertainment.vercel.app',
    url: meta.url,
    title: meta.title,
    description: meta.description,
    image: { src: meta.image },
  },
  openGraph: {
    url: meta.url,
    type: 'website',
    title: meta.title,
    description: meta.description,
    image: meta.image,
  },
}

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${outfit.className} overflow-x-hidden bg-entertainment-dark-blue p-0`}
        >
          <TrpcProvider>
            <div
              className={`h-min-screen grid w-screen grid-cols-1 items-start lg:grid-cols-[120px_1fr]`}
            >
              <Navbar />
              {children}
            </div>
          </TrpcProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
