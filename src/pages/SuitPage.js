import React from 'react';
import "./SuitPage.css";

const Suits = () => {
  return (
    <div className='suits'>
        <h1> C.O.P.I.U.M SUIT </h1>
            <p>The latest in science and technology </p>

        <br></br>

            <h2>Constricted</h2>
            <h2>Overlaying</h2>
            <h2>Polymer</h2>
            <h2>Insulated</h2>
            <h2>Unified</h2>
            <h2>Membrane</h2>

        <br></br>

            <p>All suits are well equipped to overcome combat and cosmic damages</p>

        <br></br>
        
        <h1> Alien Detection Rover </h1>

        <br></br>
        <p>This rover has been designed to use machine learning to detect extra terrestrial life forms</p>
        <p>The rover scans the enviroment with a purpose of interacting with the aliens without direct human interaction</p>
        <p>Rover will send back all information via wireless means to avoid contamination risks</p>

        <br></br>

        <img className="imageRover"/>

        <br></br>

    </div>
  );
};

export default Suits;
