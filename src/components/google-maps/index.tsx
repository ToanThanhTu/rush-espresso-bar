"use client"

import { AdvancedMarker, APIProvider, Map } from "@vis.gl/react-google-maps"
import { motion } from "motion/react"

const containerStyle = {
  width: "100%",
  height: "500px",
}

function GoogleMapComponent() {
  const location = {
    lat: -33.87864640643062,
    lng: 151.21220783009906,
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      <APIProvider apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY || ""}>
        <Map defaultCenter={location} defaultZoom={17} mapId="RUSH_LOCATION" style={containerStyle}>
          <AdvancedMarker position={location} />
        </Map>
      </APIProvider>
    </motion.div>
  )
}

export default GoogleMapComponent
