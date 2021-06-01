import React from "react";
import MovieItem from "./MovieItem";

const MoviesGrid = (searched) => {
  let results = searched.searched.results;
  return (
    <ul
      style={{ listStyle: "none" }}
      className="d-flex flex-wrap justify-content-center">
      {results && results.map((movie) => <MovieItem movie={movie} />)}
    </ul>
  );
};

export default MoviesGrid;
