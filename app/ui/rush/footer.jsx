import Link from "next/link";
import { info } from "@/app/lib/data";
import { worksans } from "@/app/ui/fonts";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Footer() {
  return (
    <div
      className={`${worksans.className} antialiased w-full text-sm text-center`}
    >
      <div className="h-4 bg-footer-first text-dark flex items-center justify-center" />
      <div className="h-40 bg-footer-second text-gray flex flex-col gap-4 items-center justify-center">
        {/* icons here */}
        <div className="flex gap-4 px-6">
          <Link
            href={`https://instagram.com/${info.instagramId}`}
            target="_blank"
            className="hover:text-light"
          >
            <InstagramIcon />
          </Link>
          <Link
            href={`mailto:${info.email}`}
            target="_blank"
            className="hover:text-light"
          >
            <EmailIcon />
          </Link>
          <Link
            href={`tel:${info.phone}`}
            target="_blank"
            className="hover:text-light"
          >
            <PhoneIcon />
          </Link>
        </div>

        <p className="px-6">
          RUSH ESPRESSO BAR, 162 GOULBURN ST, SURRY HILLS NSW 2010
        </p>
      </div>
    </div>
  );
}
