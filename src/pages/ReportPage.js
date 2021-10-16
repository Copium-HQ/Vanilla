import React from 'react';
import {Button, TextField } from "@material-ui/core";

const ReportPage = () => {
  return (
    <div className='report'>

        <header> Report a Sighting </header>

        <form class="report-form">
            <TextField id="nameInput" label="Name"></TextField>
            <br/>
            <TextField id="locationInput" label="Location"></TextField>
            <br/>
            <TextField id="idInput" label="Identification"></TextField>
            <br/>
            <TextField multiline id="descriptionInput" label="Description"></TextField>
        </form>

        <Button variant="outline" id="submitButton" onClick={ (event) => {} }>submit</Button>

    </div>
  );
};

export default ReportPage;

