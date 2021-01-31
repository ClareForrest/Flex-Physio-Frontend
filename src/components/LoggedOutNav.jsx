import React from "react";
import { useHistory, Link } from "react-router-dom";
import React, { Link, Nav } from "react";
import { BrowserRouter } from "react-router-dom";

export function LoggedOutNav() {
  return (
    <BrowserRouter> 
    <Nav>
      <Link to="/">Home</Link>   
      <Link to="/about">About</Link>   
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/login">Login</Link>
    </Nav>
    </BrowserRouter>
  );
}
