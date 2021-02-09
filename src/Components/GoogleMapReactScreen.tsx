import googleMapReact from "google-map-react";
import React, { useEffect } from "react";
import GoogleMapReactComponent from "./GoogleMapReactComponent";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

const loc: googleMapReact.Coords = {
  lat: 37,
  lng: -122,
};

export default function GoogleMapReactScreen() {
  useEffect(() => {}, []);

  return (
    <div className="main">
      Google Map React Component
      <div>
        location={loc.lat}, {loc.lng}
        <GoogleMapReactComponent location={loc} zoomLevel={3}></GoogleMapReactComponent>
      </div>
    </div>
  );
}
