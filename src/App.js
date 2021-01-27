import 'bootstrap/dist/css/bootstrap.min.css';
import { Page, Nav, HeadingMain, HeadingSub, SidePanel } from './styled/main';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './logo.png';
import massage from './massage.jpg';
import physios from './physios.jpg';
import admin from './admin.jpg';



function App() {
  return (
    <>
      <Container>
        <Row>
          <Col xs={3}>
            <SidePanel>
              <img src={logo} alt="Logo"/>
            </SidePanel>
          </Col>
          <Col>
            <Nav></Nav>
          <Row>
              <HeadingMain>About</HeadingMain>
          </Row>
          <Row> 
            <Col>
                <img src={physios} alt="Physiotherapists" />
                <HeadingSub>Our Massage Therapists</HeadingSub>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Lorem sed risus ultricies tristique nulla. Pellentesque nec nam aliquam sem. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Vulputate enim nulla aliquet porttitor lacus. Sed cras ornare arcu dui vivamus arcu felis. </p>
              <img src={admin} alt="Administration Staff" />
              <HeadingMain>Services</HeadingMain>
              <HeadingSub>Massage</HeadingSub>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Lorem sed risus ultricies tristique nulla. Pellentesque nec nam aliquam sem. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Vulputate enim nulla aliquet porttitor lacus. Sed cras ornare arcu dui vivamus arcu felis.</p>
              <HeadingMain>Contact Us</HeadingMain>
            </Col>
           <Col>
              <HeadingSub>Our Physiotherapists</HeadingSub>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Lorem sed risus ultricies tristique nulla. Pellentesque nec nam aliquam sem. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Vulputate enim nulla aliquet porttitor lacus. Sed cras ornare arcu dui vivamus arcu felis.</p>
              <img src={massage} alt="Massage Therapists" />
              <HeadingSub>Our Administration Staff</HeadingSub>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque convallis a cras semper auctor neque. Lorem sed risus ultricies tristique nulla. Pellentesque nec nam aliquam sem. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Vulputate enim nulla aliquet porttitor lacus. Sed cras ornare arcu dui vivamus arcu felis</p>
           </Col>
          </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
