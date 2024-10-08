import { worksans } from "@/app/ui/fonts";

export default function Footer() {
  return (
    <div className={`${worksans.className} antialiased w-full`}>
      <div className="h-4 bg-footer-first text-dark flex items-center justify-center" />
      <div className="h-40 bg-footer-second text-gray flex flex-col gap-4 items-center justify-center">
        {/* icons here */}
        <div>icons</div>

        <p>
          RUSH ESPRESSO BAR, 162 GOULBURN ST, SURRY HILLS NSW 2010 | (+61) 421 916
          354
        </p>
      </div>
    </div>
  );
}
