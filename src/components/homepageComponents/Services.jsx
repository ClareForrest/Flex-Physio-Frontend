import { Row, Col } from "react-bootstrap";
import { HeadingMain, HeadingSub } from "../../styled/main";
import physios from "../../physios.jpg";
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
          <img src={physios} alt="Physiotherapy" />
          <HeadingMain id="consult fees" name="consult fees">
            Consult Fees
          </HeadingMain>
          <HeadingSub>Physiotherapy - Initial Consultation:</HeadingSub>
          <div class="set-size">
            <p>
              Due to the nature of an initial consult, fees are slightly higher:
            </p>
            <p>$125.00</p>
          </div>
          <HeadingSub>Physiotherapy - Subsequent Consultations:</HeadingSub>
          <div class="set-size">
            <p>Subsquent consultation fees:</p>
            <p>$95.00</p>
          </div>
          <HeadingMain>Contact Us</HeadingMain>
        </Col>
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
          <HeadingSub>Remedial Massage:</HeadingSub>
          <p class="set-size">$75.00 for 1 hour</p>
          <HeadingSub>Sports Massage:</HeadingSub>
          <p class="set-size">$85.00 for 1 hour</p>
        </Col>
      </Row>
    </div>
  );
}
