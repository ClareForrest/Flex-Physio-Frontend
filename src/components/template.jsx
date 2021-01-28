import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, SidePanel } from '../styled/main';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../logo.png';


export function Template(props) {
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
          <Nav class="fixed-top"></Nav>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}
