import { Row, Col, Image } from "react-bootstrap";
import { HeadingMain, HeadingSub } from "../../styled/main";
import physios from "../../physios.jpg";
import massage from "../../massage.jpg";
import "../../styled/style.css";

export function ServicesPage() {
  return (
    <div>
      <Row>
        <HeadingMain>Services</HeadingMain>
      </Row>
      <Row>
        <Col>
          <HeadingSub id="massage" name="massage">
            Massage
          </HeadingSub>
          <p class="set-size">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
            convallis a cras semper auctor neque. Lorem sed risus ultricies
            tristique nulla. Pellentesque nec nam aliquam sem. Magnis dis
            parturient montes nascetur ridiculus mus mauris vitae ultricies.
            Vulputate enim nulla aliquet porttitor lacus. Sed cras ornare arcu
            dui vivamus arcu felis.
          </p>
        </Col>
        <Image src={massage} alt="Massage" />
      </Row>
      <Row>
        <Image src={physios} alt="Physiotherapy" />
        <Col>
        <HeadingSub id="physiotherapy" name="physiotherapy">
          Physiotherapy
        </HeadingSub>
          <p class="set-size">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
            convallis a cras semper auctor neque. Lorem sed risus ultricies
            tristique nulla. Pellentesque nec nam aliquam sem. Magnis dis
            parturient montes nascetur ridiculus mus mauris vitae ultricies.
            Vulputate enim nulla aliquet porttitor lacus. Sed cras ornare arcu
            dui vivamus arcu felis.
          </p>
        </Col>
      </Row>
      <Row>
        <HeadingMain id="consult fees" name="consult fees">
          Consult Fees
        </HeadingMain>
      </Row>
      <Row>
          <HeadingMain id="massage" name="massage">
            Massage
          </HeadingMain>
      </Row>
      <Row>
        <Col>
          <HeadingSub>Remedial Massage:</HeadingSub>
        </Col>
        <Col>
          <HeadingSub>Sports Massage:</HeadingSub>
        </Col>
      </Row>
      <Row>
        <Col>
          <p class="set-size">$75.00 for 1 hour</p>
        </Col>
        <Col>
          <p class="set-size">$85.00 for 1 hour</p>
        </Col>
      </Row>
      <Row>
          <HeadingMain id="physiotherapy" name="physiotherapy">
            Physiotherapy
          </HeadingMain>
      </Row>
      <Row>
        <Col>
          <HeadingSub>Initial Consultation:</HeadingSub>
        </Col>
        <Col>
          <HeadingSub>Subsequent Consultations:</HeadingSub>
        </Col>
      </Row>
      <Row>
        <Col>
          <div class="set-size">
            <p>
              Due to the nature of an initial consult, fees are slightly higher:
            </p>
            <p>$125.00</p>
          </div>
        </Col>
        <Col>
          <div class="set-size">
            <p>Subsquent consultation fees:</p>
            <p>$95.00</p>
          </div>
        </Col>
      </Row>
      <Row>
        <HeadingMain>Contact Us</HeadingMain>
      </Row>
    </div>
  );
}