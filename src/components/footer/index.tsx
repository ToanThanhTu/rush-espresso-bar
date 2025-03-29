import Link from "next/link"
import { info } from "@/lib/data"
import { Instagram, Mail, Phone } from "lucide-react"
import Socials from "@/components/footer/socials"

export default function Footer() {
  return (
    <footer className={`w-full text-sm text-center bg-black text-secondary mt-24`}>
      <div className="h-4 bg-primary flex items-center justify-center" />
      <div className="h-40 flex flex-col gap-4 items-center justify-center">
        <article className="flex gap-4 px-6">
          <Socials href={`https://www.instagram.com/${info.instagramId}`} icon={<Instagram />} />
          <Socials href={`mailto:${info.email}`} icon={<Mail />} />
          <Socials href={`tel:${info.phone}`} icon={<Phone />} />
        </article>

        <article>
          <h2>Rush Espresso Bar</h2>

          <div>
            <p>162 Goulburn St</p>
            <p>Surry Hills, NSW 2010</p>
            <p>Australia</p>
          </div>
        </article>

        <article>
          <h2>Hours</h2>

          <div>
            <p>162 Goulburn St</p>
            <p>Surry Hills, NSW 2010</p>
            <p>Australia</p>
          </div>
        </article>

        <article>
          <h2>Menus</h2>

          <div>
            <p>162 Goulburn St</p>
            <p>Surry Hills, NSW 2010</p>
            <p>Australia</p>
          </div>
        </article>

        <p>Copyright by Rush Espresso Bar</p>
      </div>
    </footer>
  )
}
