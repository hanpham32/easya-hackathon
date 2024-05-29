import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export default function Nav() {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        Web3 Workshop
      </div>
      <div className="flex items-center">
        <Link href="/workshop" className="mr-4">Workshops</Link>
        <Link href="/dashboard" className="mr-4">Dashboard</Link>
        <ConnectButton />
      </div>
    </div>
  )
}
