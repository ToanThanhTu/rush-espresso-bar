import NavBackground from "@/app/ui/rush/nav-background";
import NavBar from "@/app/ui/rush/navbar";

export default function Header() {
  return (
    <div className="relative text-gray">
      <NavBackground />
      <NavBar />
    </div>
  )
}