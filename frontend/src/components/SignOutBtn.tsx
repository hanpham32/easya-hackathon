import { useWallet } from "@suiet/wallet-kit"
import { signOut } from "next-auth/react";

export default function SignOutBtn() {
  const wallet = useWallet();

  const handleSignOut = async () => {
    wallet.disconnect();
    signOut();
  }

  return (
    <button onClick={handleSignOut}>
      Sign out
    </button>
  )
}
