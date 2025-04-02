"use client"

import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";

function SiteMenu() {
  return (
    <nav
      className={cn("flex items-center gap-4 text-light text-2xl font-semibold tracking-wider flex-col", "md:flex-row md:gap-8", "xl:gap-12")}
    >
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="hover:text-muted">
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default SiteMenu;
