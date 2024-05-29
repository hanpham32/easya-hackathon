import Hero from "@/layout/Hero";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {
  return (
    <main className="">
      <div className="flex justify-end p-4">
        <ConnectButton />
      </div>
      <Hero />
    </main>
  );
}
