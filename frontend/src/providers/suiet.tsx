"use client"
import { WalletProvider } from "@suiet/wallet-kit"
import React from "react"

export default function SuietWalletProvider({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider>
      {children}
    </WalletProvider>
  );
}
