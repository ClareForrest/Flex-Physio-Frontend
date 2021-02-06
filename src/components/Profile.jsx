import { HeadingMain } from "../styled/main";
import Modal from "react-bootstrap/Modal";
import { Card, Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import React, { useState, useEffect } from "react";

function GetProfile(props) {
  const [address, setAddress] = useState(null);
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  // check where and how this is pulling through. currently returnign undefined.
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
          <HeadingMain>Your Current Address</HeadingMain>
        </Row>
        <Row>
          <Card className="login-card-size">
            <ul>
              <li>{address.street}</li>
              <li>{address.suburb}</li>
              <li>{address.state}</li>
              <li>{address.postcode}</li>
            </ul>
            <Button
              variant="secondary"
              type="button"
              onClick={MyVerticallyCenteredModal}
            >
              Edit
            </Button>
          </Card>
        </Row>
      </>
    )
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your contact/address details (change this with state)
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Need the edit form to show up here (again, change with state)</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function Profile() {
  const [modalShow, setModalShow] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <Row>
        <HeadingMain>Your Contact Details:</HeadingMain>
      </Row>
      <h6>First Name: {user.first_name}</h6>
      <h6>Last Name: {user.last_name}</h6>
      <h6>Current Email: {user.email}</h6>
      <h6>Current contact number: {user.phone_number}</h6>
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        Edit
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <Row>
        <HeadingMain>Your Address Details:</HeadingMain>
        <GetProfile></GetProfile>
      </Row>
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        Edit
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
