import { worksans } from "@/app/ui/fonts";
import RushLogo from "@/app/ui/rush-logo";
import SiteMenu from "@/app/ui/rush/site-menu";
import Image from "next/image";

function Home() {
  return (
    <main className="h-screen relative overflow-hidden flex flex-col justify-center items-center text-light">
      <Image
        src="/rush/home-coffee.png"
        width={3000}
        height={2000}
        className="contrast-75 h-full object-none"
        alt="Background Coffee Image"
        priority
      />

      <div className="absolute top-10 scale-125">
        <RushLogo />
      </div>

      <div className={`absolute top-1/3 md:top-1/2 flex flex-col items-center justify-center gap-4 ${worksans.className} antialiased text-xl`}>
        <p className="italic text-center px-16 md:pb-0 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod.</p>
        <SiteMenu />
      </div>
    </main>
  );
}

export default Home;
