"use client"

import ContactForm from "@/components/contact-form"
import HeroBanner from "@/components/hero-banner"
import { info } from "@/lib/data"
import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Page() {
  return (
    <main className="flex flex-col justify-center gap-12">
      <HeroBanner imageSrc="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <h2 className="text-4xl font-bold text-white">Contact Us</h2>
      </HeroBanner>

      <div className={cn("flex flex-col gap-8 px-4", "md:grid md:grid-cols-3 md:gap-x-20")}>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>
            E-mail us at{" "}
            <Link href={`mailto:${info.email}`} target="_blank" className="underline">
              {info.email}
            </Link>
          </li>
          <li>
            Follow us on Instagram{" "}
            <Link
              href={`https://instagram.com/${info.instagramId}`}
              target="_blank"
              className="underline hover:opacity-80"
            >
              @{info.instagramId}
            </Link>
          </li>
          <li>
            Give us a call{" "}
            <Link href={`tel:${info.phone}`} target="_blank" className="underline">
              {info.phone}
            </Link>
          </li>
          <li>Say hello</li>
          <li>Give us feedback</li>
          <li>Ask us a question</li>
        </ul>

        <ContactForm />
      </div>
    </main>
  )
}
