"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useWallet } from "@suiet/wallet-kit";
import SignOutBtn from "./SignOutBtn";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const wallet = useWallet();
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center px-[24em] p-4">
      <div className="flex items-center">
        <Image
          src="/frog.png"
          alt="Logo"
          className="mr-2"
          width={64}
          height={64}
        />
        <span className="text-xl font-bold">Web3 Workshop</span>
        <Link href="/">
          <span className="ml-12 px-4 py-2 hover:bg-gray-200 hover:rounded-full transition-all duration-200">
            Home
          </span>
        </Link>
        <Link href="/workshops">
          <span className="mr-4 px-4 py-2 hover:bg-gray-200 hover:rounded-full transition-all llduration-200">
            Workshops
          </span>
        </Link>
      </div>
      <div className="flex items-center">
        {wallet.connected && session ? (
          <div className="flex items-center">
            <Link href="/dashboard">
              <span className="mr-4 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200">
                Dashboard
              </span>
            </Link>
            <SignOutBtn />
          </div>
        ) : (
          <Button variant="outline">Log In</Button>
        )}
      </div>
    </div>
  );
}
