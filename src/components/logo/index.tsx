import { worksans } from "@/fonts";
import { cn } from "@/lib/utils";
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
        className={cn("h-20 w-20", "md:h-24 md:w-24")}
      />
    </div>
  );
}
