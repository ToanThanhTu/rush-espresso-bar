"use client"

import HeroBanner from "@/components/hero-banner"
import Menu from "@/components/menu"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"

export default function Page() {
  return (
    <div className="flex flex-col gap-12 items-center m-auto">
      <HeroBanner
        imageSrc="https://images.unsplash.com/photo-1480889856166-56e89b80386c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        pretitle="The"
        title="Menu"
        subtitle="Delicious food, amazing drinks"
      >
        <div className="flex gap-4">
          <Link
            href="https://www.ubereats.com/au/store/rush-espresso/nPPLsNGLW6Cc-xfF4tQD-Q?ps=1"
            target="_blank"
            className={cn(
              "p-3 rounded-xl bg-ubereats text-ubereats-foreground font-medium flex items-start gap-1",
              "hover:bg-ubereats-foreground hover:text-ubereats"
            )}
          >
            UberEats
            <ArrowUpRight size={16} />
          </Link>

          <Link
            href="https://www.menulog.com.au/restaurants-rush-espresso-bar-surry-hills/"
            target="_blank"
            className={cn(
              "p-3 rounded-xl bg-menulog text-menulog-foreground font-medium flex items-start gap-1",
              "hover:bg-menulog-foreground hover:text-menulog"
            )}
          >
            Menulog
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </HeroBanner>

      <Suspense>
        <Menu />
      </Suspense>
    </div>
  )
}
