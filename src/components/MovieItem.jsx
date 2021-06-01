import React from "react";

const MovieItem = ({ movie }) => {
  console.log(movie);
  let poster_path = movie.poster_path;
  console.log("working");

  console.log(poster_path);
  console.log(movie);

  return (
    <li>
      {console.log("working")}
      {/* <img src={poster_path} /> */}
      <p>{movie.title}</p>
    </li>
  );
};

export default MovieItem;
