"use client"

import HeroBanner from "@/components/hero-banner"
import Home from "@/components/home"

export default function Page() {
  return (
    <section className="max-w-screen-lg flex flex-col gap-20 m-auto">
      <HeroBanner src="/about/hero.webp" />
      <Home />
    </section>
  )
}
