import React from "react";
import MoviesGrid from "./MoviesGrid";
const Main = ({ searched, popular, genreId }) => {
  return (
    <div style={{ marginBottom: "12%" }}>
      <MoviesGrid searched={searched} popular={popular} genreId={genreId} />
    </div>
  );
};
export default Main;
