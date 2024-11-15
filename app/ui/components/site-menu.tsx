import Link from "next/link";

import { links } from "@/app/lib/data";
import { worksans } from "@/app/ui/fonts";

function SiteMenu() {
  return (
    <nav
      className={`${worksans.className} antialiased flex gap-8 text-light text-2xl font-semibold tracking-wider flex-col md:flex-row items-center`}
    >
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="hover:text-gray">
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default SiteMenu;
