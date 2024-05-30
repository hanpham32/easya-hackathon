import Link from "next/link"

export default function Hero() {
  return (
    <div className="h-screen flex justify-center items-center bg-slate-200">
      <div className="text-center">
        <div className="text-4xl mb-4">
          Workshops Hub
        </div>
        <Link href="/get-started" className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Get Started</Link>
      </div>
    </div>
  )
}
