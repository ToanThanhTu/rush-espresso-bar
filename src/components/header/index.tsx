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
    <Headroom>
      <header
        className={cn(
          "bg-black text-white transition-colors ease-in-out duration-300"
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
