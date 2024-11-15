"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function NavBackground() {
  const pathname = usePathname();
  
  const imageStyle = "animate-fadein object-cover col-span-1 overflow-hidden contrast-75 w-full"

  if (pathname === '/rush/menu') {
    return (
      <Image
          src="/rush/nav-background-coffee.png"
          alt="coffee image"
          width={1000}
          height={500}
          className={`${imageStyle} h-[300px]`}
        />
    )
  };

  if (pathname === '/rush/contact-us') {
    return (
      <Image
          src="/rush/nav-background-latte.png"
          alt="coffee image"
          width={1000}
          height={500}
          className={`${imageStyle} h-[300px]`}
        />
    )
  };

  if (pathname === '/rush/jobs') {
    return (
      <Image
          src="/rush/nav-background-food.png"
          alt="coffee image"
          width={1000}
          height={500}
          className={`${imageStyle} h-[400px]`}
        />
    )
  };

  return (
    <div className="grid grid-cols-2 md:gap-4 gap-2">
        <Image
          src="/rush/nav-background-coffee.png"
          alt="coffee image"
          width={1000}
          height={500}
          className={`${imageStyle} md:h-[250px]`}
        />

        <Image
          src="/rush/nav-background-latte.png"
          alt="food image"
          width={1000}
          height={500}
          className={`${imageStyle} md:h-[250px]`}
        />

        <Image
          src="/rush/nav-background-food.png"
          alt="latte image"
          width={1000}
          height={500}
          className={`${imageStyle} md:h-[250px]`}
        />

        <Image
          src="/rush/nav-background-pizza.png"
          alt="pizza image"
          width={1000}
          height={500}
          className={`${imageStyle} md:h-[250px]`}
        />
    </div>
  );
}
