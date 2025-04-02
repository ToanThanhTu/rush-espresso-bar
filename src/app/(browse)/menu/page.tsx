import HeroBanner from "@/components/hero-banner"
import Menu from "@/components/menu"

export default function Page() {
  return (
    <div className="flex flex-col gap-12 items-center m-auto">
      <HeroBanner
        imageSrc="https://images.unsplash.com/photo-1480889856166-56e89b80386c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        pretitle="The"
        title="Menu"
        subtitle="Delicious food, amazing drinks"
      />

      <Menu />
    </div>
  )
}
