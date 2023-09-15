import React from "react";
import GoogleMapReact from "google-map-react";
import Image from "next/image";

const AnyReactComponent = ({ text }: { text: String }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: -7.2828689,
      lng: 112.7563404,
    },
    zoom: 10,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}
