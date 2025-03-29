import { info } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <article className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl uppercase tracking-wider font-semibold">About us</h1>
      <p className="text-muted-foreground text-center text-sm">{info.about}</p>
      <Image src="/home.webp" width={900} height={600} alt="Coffee Image" />
    </article>
  )
}
