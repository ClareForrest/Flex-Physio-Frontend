import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";

// this contains logic for "protected" routes so only authenticated/authorised users can access certain URLs. 
// Also contains logic for storing user information as an object in local storage per line 21 and 22 to then use as the means to render information dynamically for different users.
export const ProtectedRoute = ({ exact, path, component }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuthStatus() {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/status`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.status >= 400) {
          throw new Error("not authorized");
        } else {
          const { user, is_employee } = await response.json();
          localStorage.setItem("user", JSON.stringify(user));
          localStorage.setItem("isEmployee", is_employee)
          setAuth(true);
          setLoading(false);
        }
      } catch (err) {
        console.log(err.message);
        setLoading(false);
      }
    }
    checkAuthStatus();
  }, []);

  if (!loading && !auth) {
    return <Redirect to="/login" />;
  } else {
    return (
      !loading && (
        <Route exact={exact} path={path} component={component} />
    )
  )}
};