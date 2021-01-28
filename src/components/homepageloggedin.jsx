import { Row, Col } from 'react-bootstrap';
import { HeadingMain } from '../styled/main';

export function HomePageLoggedIn() {
  return(
    <div>
        <Row>
            <HeadingMain>What would you like to do?</HeadingMain>
        </Row>
        <Row> 
          <Col>
            <button type="button" class="btn btn-secondary btn-lg btn-block">Make a Booking</button>
          </Col>
          <Col>
            <button type="button" class="btn btn-secondary btn-lg btn-block">View Current Booking</button>
          </Col>
        </Row>
        <Row> 
          <Col>
            <button type="button" class="btn btn-secondary btn-lg btn-block">View Previous Bookings</button>
          </Col>
          <Col>
            <button type="button" class="btn btn-secondary btn-lg btn-block">View/Edit Profile</button>
          </Col>
        </Row>
        <Row>
        </Row>
    </div>
  )
}