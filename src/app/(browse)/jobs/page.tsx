"use client"

import HeroBanner from "@/components/hero-banner"
import { info } from "@/lib/data"
import { motion } from "motion/react"

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-24">
      <HeroBanner
        imageSrc="https://images.unsplash.com/photo-1531441802565-2948024f1b22?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Work With Us"
      />

      <motion.div
        className="space-y-2 max-w-screen-sm mx-4 p-4 border rounded-xl"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-darkGray">{info.jobs}</p>
        <p className="font-semibold">{info.email}</p>
      </motion.div>
    </div>
  )
}
