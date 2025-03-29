import ContactForm from "@/components/contact-form";
import { info } from "@/lib/data";
import Link from "next/link";

export default function Page() {
  return (
    <main className="m-auto w-fit space-y-6 px-6">
      <h1 className="text-3xl font-bold">Contact Us</h1>

      <div className="md:grid md:grid-cols-3 md:gap-x-20 md:space-y-0 m-auto space-y-6">
        <ul className="list-disc list-inside text-darkGray space-y-2 underline-offset-4">
          <li>
            E-mail us at{" "}
            <Link
              href={`mailto:${info.email}`}
              target="_blank"
              className="hover:underline"
            >
              {info.email}
            </Link>
          </li>
          <li>
            Follow us on Instagram{" "}
            <Link
              href={`https://instagram.com/${info.instagramId}`}
              target="_blank"
              className="hover:underline"
            >
              @{info.instagramId}
            </Link>
          </li>
          <li>
            Give us a call{" "}
            <Link
              href={`tel:${info.phone}`}
              target="_blank"
              className="hover:underline"
            >
              {info.phone}
            </Link>
          </li>
          <li>Say hello</li>
          <li>Give us feedback</li>
          <li>Ask us a question</li>
        </ul>

        <ContactForm />
      </div>
    </main>
  );
}
