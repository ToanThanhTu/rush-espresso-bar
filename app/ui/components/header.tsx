import NavBackground from "@/app/ui/components/nav-background";
import NavBar from "@/app/ui/components/navbar";
import NavBarMobile from "@/app/ui/components/navbar-mobile";

export default function Header() {
  return (
    <div className="relative text-gray">
      <NavBackground />

      <div className="hidden md:block">
        <NavBar />
      </div>

      <div className="md:hidden block">
        <NavBarMobile />
      </div>
    </div>
  );
}
