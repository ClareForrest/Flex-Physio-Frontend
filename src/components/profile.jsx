import { HeadingMain } from '../styled/main';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import React, {useState} from 'react';

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
        <p>
          Need the edit form to show up here (again, change with state)
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function Profile() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Row>
        <HeadingMain>Your Contact Details:</HeadingMain>
      </Row>
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        Edit
      </Button>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
      <Row>
        <HeadingMain>Your Address Details:</HeadingMain>
      </Row>
      <Button variant="secondary" onClick={() => setModalShow(true)}>
        Edit
      </Button>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}