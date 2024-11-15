"use client";

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps";

const containerStyle = {
  width: "100%",
  height: "500px",
};

function GoogleMapComponent() {
  const location = {
    lat: -33.87864640643062,
    lng: 151.21220783009906,
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY || ""}>
      <Map defaultCenter={location} defaultZoom={17} mapId="RUSH_LOCATION" style={containerStyle}>
        <AdvancedMarker position={location} />
      </Map>
    </APIProvider>
  );
}

export default GoogleMapComponent;
