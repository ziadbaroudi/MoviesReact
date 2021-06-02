import { Button, Row, Col, Form, FormControl } from "react-bootstrap";
import React, { useState } from "react";

const Searchbar = ({ handleQuery }) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        handleQuery(searchTerm);
      }}>
      <Row>
        <Col xs={5} md={8} className="ml-3 px-0">
          <FormControl
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            type="text"
            placeholder="Search"
            className="mr-sm-2"
          />
        </Col>
        <Col className="pl-sm-5 pl-md-0 ml-0 ">
          <Button value="submit" variant="outline-info" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Searchbar;
