import { worksans } from "@/app/ui/fonts";
import Image from "next/image";

export default function RushLogo() {
  return (
    <div
      className={`${worksans.className} flex flex-col items-center leading-none w-max text-light tracking-wider`}
    >
      <Image src="/rush-logo.png" alt="Rush logo" width={100} height={100} />
      <p className="text-xl font-normal">RUSH ESPRESSO BAR</p>
    </div>
  );
}
