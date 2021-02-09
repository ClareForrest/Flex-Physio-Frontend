import "bootstrap/dist/css/bootstrap.min.css";
import { SidePanel, Footer } from "../styled/main";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import logo from "../logo.png";
import { NavRouter } from "./NavRouter";
import { Link } from "react-router-dom";

const isEmployee = localStorage.getItem("isEmployee")

export const Template = (props) => {
  return (
    <Container>
      <Row>
        <Col xs={3}>
          <SidePanel class="position-sticky">
            <Image src={logo} alt="Logo" rounded fluid />
            <Card className="quote-size">
              {/* Want to use an API to get changing quotes */}
              <p>"An apple a day, keeps the doctor away"</p>
            </Card>
          </SidePanel>
        </Col>
        <Col>
          <NavRouter>{props.children}</NavRouter>
        </Col>
        <Footer>
          {isEmployee === "true" &&<Link to="/availability/:id" className="staff-link">
            Staff
          </Link>}
        </Footer>
      </Row>
    </Container>
  );
};

