import React from 'react';
import { Map } from '../components/MapComponent';
import '../App.css'
const MapPage = () => {
  return (
    <div className='map'>
      <header className="mapHeader">Alien Sightings</header>
      <Map></Map>
    </div>
  );
};

export default MapPage;
