"use client"

import NavBar from "@/components/header/nav/navbar"
import NavBarMobile from "@/components/header/nav/navbar-mobile"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import Headroom from "react-headroom"

export default function Header() {
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
    <div className="absolute w-full top-0 z-50">
      <Headroom>
        <header
          className={cn(
            "bg-transparent text-white transition-colors ease-in-out duration-300 py-2",
            scroll > 800 ? "bg-secondary text-foreground shadow-md" : ""
          )}
        >
          <div className="hidden md:block">
            <NavBar />
          </div>

          <div className="md:hidden block">
            <NavBarMobile />
          </div>
        </header>
      </Headroom>
    </div>
  )
}
