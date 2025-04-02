import SiteMenu from "@/components/header/nav/site-menu";
import RushLogo from "@/components/logo";
import { worksans } from "@/fonts";
import Image from "next/image";

function Home() {
  return (
    <main className="h-screen relative overflow-hidden flex flex-col justify-center items-center text-light">
      <Image
        src="/home.webp"
        width={3000}
        height={2000}
        className="contrast-75 h-full object-none"
        alt="Background Coffee Image"
      />

      <div className="absolute top-10 scale-125 z-50">
        <RushLogo />
      </div>

      <div className={`absolute top-1/3 md:top-1/2 flex flex-col items-center justify-center text-white gap-4 text-xl z-50`}>
        <p className="italic text-center px-16 md:pb-0 pb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod.</p>
        <SiteMenu />
      </div>

      <div className="fixed inset-0 bg-black opacity-60" />
    </main>
  );
}

export default Home;
