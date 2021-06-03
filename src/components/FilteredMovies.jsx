import React from "react";

const FilteredMovies = ({ popular }) => {
  return (
    <div>
      <p>
        {popular.results &&
          popular.results.map((el) => <li>{el.original_title}</li>)}
      </p>
    </div>
  );
};

export default FilteredMovies;
