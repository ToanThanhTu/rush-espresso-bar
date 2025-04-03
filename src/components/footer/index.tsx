import Link from "next/link"
import { info } from "@/lib/data"
import { Instagram, Mail, Phone } from "lucide-react"
import Socials from "@/components/footer/socials"
import { cn } from "@/lib/utils"
import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className="w-full text-sm text-center bg-black text-secondary mt-24 pb-12 flex flex-col gap-12"
    >
      <div className="h-2 bg-primary" />
      <div className={cn("flex flex-col gap-12 px-12", "xl:px-24")}>
        <article className="flex gap-4 mx-auto">
          <Socials href={`https://www.instagram.com/${info.instagramId}`} icon={<Instagram />} />
          <Socials href={`mailto:${info.email}`} icon={<Mail />} />
          <Socials href={`tel:${info.phone}`} icon={<Phone />} />
          <Socials href={info.ubereats} icon={
            <Image src="/ubereats.webp" alt="UberEats logo" width={500} height={500} className="h-10 w-10 rounded-full" />
          } className="p-0" />
          <Socials href={info.menulog} icon={
            <Image src="/menulog.svg" alt="Menulog logo" width={500} height={500} className="h-10 w-10 rounded-full" />
          } className="p-0" />
        </article>

        <div className={cn("flex flex-col gap-8", "md:flex-row md:justify-between")}>
          <article className="flex flex-col items-start gap-4">
            <h2 className="text-2xl">Rush Espresso Bar</h2>

            <div className="flex flex-col items-start">
              <p>162 Goulburn St</p>
              <p>Surry Hills, NSW 2010</p>
              <p>Australia</p>
            </div>

            <div className="flex flex-col items-start">
              <p>(+61) 421 916 354</p>
              <p>rush.espresso.syd@gmail.com</p>
            </div>
          </article>

          <article className="flex flex-col items-start gap-4">
            <h2 className="text-2xl">Hours</h2>

            <div className="flex flex-col items-start">
              <p>Monday - Friday</p>
              <p>6:30 am - 3:00 pm</p>
            </div>
          </article>

          <article className="flex flex-col items-start gap-4">
            <h2 className="text-2xl">Menus</h2>

            <ul className="flex flex-col items-start">
              <li>
                <Link href={"/menu/#food"} className="hover:underline">Food Menu</Link>
              </li>
              <li>
                <Link href={"/menu/#all-day-lunch"} className="hover:underline">All Day Lunch</Link>
              </li>
              <li>
                <Link href={"/menu/#beverage"} className="hover:underline">Beverage Menu</Link>
              </li>
            </ul>
          </article>
        </div>
      </div>

      <p className="text-xs">Copyright by Rush Espresso Bar</p>
    </footer>
  )
}
