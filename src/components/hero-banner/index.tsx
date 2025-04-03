"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { motion } from "motion/react"
import { PropsWithChildren } from "react"

interface Props {
  imageSrc: string
  pretitle?: string
  title: string
  subtitle?: string
}

export default function HeroBanner({
  imageSrc,
  pretitle,
  title,
  subtitle,
  children,
}: PropsWithChildren<Props>) {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={imageSrc}
        alt="Hero Banner"
        width={3000}
        height={2000}
        className="object-cover h-full w-full absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-black opacity-70 z-10" />

      <article className="h-full relative flex flex-col items-center justify-center px-4 z-20">
        <motion.h2
          className={cn("text-2xl font-bold text-white", "md:text-3xl", "lg:text-4xl")}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {pretitle}
        </motion.h2>
        <motion.h1
          className={cn("text-4xl font-bold text-white", "md:text-5xl", "lg:text-6xl")}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className={cn("mt-4 text-lg text-white text-center", "md:text-xl", "lg:text-2xl")}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {children}
        </motion.div>
      </article>
    </section>
  )
}
