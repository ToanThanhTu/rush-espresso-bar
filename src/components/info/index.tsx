"use client"

import GoogleMapComponent from "@/components/google-maps"
import { info } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Clock, MapPin, Phone } from "lucide-react"

export default function Info() {
  return (
    <section className={cn("flex flex-col gap-12")}>
      <article className="flex flex-col justify-center items-center gap-4">
        <Clock size={32} color="var(--primary)" />
        <div>
          <p className="text-black font-medium text-center">Monday - Friday</p>
          <p className="text-black text-center">{info.hours}</p>
        </div>
      </article>

      <article className="flex flex-col justify-center items-center gap-4">
        <Phone size={32} color="var(--primary)" />
        <p className="text-black">{info.phone}</p>
      </article>

      <article className="flex flex-col justify-center items-center gap-4">
        <MapPin size={32} color="var(--primary)" />
        <p className="text-black">{info.address}</p>
      </article>

      <GoogleMapComponent />
    </section>
  )
}
