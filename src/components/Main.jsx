import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import MoviesGrid from "./MoviesGrid";
const Main = ({ showSpinner, searched }) => {
  return (
    <div style={{ marginBottom: "12%" }}>
      {/* {showSpinner && (
        <Spinner
          style={{ textAlign: "center", marginTop: "25%", marginLeft: "50%" }}
          id="spinner"
          showSpinner={showSpinner}
          animation="grow"
          variant="info"
        />
      )} */}

      <MoviesGrid searched={searched} />
    </div>
  );
};
export default Main;
