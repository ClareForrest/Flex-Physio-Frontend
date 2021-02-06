import { HeadingMain } from "../styled/main";
import Modal from "react-bootstrap/Modal";
import { Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import React, { useState, useEffect } from "react";
import { UpdateProfile } from "./UpdateProfile";

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
        <Row>
          <HeadingMain>Your Contact Details</HeadingMain>
        </Row>
        <Row>
          <Card className="login-card-size">
            <p>First Name: {user.first_name}</p>
            <p>Last Name: {user.last_name}</p>
            <p>Email: {user.email}</p>
            <p>Phone number: {user.phone_number}</p>
          </Card>
        </Row>
        <Row>
          <HeadingMain>Your Address Details</HeadingMain>
        </Row>
        <Row>
          <Card className="login-card-size">
            <p>Street: {address.street}</p>
            <p>Suburb: {address.suburb}</p>
            <p>State: {address.state}</p>
            <p>Postcode: {address.postcode}</p>
            <Button variant="secondary" type="button" onClick={UpdateProfile}>
              Edit
            </Button>
          </Card>
        </Row>
      </>
    )
  );
}



// export function Profile() {
//   const [modalShow, setModalShow] = useState(false);
//   const user = JSON.parse(localStorage.getItem("user"));
//   return (
//     <>
//       <Row>
//         <HeadingMain>Your Contact Details:</HeadingMain>
//       </Row>
//       <h6>First Name: {user.first_name}</h6>
//       <h6>Last Name: {user.last_name}</h6>
//       <h6>Current Email: {user.email}</h6>
//       <h6>Current contact number: {user.phone_number}</h6>
//       {/* <Button variant="secondary" onClick={() => setModalShow(true)}>
//         Edit
//       </Button>
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       /> */}
//       <Row>
//         <HeadingMain>Your Address Details:</HeadingMain>
//         <GetProfile></GetProfile>
//       </Row>
//       {/* <Button variant="secondary" onClick={() => setModalShow(true)}>
//         Edit
//       </Button>
//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       /> */}
//     </>
//   );
// }
