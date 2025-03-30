import { worksans } from "@/fonts";
import { info } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function About() {
  return (
    <article className="flex flex-col items-center justify-center gap-6 px-6">
      <h1 className="text-3xl uppercase tracking-wider font-semibold">About us</h1>
      <pre className={cn(worksans.className, "antialiased text-muted-foreground text-center text-sm text-wrap")}>{info.about}</pre>
      <Image src="/home.webp" width={900} height={600} alt="Coffee Image" />
    </article>
  )
}
