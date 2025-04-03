"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { links } from "@/lib/data"
import RushLogo from "@/components/logo"
import { cn } from "@/lib/utils"

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav
      className={cn(
        "max-w-screen-md mx-auto flex items-center justify-center gap-6 text-center font-semibold"
      )}
    >
      <Link
        href={links[0].href}
        className={cn(
          "h-12 basis-0 grow flex items-center justify-center",
          "hover:bg-primary hover:text-white",
          pathname === links[0].href ? "text-primary underline" : ""
        )}
      >
        <p>{links[0].name}</p>
      </Link>

      <Link
        href={links[1].href}
        className={cn(
          "h-12 basis-0 grow flex items-center justify-center",
          "hover:bg-primary hover:text-white",
          pathname === links[1].href ? "text-primary underline" : ""
        )}
      >
        <p>{links[1].name}</p>
      </Link>

      <Link href="/" className={cn("basis-0 grow")}>
        <RushLogo />
      </Link>

      <Link
        href={links[2].href}
        className={cn(
          "h-12 basis-0 grow flex items-center justify-center",
          "hover:bg-primary hover:text-white",
          pathname === links[2].href ? "text-primary underline" : ""
        )}
      >
        <p>{links[2].name}</p>
      </Link>

      <Link
        href={links[3].href}
        className={cn(
          "h-12 basis-0 grow flex items-center justify-center",
          "hover:bg-primary hover:text-white",
          pathname === links[3].href ? "text-primary underline" : ""
        )}
      >
        <p>{links[3].name}</p>
      </Link>
    </nav>
  )
}
