"use client"

import { Button } from "@/components/shadcn/button"
import { cn } from "@/lib/utils"
import { ChevronUp } from "lucide-react"
import { useEffect, useState } from "react"

export default function ScrollTopButton() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Button
      onClick={() => window.scrollTo({ top: 0 })}
      className={cn(
        "fixed bottom-10 right-10 h-10 w-10 cursor-pointer rounded-full bg-primary text-secondary transition-opacity duration-300 ease-in-out z-50 opacity-0",
        "sm:bottom-20 sm:right-20",
        "xl:h-12 xl:w-12",
        scroll > 140 ? "opacity-100" : "opactity-0"
      )}
    >
      <ChevronUp />
    </Button>
  )
}
