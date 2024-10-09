import { info } from "@/app/lib/data";
import Info from "@/app/ui/about/info";
import Image from "next/image";

export default function Page() {
  return (
    <main className="w-1/2 m-auto grid grid-cols-3 gap-28 justify-center">
      <div className="col-span-2 space-y-4">
        <h1 className="text-4xl font-bold">{info.name}</h1>
        <p className="text-darkGray whitespace-pre-line">{info.description}</p>
        <Image src="/rush/home-coffee.png" width={900} height={600} />
      </div>

      <Info />
    </main>
  );
}
