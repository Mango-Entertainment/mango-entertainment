import {
  clerkMiddleware,
  createRouteMatcher,
} from '@clerk/nextjs/server'
// import { type NextRequest, NextResponse } from 'next/server'
import { NextResponse } from 'next/server'

 
// const allowedOrigins = ['http://localhost:3000', 'https://mango-entertainment.vercel.app/']
 
// const corsOptions = {
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'Access-Control-Allow-Headers': 'Content-Type, Authorization',
// }
 
// export function middleware(request: NextRequest) {
//   // Check the origin from the request
//   const origin = request.headers.get('origin') ?? ''
//   const isAllowedOrigin = allowedOrigins.includes(origin)
 
//   // Handle preflighted requests
//   const isPreflight = request.method === 'OPTIONS'
 
//   if (isPreflight) {
//     const preflightHeaders = {
//       ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
//       ...corsOptions,
//     }
//     return NextResponse.json({}, { headers: preflightHeaders })
//   }
 
//   // Handle simple requests
//   const response = NextResponse.next()
 
//   if (isAllowedOrigin) {
//     response.headers.set('Access-Control-Allow-Origin', origin)
//   }
 
//   Object.entries(corsOptions).forEach(([key, value]) => {
//     response.headers.set(key, value)
//   })
 
//   return response
// }

const isPublicRoute = createRouteMatcher(['/', '/api/(.*)', '/sign-in', '/sign-up', '/logo.svg', '/password-reset'])
// const isProtectedRoute = createRouteMatcher([
//   '/movies(.*)',
//   '/series(.*)',
//   '/bookmarks',
// ])
const isApiRoute = createRouteMatcher(['/api/(.*)'])


// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default clerkMiddleware((auth, req) => {
  if (isApiRoute(req)) return NextResponse.next()

  const { userId, redirectToSignIn, protect } = auth()
  const isPublic = isPublicRoute(req)

  if (!userId && !isPublic) redirectToSignIn()
  if (!isPublic) protect()

  return NextResponse.next()

  
  // afterAuth(auth, req, evt) {
  //   // Handle users who aren't authenticated
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     return redirectToSignIn({ returnBackUrl: req.url })
  //   } 
  //   // If the user is signed in and trying to access a protected route, allow them to access route
  //   if (auth.userId && !auth.isPublicRoute) {
  //     return NextResponse.next()
  //   }
  //   // Allow users visiting public routes to access them
  //   return NextResponse.next()
  // },
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
