// necessary for clerk process
// The authMiddleware is being configured with two sets of routes: publicRoutes and ignoredRoutes.
// a. publicRoutes: are routes that should be accessible without authentication.
// b. ignoredRoutes: are routes that should be ignored by the authentication middleware.

import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
  publicRoutes: [
    '/',
    '/events/:id',
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    '/api/webhook/clerk',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 