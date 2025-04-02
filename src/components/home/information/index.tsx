import { info } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Clock, MapPin, Phone } from "lucide-react"

export default function Information() {
  return (
    <section className={cn("flex flex-col justify-center items-center gap-12")}>
      <h2 className="text-3xl font-semibold uppercase tracking-wider">Come enjoy us!</h2>

      <div className={cn("flex flex-col justify-center items-center gap-12", "md:flex-row")}>
        <article className="flex flex-col justify-center items-center gap-4 basis-0 grow">
          <Clock size={32} color="var(--primary)" />
          <div>
            <p className="text-black font-medium text-center">Monday - Friday</p>
            <p className="text-black text-center">{info.hours}</p>
          </div>
        </article>

        <article className="flex flex-col justify-center items-center gap-4 basis-0 grow">
          <Phone size={32} color="var(--primary)" />
          <p className="text-black">{info.phone}</p>
        </article>

        <article className="flex flex-col justify-center items-center gap-4 basis-0 grow">
          <MapPin size={32} color="var(--primary)" />
          <p className="text-black text-center">{info.address}</p>
        </article>
      </div>
    </section>
  )
}
