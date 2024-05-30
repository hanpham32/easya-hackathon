"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import { GithubLoginButton } from "react-social-login-buttons"

export default function GithubLogin() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div>
      <GithubLoginButton onClick={() => signIn()} />
    </div>
  )
}
