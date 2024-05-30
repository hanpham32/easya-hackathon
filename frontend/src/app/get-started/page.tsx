import { ConnectButton } from "@rainbow-me/rainbowkit";
import GithubLogin from "@/components/GithubLogin";
import SuietConnectBtn from "@/components/SuietConnectBtn";

export default function GetStarted() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center h-52 w-[500px]">
        <div className="text-xl">
          Connect Your Wallet and Github
        </div>
        <SuietConnectBtn />
        <GithubLogin />
      </div>
    </div>
  )
}
