import { info } from "@/app/lib/data";

import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Info() {
  return (
    <div className="space-y-12 h-full">
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

      <GoogleMapsEmbed
        apiKey={process.env.MAPS_API_KEY}
        mode="place"
        q="162+Goulburn+St,Surry+Hills+NSW+2010"
        width={"100%"}
        height={500}
      />
    </div>
  );
}
