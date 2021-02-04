import 'bootstrap/dist/css/bootstrap.min.css';
import { SidePanel } from '../styled/main';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import logo from '../logo.png';
import { NavRouter } from './NavRouter';


export function Template(props) {
// conditional rendering of login/logout as well as bookings and profile in nav bar
// const authorisation = user_signedIn? (authorisation = "Sign Out") : (authorisation = "Log In")
// const view = user_signedIn? (view = "") : (view = "disabled")

  return(
    <Container>
      <Row>
        <Col xs={3}>
          <SidePanel class="position-sticky">
            <Image src={logo} alt="Logo" rounded fluid/>
            <Card className="quote-size">
              {/* Want to use an API to get changing quotes */}
              <p> 
                "An apple a day, keeps the doctor away" 
              </p>
            </Card>
          </SidePanel>
        </Col>
        <Col>
        <NavRouter>
          {props.children}
        </NavRouter>
        </Col>
      </Row>
    </Container>
  )
}