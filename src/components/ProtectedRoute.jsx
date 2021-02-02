import React, { useState, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { HeadingMain } from '../styled/main';
import Button from 'react-bootstrap/Button';

export function ProtectedRoute({ exact, path, component }) {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuthStatus() {
      try {
        const response = await fetch("http://localhost:3000/api/status", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.status >= 400) {
          throw new Error("not authorized");
        } else {
          const { user } = await response.json();
          localStorage.setItem("user", JSON.stringify(user));
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
        <>
        <Route exact={exact} path={path} component={component} />
        <Row>
          <HeadingMain>What would you like to do?</HeadingMain>
        </Row>
        <Row> 
          <Col>
          <div class="set-size">
            <Button variant="secondary" size="lg">Make a Booking</Button>
          </div>
          </Col>
          <Col>
          <div class="set-size">
            <Button variant="secondary" size="lg">View Current Booking</Button>
          </div>
          </Col>
        </Row>
        <Row> 
          <Col>
          <div class="set-size">
            <Button variant="secondary" size="lg">View Previous Bookings</Button>
          </div>
          </Col>
          <Col>
          <div class="set-size">
            <Button variant="secondary" size="lg">View/Edit Profile</Button>
          </div>
          </Col>
        </Row>
        </>
    )
  )}
};