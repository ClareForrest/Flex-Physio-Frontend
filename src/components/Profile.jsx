import { HeadingMain } from "../styled/main";
import { Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

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
    address && (
      <>
      <Profile />
        <Row>
          <HeadingMain>Your Address Details</HeadingMain>
        </Row>
        <Row>
          <Card className="login-card-size">
            <p>Street: {address.street}</p>
            <p>Suburb: {address.suburb}</p>
            <p>State: {address.state}</p>
            <p>Postcode: {address.postcode}</p>
            <p><Link to={"/update-address"}>Update your contact details</Link></p>
          </Card>
        </Row>
        
      </>
    )
  );
}

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  return (
    <>
    <Row>
          <HeadingMain>Your Contact Details</HeadingMain>
        </Row>
        <Row>
          <Card className="login-card-size">
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Email: {user.email}</p>
            <p>Phone number: {user.phone_number}</p>
            <p><Link to={"/update-profile"}>Update your contact details</Link></p>
          </Card>
    </Row>
    <AvailabilityButtons />
    </>
  )
}


function AvailabilityButtons() {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  
  

  return (
    <>
      <Link to={"/availabilities"}>See all availabilities</Link>
      <Link to={`/availability/${id}`}>See your individual availabilities</Link>
    </>
  )
}
