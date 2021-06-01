import React from "react";
import MovieItem from "./MovieItem";

const MoviesGrid = (searched) => {
  let results = searched.searched.results;
  console.log(results);

  return (
    <ul>{results && results.map((movie) => <MovieItem movie={movie} />)}</ul>
  );
};

export default MoviesGrid;
