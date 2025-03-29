"use client"

import NavBar from "@/components/header/nav/navbar"
import NavBarMobile from "@/components/header/nav/navbar-mobile"
import Headroom from "react-headroom"

export default function Header() {
  return (
    <Headroom>
      <div className="relative text-white">
        <div className="hidden md:block">
          <NavBar />
        </div>

        <div className="md:hidden block">
          <NavBarMobile />
        </div>
      </div>
    </Headroom>
  )
}
