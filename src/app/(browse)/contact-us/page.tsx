"use client"

import ContactForm from "@/components/contact-form"
import GoogleMapComponent from "@/components/google-maps"
import HeroBanner from "@/components/hero-banner"
import Information from "@/components/home/information"
import { info } from "@/lib/data"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "motion/react"

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center gap-12">
      <HeroBanner
        imageSrc="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Contact Us"
      />

      <div className={cn("flex flex-col gap-8 px-4", "md:w-5/6 md:max-w-screen-md")}>
        <motion.ul
          className="list-disc text-muted-foreground border p-4 pl-10 rounded-xl"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
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
        </motion.ul>

        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={cn("w-full h-1 bg-muted")} />
          <span>or</span>
          <div className={cn("w-full h-1 bg-muted")} />
        </motion.div>

        <ContactForm />
      </div>

      <Information />
      <GoogleMapComponent />
    </main>
  )
}
