import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
const Main = ({ showSpinner, searched }) => {
  {
    console.log(searched);
  }

  return (
    <div style={{ marginBottom: "12%" }}>
      {showSpinner && (
        <Spinner
          style={{ textAlign: "center", marginTop: "25%", marginLeft: "50%" }}
          id="spinner"
          showSpinner={showSpinner}
          animation="grow"
          variant="info"
        />
      )}

      <MoviesGrid />
    </div>
  );
};
export default Main;
