"use client"

import GoogleMapComponent from "@/components/google-maps"
import About from "@/components/home/about"
import Events from "@/components/home/events"
import Gallery from "@/components/home/gallery"
import Information from "@/components/home/information"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className={cn("flex flex-col gap-20")}>
      <About />
      <Events />
      <Gallery />
      <Information />
      <GoogleMapComponent />
    </div>
  )
}
