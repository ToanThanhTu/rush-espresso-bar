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
    <Headroom className="fixed top-0 w-screen z-50">
      <header
        className={cn(
          "text-white z-40 transition-colors ease-in-out duration-300",
          scroll > 600 ? "bg-black" : "bg-transparent"
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
  )
}
