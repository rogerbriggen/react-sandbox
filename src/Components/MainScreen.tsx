import { useEffect } from "react";
import logo from "../logo.svg";

export default function GoogleMapsAPI() {
  useEffect(() => {}, []);

  return (
    <div className="main">
      <p>React Sandbox by Roger Briggen</p>
      <div>Currently there is just a Google Maps API</div>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}
