import Image from "next/image"
import { PropsWithChildren } from "react"

interface Props {
  imageSrc: string
}

export default function HeroBanner({ imageSrc, children }: PropsWithChildren<Props>) {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={imageSrc}
        alt="Hero Banner"
        width={3000}
        height={2000}
        className="object-cover h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <article className="absolute inset-0 flex flex-col items-center justify-center px-4">
        {children}
      </article>
    </section>
  )
}
