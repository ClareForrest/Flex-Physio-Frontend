import { Row, Col } from 'react-bootstrap';
import { HeadingMain } from '../styled/main';
import Button from 'react-bootstrap/Button';

export function HomePageLoggedIn() {
  return(
    <div>
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
        <Row>
        </Row>
    </div>
  )
}