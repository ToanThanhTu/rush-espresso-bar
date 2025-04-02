"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

interface Props {
  imageSrc: string
  pretitle?: string
  title: string
  subtitle?: string
}

export default function HeroBanner({ imageSrc, pretitle, title, subtitle }: Props) {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={imageSrc}
        alt="Hero Banner"
        width={3000}
        height={2000}
        className="object-cover h-full w-full"
      />
      <div className="absolute inset-0 bg-black opacity-60" />
      <article className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h2 className={cn("text-2xl font-bold text-white", "md:text-3xl", "lg:text-4xl")}>{pretitle}</h2>
        <h1 className={cn("text-4xl font-bold text-white", "md:text-5xl", "lg:text-6xl")}>{title}</h1>
        <p className={cn("mt-4 text-lg text-white text-center", "md:text-xl", "lg:text-2xl")}>{subtitle}</p>
      </article>
    </section>
  )
}
