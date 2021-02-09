import { HeadingMain, HeadingContainer } from "../styled/main";
import { Card, Button, Col } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// This function gets the user "profile" in terms of their address information. It renders it for users.
export function GetProfile(props) {
  const [address, setAddress] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/addresses/${id}`)
      .then((res) => res.json())
      .then((address) => {
        setAddress(address);
      });
  }, [id]);
  return (
    <>
      <Profile address={address} />
      {address && (
        <>
          <Row>
            <HeadingContainer>
              <HeadingMain>Your Address Details</HeadingMain>
            </HeadingContainer>
          </Row>
          <Row>
            <Card className="login-card-size">
              <p>Street: {address.street}</p>
              <p>Suburb: {address.suburb}</p>
              <p>State: {address.state}</p>
              <p>Postcode: {address.postcode}</p>
              <Button variant="secondary" href="/update-address">
                Update
              </Button>
            </Card>
          </Row>
        </>
      )}
    </>
  );
}

// this profile function gets more profile information - this refers directly to user information such as their name.
function Profile(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  const isEmployee = localStorage.getItem("isEmployee");
  return (
    <>
      <Row>
        <HeadingContainer>
          <HeadingMain>Your Contact Details</HeadingMain>
        </HeadingContainer>
      </Row>
      <Row>
        <Card className="login-card-size">
          <p>First Name: {user.first_name}</p>
          <p>Last Name: {user.last_name}</p>
          <p>Email: {user.email}</p>
          <p>Phone number: {user.phone_number}</p>
          <Button variant="secondary" href="/update-profile">
            Update
          </Button>
          <br></br>
          {isEmployee === "true" && (
            <p>
              <AvailabilityButtons />
            </p>
          )}
          <Row>
            {!props.address && (
              <Row>
                <Button variant="secondary" href={"/create-address"}>Create Address</Button>
              </Row>
            )}
          </Row>
        </Card>
      </Row>

    </>
  );
}

function AvailabilityButtons() {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  return (
    <>
      <Row>
        <Col>
          <Button href="/availabilities">All Staff Availabilities</Button>
        </Col>
        <Col>
          <Button href={`/availability/${id}`}>View Your Availability</Button>
        </Col>
      </Row>
    </>
  );
}
