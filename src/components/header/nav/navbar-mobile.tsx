"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import RushLogo from "@/components/logo"
import { links } from "@/lib/data"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function NavBarMobile() {
  const [displayNavMenu, setDisplayNavMenu] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (displayNavMenu) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [displayNavMenu])

  return (
    <div className="flex justify-center w-full text-center font-medium">
      <button
        onClick={() => setDisplayNavMenu(!displayNavMenu)}
        className="fixed top-2 left-0 m-4 text-light z-50"
      >
        {displayNavMenu && <X color="white" />}
        {!displayNavMenu && <Menu />}
      </button>

      <Link href="/" className="scale-75">
        <RushLogo />
      </Link>

      <nav
        className={cn(
          "fixed inset-0 flex flex-col items-center justify-center bg-black text-white h-screen w-screen font-semibold text-2xl gap-4 transition-opacity duration-300",
          displayNavMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx({
              "text-light": pathname === link.href,
            })}
            onClick={() => setDisplayNavMenu(false)}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}
