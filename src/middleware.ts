import { withAuth } from "next-auth/middleware"

export default withAuth({
  // Matches the pages config in `[...nextauth]`
  pages: {
    signIn: '/admin/login',
    error: '/api/auth/error',
  },
})

export const config = {
  matcher: ["/admin/:path*"],
}
