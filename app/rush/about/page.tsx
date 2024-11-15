import { info } from "@/app/lib/data";
import Info from "@/app/ui/about/info";
import Image from "next/image";

export default function Page() {
  return (
    <main className="max-w-screen-lg p-4 gap-24 justify-center space-y-8 m-auto md:grid md:grid-cols-3 md:space-y-0">
      <div className="col-span-2 space-y-4">
        <h1 className="text-4xl font-bold">{info.name}</h1>
        <p className="text-darkGray whitespace-pre-line">{info.description}</p>
        <Image src="/rush/home-coffee.png" width={900} height={600} alt="Coffee Image" />
      </div>

      <Info />
    </main>
  );
}
