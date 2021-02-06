import React, { Link, Nav }  from "react";
import { BrowserRouter } from "react-router-dom";


export function LoggedInNav() {
  return (
    <BrowserRouter>
      <Nav>
        <Link to="/">Home</Link>   
        <Link to="/about">About</Link>   
        <Link to="/services">Services</Link>
        <Link to="/bookings">Bookings</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/contact-us">Contact Us</Link>
        <Link to="/login">Sign Out</Link>
        <Link to="/availability">Add to your availabilties</Link>
      </Nav>
    </BrowserRouter>
  );
}
