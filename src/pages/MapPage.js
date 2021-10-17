import React from 'react';
import { Map } from '../components/MapComponent';
import '../App.css'
import { AlertBox } from '../components/AlertBox';
//import WarningIcon from '@mui/icons-material/Warning';
const MapPage = () => {
  return (
    <div>
      <div className="map">
        <header className="mapHeader">Alien Sightings</header>
        <Map></Map>
      </div>

      <br/>
      <div className="alertBox">
        <AlertBox></AlertBox>
      </div>
    </div>
  );
};

export default MapPage;
