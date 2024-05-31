"use client"
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useWallet } from "@suiet/wallet-kit";
import SignOutBtn from "./SignOutBtn";

export default function Nav() {
  const wallet = useWallet();
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
      <div className="flex items-center">
        <img src="./frog.png" alt="Logo" className="mr-2 w-16 h-16" />
        <span className="text-xl font-bold">Web3 Workshop</span>
      </div>
      <div className="flex items-center">
        <Link href="/">
          <span className="mr-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">Home</span>
        </Link>
        <Link href="/workshops">
          <span className="mr-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">Workshops</span>
        </Link>
        {
          (wallet.connected && session) ? (
            <div className="flex items-center">
              <Link href="/dashboard">
                <span className="mr-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">Dashboard</span>
              </Link>
              <SignOutBtn />
            </div>
          ) : null
        }
      </div>
    </div>
  )
}
