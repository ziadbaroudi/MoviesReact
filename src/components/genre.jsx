import React from "react";
import { NavDropdown } from "react-bootstrap";

const Genre = ({ genre }) => {
  return (
    <>
      {genre.genres &&
        genre.genres.map((gen) => {
          return (
            <NavDropdown.Item eventKey={gen.id}> {gen.name} </NavDropdown.Item>
          );
        })}
    </>
  );
};

export default Genre;
