import { info } from "@/app/lib/data";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="font-bold text-3xl">Jobs at Rush Espresso Bar</h1>

      <div className="space-y-2 w-[500px]">
        <p className="text-darkGray">{info.jobs}</p>
        <p className="font-semibold">{info.email}</p>
      </div>
    </div>
  );
}
