import { info } from "@/app/lib/data";
import GoogleMapComponent from "@/app/ui/components/google-map";

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

      <GoogleMapComponent />
    </div>
  );
}
