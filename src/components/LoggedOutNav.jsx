import React from "react";
import { useHistory, Link } from "react-router-dom";


export function LoggedOutNavbar() {
  return (
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/sign-up">Sign Up</Link>
    </nav>
  );
}
