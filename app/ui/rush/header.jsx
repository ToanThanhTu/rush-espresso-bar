import NavBackground from "@/app/ui/rush/nav-background";
import NavBar from "@/app/ui/rush/navbar";
import NavBarMobile from "@/app/ui/rush/navbar-mobile";

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
