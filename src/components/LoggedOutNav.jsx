import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export function LoggedOutNav() {
  return (
    <BrowserRouter> 
    <nav>
      <Link to="/">Home</Link>   
      <Link to="/about">About</Link>   
      <Link to="/contact-us">Contact Us</Link>
      <Link to="/login">Login</Link>
    </nav>
    </BrowserRouter>
  );
}
