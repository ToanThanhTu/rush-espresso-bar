"use client"

import { cn } from "@/lib/utils"
import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollTopButton() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
      console.log("scroll:", scroll)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className={cn(
        "fixed bottom-10 right-10 p-2 rounded-full bg-black text-white",
        "sm:bottom-20 sm:right-20",
        scroll > 100 ? "opacity-100" : "opactity-0",
        "transition-opacity duration-300 ease-in-out",
        "z-50",
      )}
    >
      <ChevronUp />
    </button>
  )
}
