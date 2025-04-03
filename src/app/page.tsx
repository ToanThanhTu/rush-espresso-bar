"use client"

import SiteMenu from "@/components/header/nav/site-menu"
import RushLogo from "@/components/logo"
import Image from "next/image"
import { motion } from "motion/react"

function Home() {
  return (
    <main className="h-screen relative overflow-hidden flex flex-col justify-center items-center text-light">
      <Image
        src="/home.webp"
        width={3000}
        height={2000}
        className="h-full object-cover"
        alt="Background Coffee Image"
      />

      <motion.div
        className="absolute top-10 scale-125 z-50"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <RushLogo />
      </motion.div>

      <div
        className={`absolute top-1/3 md:top-1/2 flex flex-col items-center justify-center text-white gap-4 text-xl z-50`}
      >
        <motion.p
          className="italic text-center px-16 md:pb-0 pb-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod.
        </motion.p>
        <SiteMenu />
      </div>

      <div className="fixed inset-0 bg-black opacity-60" />
    </main>
  )
}

export default Home
