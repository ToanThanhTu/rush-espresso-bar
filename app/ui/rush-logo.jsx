import { worksans } from "@/app/ui/fonts";
import Image from "next/image";

export default function RushLogo() {
  return (
    <div
      className={`${worksans.className} flex flex-col items-center w-max text-light tracking-wider`}
    >
      <Image
        src="/rush-logo.png"
        alt="Rush logo"
        width={100}
        height={100}
        priority
      />
      <p className="text-xl font-normal text-shadow shadow-primary-foreground">
        RUSH ESPRESSO BAR
      </p>
    </div>
  );
}
