"use client"

import { links } from "@/lib/data"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { motion } from "motion/react"

function SiteMenu() {
  return (
    <motion.nav
      className={cn(
        "flex items-center gap-4 text-light text-2xl font-semibold tracking-wider flex-col",
        "md:flex-row md:gap-8",
        "xl:gap-12"
      )}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="hover:text-muted hover:-translate-y-1 transition-transform duration-300">
          {link.name}
        </Link>
      ))}
    </motion.nav>
  )
}

export default SiteMenu
