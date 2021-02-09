import { HeadingMain, HeadingContainer } from "../styled/main";
import { Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

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
              <Row><Link to={"/update-address"}>Update your contact details:</Link></Row>
            </Card>
          </Row>
        </>
      )
      }
    </>
  )
}

// this profile function gets more profile information - this refers directly to user information such as their name. 
function Profile(props) {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  const isEmployee = localStorage.getItem("isEmployee")
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
          <Row><Link to={"/update-profile"}>Update your contact details</Link></Row>
          <br></br>
          {isEmployee === "true" && <p><AvailabilityButtons /></p>}
        </Card>
      </Row>
      <Row>
        {!props.address && (
          <Row><Link to={"/create-address"}>Create Address</Link></Row>
        )}
      </Row>
    </>
  )
}


function AvailabilityButtons() {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  return (
    <>
      <Row><Link to={"/availabilities"}>See all availabilities</Link></Row>
      <br></br>
      <Row><Link to={`/availability/${id}`}>See your availability</Link></Row>
    </>
  )
}
