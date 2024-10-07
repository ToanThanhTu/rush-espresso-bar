"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import RushLogo from "../rush-logo";

const links = [
  { name: "HOME", href: "/", order: 'order-1' },
  { name: "MENU", href: "/menu", order: 'order-2' },
  { name: "CONTACT US", href: "/contact-us", order: 'order-4' },
  { name: "JOBS", href: "/jobs", order: 'order-5' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-row items-center justify-center gap-x-8">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(`flex h-full items-center justify-center ${link.order} p-5 hover:text-primary-foreground`, {
            "border-2 border-primary-foreground text-primary-foreground": pathname === link.href,
          })}
        >
          <p>{link.name}</p>
        </Link>
      ))}
      <Link href="/" className="order-3">
        <div>
          <RushLogo />
        </div>
      </Link>
    </nav>
  );
}
