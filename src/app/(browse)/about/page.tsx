"use client"

import HeroBanner from "@/components/hero-banner"
import Home from "@/components/home"

export default function Page() {
  return (
    <section className="max-w-screen-lg flex flex-col gap-20 m-auto">
      <HeroBanner imageSrc="/about/hero.webp">
        <h1 className="text-2xl font-bold text-white">Welcome to</h1>
        <h2 className="text-4xl font-bold text-white">Rush Espresso Bar</h2>
        <p className="mt-4 text-lg text-white text-center">
          Serving amazing coffee, tea and matcha.
        </p>
      </HeroBanner>
      <Home />
    </section>
  )
}
