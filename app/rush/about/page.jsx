import { info } from "@/app/lib/data";

export default function Page() {
  return (
    <main className="w-1/2 m-auto grid grid-cols-3 gap-28 justify-center items-center">
      <div className="col-span-2 space-y-4">
        <h1 className="text-4xl font-bold">{info.name}</h1>
        <p className="text-darkGray">{info.description}</p>
      </div>

      <div className="space-y-12">
        <div className="space-y-4">
          <h2>PHONE</h2>
          <p className="text-darkGray">{info.phone}</p>
        </div>

        <div className="space-y-4">
          <h2>LOCATION</h2>
          <p className="text-darkGray">{info.address}</p>
        </div>

        <div className="space-y-4">
          <h2>HOURS</h2>
          <div>
            <p className="text-darkGray">{info.hours}</p>
            <p className="text-darkGray font-medium">Monday - Friday</p>
          </div>
        </div>
      </div>
    </main>
  );
}
