import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default function Layout(props) {
  return (
    <>
      <div
        className="container-fluid"
        style={{ minheight: "100vh", margin: "0px", marginBottom: "80px" }}
      >
        {props.children}
      </div>

      <Navbar bg="dark" variant="dark" fixed="bottom" expand="lg">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Dashboard">Dasboard</NavLink>
          <NavLink to="/Signin">Signin</NavLink>
          <NavLink to="/Signup">Signup</NavLink>
        </Nav>
      </Navbar>
    </>
  );
}
