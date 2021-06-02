import React from "react";
import MovieItem from "./MovieItem";

const MoviesGrid = ({ searched, popular, genreId }) => {
  let results = searched.results;
  let popularResults = popular.results;
  return (
    <ul
      style={{ listStyle: "none" }}
      className="d-flex flex-wrap justify-content-center">
      {results &&
        results.map((movie, i) => <MovieItem key={`${i}`} movie={movie} />)}
    </ul>
  );
};

export default MoviesGrid;
