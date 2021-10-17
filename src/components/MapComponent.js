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
      lat:40.730610,
      lng:-73.935242
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
          lat={40.730610}
          lng={-73.935242}
          text="Alien Sighting"
        />
        <AnyReactComponent
          lat={12.6432}
          lng={25.3728}
          text="Alien Sighting"
        />

        <AnyReactComponent
          lat={15.12}
          lng={26.6256}
          text="Alien Sighting"
        />

      </GoogleMapReact>
    </div>
  );
}

