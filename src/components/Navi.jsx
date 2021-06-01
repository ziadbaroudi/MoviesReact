import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import React from "react";
import SearchBar from "./Searchbar";

const Navi = ({ setShowSpinner, handleQuery, fetchGenre, genre }) => {
  console.log(genre);
  return (
    <Navbar bg="dark" className="px-0">
      <Container fluid className="mx-0 px-0">
        <Navbar.Brand
          className=" px-3 mx-0 text-white font-weight-bolder"
          href="#">
          Movies
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link className="text-white font-size-4" href="#">
            Home
          </Nav.Link>
          <NavDropdown
            onClick={() => fetchGenre()}
            title="Genre"
            id="collasible-nav-dropdown">
            {/* {genre.map((genres) => (
              <NavDropdown.Menu.Item href="#">{genres}</NavDropdown.Menu.Item>
            ))} */}
          </NavDropdown>
        </Nav>
        <SearchBar setShowSpinner={setShowSpinner} handleQuery={handleQuery} />
      </Container>
    </Navbar>
  );
};

export default Navi;
