"use client";

import { worksans } from "@/app/ui/fonts";
import RushLogo from "@/app/ui/rush-logo";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { links } from "@/app/lib/data";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavBarMobile() {
  const [displayNavMenu, setDisplayNavMenu] = useState(false);
  const pathname = usePathname();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (displayNavMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [displayNavMenu]);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`absolute top-0 flex justify-center w-full text-center ${worksans.className} font-medium`}
    >
      <button
        onClick={() => setDisplayNavMenu(!displayNavMenu)}
        className={`top-0 left-0 m-4 text-light z-50 ${
          scroll > 100 ? "fixed bg-dark rounded" : "absolute"
        }`}
      >
        {displayNavMenu && <CloseIcon fontSize="large" />}
        {!displayNavMenu && <MenuIcon fontSize="large" />}
      </button>

      <Link href="/" className="scale-75">
        <RushLogo />
      </Link>

      <nav
        className={`fixed flex flex-col items-center justify-center bg-black text-darkGray h-screen w-screen font-semibold text-2xl gap-4 transition-opacity duration-300 ${
          displayNavMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
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
  );
}
