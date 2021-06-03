import React from "react";
import FilteredMovies from "./FilteredMovies";
import MoviesGrid from "./MoviesGrid";
const Main = ({ searched, popular, genreId }) => {
  return (
    <div style={{ marginBottom: "12%" }}>
      <MoviesGrid searched={searched} popular={popular} genreId={genreId} />

      <FilteredMovies popular={popular} genreId={genreId} />
    </div>
  );
};
export default Main;
