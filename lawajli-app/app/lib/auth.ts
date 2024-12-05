
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import Twitter from "next-auth/providers/twitter"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prismadb"


export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers:[Github, Google, Twitter],
    pages: {
        signIn:"/sign-in",
    },
  secret: process.env.NEXTAUTH_SECRET as string
})