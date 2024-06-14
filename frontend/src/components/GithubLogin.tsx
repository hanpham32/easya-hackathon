"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function GithubLogin() {
  const { data: session } = useSession();
  if (session && session.user) {
    return (
      <div>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => signIn()}>Authenticate your Github</button>
    </div>
  );
}
