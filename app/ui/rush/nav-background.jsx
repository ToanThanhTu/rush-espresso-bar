"use client";

import useWindowDimensions from "@/app/lib/utils";
import Image from "next/image";

export default function NavBackground() {
  const { height, width } = useWindowDimensions();

  const imgWidth = width / 2;
  const imgHeight = imgWidth / 2; // images aspect ratio is 2:1

  return (
    <div className="grid grid-cols-2 gap-4 min-w-[900px] contrast-75">
      <div className="col-span-1 h-[250px] overflow-hidden">
        <Image
          src="/home/nav-background-coffee.png"
          alt="coffee image"
          width={imgWidth}
          height={imgHeight}
          className="object-cover w-full"
        />
      </div>

      <div className="col-span-1 h-[250px] overflow-hidden">
        <Image
          src="/home/nav-background-latte.png"
          alt="food image"
          width={imgWidth}
          height={imgHeight}
          className="object-cover rotate-180"
        />
      </div>

      <div className="col-span-1 h-[250px] overflow-hidden">
        <Image
          src="/home/nav-background-food.png"
          alt="latte image"
          width={imgWidth}
          height={imgHeight}
          className="object-cover"
        />
      </div>

      <div className="col-span-1 h-[250px] overflow-hidden">
        <Image
          src="/home/nav-background-pizza.png"
          alt="pizza image"
          width={imgWidth}
          height={imgHeight}
          className="object-cover"
        />
      </div>
    </div>
  );
}
