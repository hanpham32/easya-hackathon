import { on } from 'events';
import React from 'react';
import Image from 'next/image';

const Catalog = () => {

  // ToDo: Fetch posts from API
  const posts = [
    {
      title: "Introduction to Web3 Development",
      desc: "Learn the basics of Web3, including blockchain, smart contracts, and decentralized applications (dApps).",
      img: "https://cdn.starknet.quest/ekubo/concentration.webp",
      authorLogo: "https://randomuser.me/api/portraits/men/45.jpg",
      authorName: "Alex Johnson",
      date: "May 29 2024",
      href: "#"
    },
    {
      title: "Smart Contract Development with Solidity",
      desc: "Dive deep into Solidity programming and learn how to write, test, and deploy smart contracts on Ethereum.",
      img: "https://cdn.starknet.quest/starknet/aa.webp",
      authorLogo: "https://randomuser.me/api/portraits/women/44.jpg",
      authorName: "Samantha Lee",
      date: "May 29 2024",
      href: "#"
    },
    {
      title: "Building dApps with React and Web3.js",
      desc: "Learn how to create decentralized applications (dApps) using React and Web3.js to interact with Ethereum.",
      img: "https://cdn.starknet.quest/starknet/gigabrain.webp",
      authorLogo: "https://randomuser.me/api/portraits/men/47.jpg",
      authorName: "John Smith",
      date: "May 29 2024",
      href: "#"
    },
    {
      title: "Advanced Topics in Web3 Security",
      desc: "Explore advanced security concepts in Web3, including best practices for smart contract security and auditing.",
      img: "https://cdn.starknet.quest/starknetid/nft1.webp",
      authorLogo: "https://randomuser.me/api/portraits/women/45.jpg",
      authorName: "Emma Brown",
      date: "May 29 2024",
      href: "#"
    }
  ]

  return (
    <section className="mt-12 mx-auto px-4 py-4 max-w-screen-xl md:px-8 bg-[#F5F5F5]">
      <div className="text-center">
        <h1 className="text-3xl text-[#080D0B] font-semibold">
          Explore Our Web3 Courses
        </h1>
        <p className="mt-3 text-[#080D0B]">
          Welcome to our catalog of Web3 courses and workshops! Here, you&apos;ll find a carefully curated selection of learning opportunities for all levels, from beginners to advanced practitioners. Our courses cover everything from the fundamentals of Web3 to advanced smart contract development and blockchain security.
        </p>
      </div>
      <div className="mt-12 grid gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {
          posts.map((items, key) => (
            <article className="max-w-md mx-auto mt-4 shadow-lg border border-[#CB8DE2] rounded-md duration-300 transform hover:shadow-2xl hover:scale-105 bg-[#F6F9F8] transition-transform" key={key}>
              <a href={items.href}>
                <Image src={items.img} loading="lazy" alt={items.title} className="rounded-t-md" width={500} height={300} />
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2 mb-2">
                  <div className="flex-none w-10 h-10 rounded-full">
                    <Image src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} width={40} height={40} />
                  </div>
                  <div className="ml-3">
                    <span className="block text-[#080D0B] font-bold">{items.authorName}</span>
                    <span className="block text-[#B67FB8] text-sm">{items.date}</span>
                  </div>
                </div>
                <hr />
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-[#080D0B]">
                    {items.title}
                  </h3>
                  <p className="text-[#080D0B] text-sm mt-1">{items.desc}</p>
                </div>
              </a>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Catalog;
