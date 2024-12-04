
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers:[Github, Google],
pages: {
    signIn:"/sign-in",
},
secret: process.env.NEXTAUTH_SECRET as string
})