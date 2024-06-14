import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex">
        <div className="flex-none space-y-5 max-w-xl">
          <h1 className="text-4xl text-gray-800 font-extrabold sm:text-5xl">
            Workshops Hub
          </h1>
          <p>
            On Workshops Hub, you don&apos;t just learn -- you build, deploy
            real projects, and mastering your craft with every push
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            <a
              href="/get-started"
              className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
            >
              Get started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex-1 hidden md:block">
          {/* Replace with your image */}
          <Image
            src="./hero-bg.svg"
            className="max-w-xl"
            color="red"
            alt="hero-bg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

// return (
//   <div className="h-screen flex justify-center items-center bg-slate-200">
//     <div className="text-center flex flex-col items-center">
//       <div className="text-4xl mb-4">
//         Workshops Hub
//       </div>
//       <div className="italic relative flex">
//         On Workshops Hub, you don&apos;t just learn -- you build, deploy real projects, and mastering your craft with every
//         <span className="relative ml-1">
//           <span className="relative z-10 font-mono text-[#CB8DE2]"> push</span>
//           <Image
//             src="/git-icon.svg"
//             alt="git-icon"
//             className="absolute left-12 top-7 transform -translate-x-1/2 -translate-y-1/2 blur-[1px] z-0"
//             width={25}
//             height={25}
//           />
//         </span>
//       </div>
//       <Link href="/get-started" className="w-44 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Get Started</Link>
//     </div>
//   </div>
// )
