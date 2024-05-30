"use client"
import GithubProvider from "next-auth/providers/github"
import NextAuth from "next-auth/next"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "github-id",
      clientSecret: process.env.GITHUB_SECRET || "github-secret",
    }),
  ],
}
export default NextAuth(authOptions)
