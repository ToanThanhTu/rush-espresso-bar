import HeroBanner from "@/components/hero-banner"
import Home from "@/components/home"

export default function Page() {
  return (
    <section className="flex flex-col gap-20 m-auto">
      <HeroBanner
        imageSrc="/about/hero.webp"
        pretitle="Welcome to"
        title="Rush Espresso Bar"
        subtitle="Serving amazing coffee, tea and matcha."
      />

      <Home />
    </section>
  )
}
