"use client"

import HeroBanner from "@/components/hero-banner"
import Info from "@/components/info"
import { info } from "@/lib/data"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Page() {
  return (
    <section className="max-w-screen-lg flex flex-col gap-20 m-auto">
      <HeroBanner src="/about/hero.webp" />

      <div className={cn("px-6 flex flex-col gap-20", "md:grid md:grid-cols-3 md:gap-24")}>
        <article className="col-span-2 space-y-4">
          <h1 className="text-4xl font-bold">{info.name}</h1>
          <p className="text-darkGray whitespace-pre-line">{info.description}</p>
          <Image src="/home.webp" width={900} height={600} alt="Coffee Image" />
        </article>

        <Info />
      </div>
    </section>
  )
}
