<<<<<<< HEAD
import React from "react";
import { useHistory, Link } from "react-router-dom";


export function LoggedOutNavbar() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
=======
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
>>>>>>> 6cfa8229e2b32a67b1dd9225c114f4c3009e9a63
  );
}
