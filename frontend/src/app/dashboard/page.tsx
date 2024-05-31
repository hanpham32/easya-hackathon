"use client"
import { useWallet } from "@suiet/wallet-kit"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const wallet = useWallet();
  const { status } = useSession();
  const router = useRouter()

  useEffect(() => {
    if (!wallet.connected && status === "unauthenticated") {
      console.log("redirecting back to /")
      router.push('/')
    }
  }, [wallet.connected, status, router])

  return (
    <section>
    </section>
  )
}
