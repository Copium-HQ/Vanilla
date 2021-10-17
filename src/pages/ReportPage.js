import React from "react";
import ReactDOM from "react-dom";
import {Button, TextField } from "@material-ui/core";

const ReportPage = () => {
  return (
    <div className="report">

        <header> Report a Sighting </header>

        <form className="reportFormStyle">
            <TextField  margin="normal" variant="outlined" required="required" id="nameInput" label="Name"></TextField>

            <br/>
            <TextField  margin="normal" variant="outlined" helperText={"Location of sighting"} required="required" id="locationInput" label="Location"></TextField>
            <br/>
            <TextField  margin="normal" variant="outlined" helperText={"Form of identification is required"} required="required" id="idInput" label="Identification"></TextField>

            <br/>
            <DescriptionField/>

            <br/>
            <Button variant="contained" component="label" onClick={ (event) => { } }>Upload File<input id="upload-input" type="file" hidden onChange=""></input></Button>

            <br/>
            <Button variant="contained" id="submitButton" onClick={ (event) => { onClickSubmitReportButton() } }>submit</Button>

        </form>

    </div>
  );
};


function onClickSubmitReportButton(event) {
  let nameText = document.getElementById("nameInput").value;
  let locationText = document.getElementById("locationInput").value;
  let descriptionText = document.getElementById("descriptionInput").value;

  alert("Report form submitted")
}

function onClickUploadFile() {
}


function DescriptionField() {
    const CHARACTER_LIMIT = 1500;
    const [values, setValues] = React.useState({
      name: ""
    });
  
    const handleChange = name => event => {
      setValues({ ...values, [name]: event.target.value });
    };
    return (
      <div className="Description">
        <TextField
          label="Description"
          inputProps={{
            maxlength: CHARACTER_LIMIT
          }}
          multiline
          value={values.name}
          className="descriptionText"
          helperText={`${values.name.length}/${CHARACTER_LIMIT}`}
          onChange={handleChange("name")}
          margin="normal"
          variant="outlined"
        />
      </div>
    );
}

export default ReportPage;

