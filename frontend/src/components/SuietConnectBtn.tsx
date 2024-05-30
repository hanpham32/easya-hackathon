"use client"
import { ConnectButton, WalletProvider } from "@suiet/wallet-kit";

export default function SuietConnectBtn() {
  return (
    <WalletProvider>
      <ConnectButton />
    </WalletProvider>
  )
}
