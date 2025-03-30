import HeroBanner from "@/components/hero-banner"
import Menu from "@/components/menu"

export default function Page() {
  return (
    <div className="flex flex-col gap-12 items-center max-w-screen-lg m-auto">
      <HeroBanner imageSrc="https://images.unsplash.com/photo-1480889856166-56e89b80386c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
        <h1 className="text-2xl font-bold text-white">The</h1>
        <h2 className="text-4xl font-bold text-white">Menu</h2>
        <p className="mt-4 text-lg text-white text-center">
          Delicious food, amazing drinks
        </p>
      </HeroBanner>

      <Menu />
    </div>
  )
}
