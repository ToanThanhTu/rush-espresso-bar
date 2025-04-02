"use client"

import { worksans } from "@/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function RushLogo() {
  return (
    <div
      className="flex items-center justify-center"
    >
      <Image
        src="/rush-logo.png"
        alt="Rush logo"
        width={100}
        height={100}
        className={cn("h-20 w-20", "md:h-22 md:w-22", "lg:h-24 lg:w-24")}
      />
    </div>
  );
}
