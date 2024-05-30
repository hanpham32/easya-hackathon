"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useWallet } from "@suiet/wallet-kit";
import SignOutBtn from "./SignOutBtn";

export default function Nav() {
  const wallet = useWallet();
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        Web3 Workshop
      </div>
      <div className="flex items-center">
        <Link href="/" className="mr-4">Home</Link>
        <Link href="/workshops" className="mr-4">Workshops</Link>
        {
          (wallet.connected && session) ? (
            <div className="flex">
              <Link href="/dashboard" className="mr-4">Dashboard</Link>
              <SignOutBtn />
            </div>
          ) : null
        }
      </div>
    </div>
  )
}
