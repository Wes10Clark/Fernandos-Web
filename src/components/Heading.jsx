import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

const Heading = () => {
  return (
    <div>
      <Navbar
        className="d-flex justify-content-between px-3 pb-3 pt-3"
        bg="dark"
        expand="lg"
      >
        <Navbar.Brand style={{ color: "white" }} as={Link} to="/">
          Fernando's
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Link className="link" to="/">
              Madison
            </Link>
            <Link className="link" to="/Pearl">
              Pearl
            </Link>
            <Link className="link" to="/Reservoir">
              Reservoir
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Heading;
