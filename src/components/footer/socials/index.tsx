"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"

interface Props {
  href: string
  icon: JSX.Element
}

export default function Socials({ href, icon }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn("p-2 rounded-full bg-white text-black", "hover:text-white hover:bg-primary")}
    >
      {icon}
    </Link>
  )
}
