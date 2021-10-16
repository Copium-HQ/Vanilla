import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function Map() {
    return (
        <SimpleMap></SimpleMap>
    );
}

function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div style={{ height: '75%', width: '75%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBNww2HXKiz2pO9vyXqZryWS8Xkid27NJA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}

