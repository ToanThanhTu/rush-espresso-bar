"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { worksans } from "@/fonts";
import { links } from "@/lib/data";
import RushLogo from "@/components/logo";

export default function NavBar() {
  const pathname = usePathname();

  const navLinkStyle = "flex items-center justify-center p-5 hover:text-light";

  return (
    <nav
      className={`absolute top-0 w-full flex items-center justify-center text-center ${worksans.className} font-medium`}
    >
      <div className="flex justify-start w-64 gap-4">
        <Link
          href={links[0].href}
          className={clsx(navLinkStyle, {
            "text-light": pathname === links[0].href,
          })}
        >
          <p>{links[0].name}</p>
        </Link>
        <Link
          href={links[1].href}
          className={clsx(navLinkStyle, {
            "text-light": pathname === links[1].href,
          })}
        >
          <p>{links[1].name}</p>
        </Link>
      </div>

      <Link href="/">
        <RushLogo />
      </Link>

      <div className="flex justify-end w-64 gap-4">
        <Link
          href={links[2].href}
          className={clsx(navLinkStyle, {
            "text-light": pathname === links[2].href,
          })}
        >
          <p>{links[2].name}</p>
        </Link>
        <Link
          href={links[3].href}
          className={clsx(navLinkStyle, {
            "text-light": pathname === links[3].href,
          })}
        >
          <p>{links[3].name}</p>
        </Link>
      </div>
    </nav>
  );
}
