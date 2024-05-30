import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-200">
      <div className="text-center flex flex-col items-center">
        <div className="text-4xl mb-4">
          Workshops Hub
        </div>
        <div className="italic relative flex">
          On Workshops Hub, you don&apos;t just learn -- you build, deploy real projects, and mastering your craft with every
          <span className="relative ml-1">
            <span className="relative z-10 font-mono text-[#CB8DE2]"> push</span>
            <Image
              src="/git-icon.svg"
              alt="git-icon"
              className="absolute left-12 top-7 transform -translate-x-1/2 -translate-y-1/2 blur-[1px] z-0"
              width={25}
              height={25}
            />
          </span>
        </div>
        <Link href="/get-started" className="w-44 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Get Started</Link>
      </div>
    </div>
  )
}
