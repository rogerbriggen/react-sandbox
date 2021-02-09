import { useEffect } from "react";
import GoogleMapReact from "google-map-react";
//import './map.css'

interface IGMRProps {
  location: GoogleMapReact.Coords;
  zoomLevel: number;
}

export default function GoogleMapReactComponent({ location, zoomLevel }: IGMRProps) {
  useEffect(() => {}, []);

  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact bootstrapURLKeys={{ key: "123456789" }} defaultCenter={location} defaultZoom={zoomLevel}>
          {/*<LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
                  />
          */}
        </GoogleMapReact>
      </div>
    </div>
  );
}
