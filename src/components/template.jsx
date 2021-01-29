import 'bootstrap/dist/css/bootstrap.min.css';
import { SidePanel } from '../styled/main';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../logo.png';
import { NavRouter } from './router';


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
              {/* Want to use an API to get changing quotes */}
              <p>Health Quote: "An apple a day, keeps the doctor away" </p>
            </Card>
          </SidePanel>
        </Col>
        <Col>
          <NavRouter/>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}