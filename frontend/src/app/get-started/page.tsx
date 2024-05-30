"use client"
import GithubLogin from "@/components/GithubLogin";
import SuietConnectBtn from "@/components/SuietConnectBtn";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useWallet } from "@suiet/wallet-kit";
import { useSession } from "next-auth/react";

export default function GetStarted() {
  const router = useRouter()
  const wallet = useWallet()
  const { data: session, status } = useSession()

  useEffect(() => {
    if (wallet.connected && status === "authenticated") {
      router.push('/dashboard');
    }
  }, [wallet.connected, status, router]);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-52 w-[500px]">
        <div className="text-xl">
          Connect Your Wallet and Github. You will be automatically redirected to dashboard when authenticated
        </div>
        <SuietConnectBtn />
        <GithubLogin />
      </div>
    </div>
  )
}
