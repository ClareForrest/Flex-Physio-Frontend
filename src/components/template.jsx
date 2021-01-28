import 'bootstrap/dist/css/bootstrap.min.css';
import { SidePanel } from '../styled/main';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../logo.png';
import '../styled/style.css';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React, { useState } from 'react';

function NavDropdownExample() {
  const [disabled, setDisabled] = useState(true) 
  /*use useEffect that checks if the user is logged in*/
  const authorisation = "Sign Out" /*remove this and put in correct term in line above*/
  const view = "disabled"
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`); /*move this to a separate function and change to direct to links correctly*/

  return (
  <Nav activeKey="1" onSelect={handleSelect} justify>
  <Nav.Item>
    <Nav.Link eventKey="1" href="/">
      Home
    </Nav.Link>
  </Nav.Item>
  <NavDropdown title="About" id="nav-dropdown">
    <NavDropdown.Item eventKey="2.1">Physio Practitioners</NavDropdown.Item>
    <NavDropdown.Item eventKey="2.2">Massage Therapists</NavDropdown.Item>
    <NavDropdown.Item eventKey="2.3">Admin Staff</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title="Services" id="nav-dropdown">
    <NavDropdown.Item eventKey="3.1">Physiotherapy</NavDropdown.Item>
    <NavDropdown.Item eventKey="3.2">Massage</NavDropdown.Item>
    <NavDropdown.Item eventKey="3.3">Consult Fees</NavDropdown.Item>
  </NavDropdown>
  <NavDropdown title="Bookings" id="nav-dropdown" disabled={disabled}>
    <NavDropdown.Item eventKey="4.1">Make a Booking</NavDropdown.Item>
    <NavDropdown.Item eventKey="4.2">View Current Bookings</NavDropdown.Item>
    <NavDropdown.Item eventKey="4.3">View Previous Bookings</NavDropdown.Item>
  </NavDropdown>
  <Nav.Item>
  <Nav.Link eventKey="5" title="Contact Us">
    Contact Us
  </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="6" title="Profile" disabled={disabled}>
      Profile
    </Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="7" title="authorisation">
      {authorisation}
    </Nav.Link>
  </Nav.Item>
  </Nav>
  );
}


export function Template(props) {
// conditional rendering of login/logout as well as bookings and profile in nav bar
// const authorisation = user_signedIn? (authorisation = "Sign Out") : (authorisation = "Log In")
// const view = user_signedIn? (view = "") : (view = "disabled")

  return(
    <Container>
      <Row>
        <Col xs={3}>
          <SidePanel class="position-sticky">
            <img src={logo} alt="Logo"/>
            <Card>
              <p>Health Quote: "An apple a day, keeps the doctor away" </p>
            </Card>
          </SidePanel>
        </Col>
        <Col>
          <NavDropdownExample/>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}