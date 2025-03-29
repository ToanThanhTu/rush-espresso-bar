import Image from "next/image"

export default function HeroBanner({ src }: { src: string }) {
  return (
    <section className="relative w-full h-screen">
      <Image
        src={src}
        alt="Hero Banner"
        width={3000}
        height={2000}
        className="object-cover h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50" />
      <article className="absolute inset-0 flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-white">Welcome to</h1>
        <h2 className="text-4xl font-bold text-white">Rush Espresso Bar</h2>
        <p className="mt-4 text-lg text-white text-center">Serving amazing coffee, tea and matcha.</p>
      </article>
    </section>
  )
}
