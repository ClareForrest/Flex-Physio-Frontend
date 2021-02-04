import { Row, Col } from 'react-bootstrap';
import { HeadingMain, HeadingSub } from '../../styled/main';
import massage from '../../massage.jpg';
import physios from '../../physios.jpg';
import admin from '../../admin.jpg';
import '../../styled/style.css';

export function AboutPage() {
  return (
    <div>
      <Row>
        <HeadingMain>About</HeadingMain>
      </Row>
      <Row>
        <Col>
          <img src={physios} alt="Physiotherapists" />
          <HeadingSub id="massage-therapists" name="massage-therapists">
            Our Massage Therapists
          </HeadingSub>
          <p class="set-size">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
            convallis a cras semper auctor neque. Lorem sed risus ultricies
            tristique nulla. Pellentesque nec nam aliquam sem. Magnis dis
            parturient montes nascetur ridiculus mus mauris vitae ultricies.
            Vulputate enim nulla aliquet porttitor lacus. Sed cras ornare arcu
            dui vivamus arcu felis.{" "}
          </p>
          <img src={admin} alt="Administration Staff" />
          <HeadingMain>Services</HeadingMain>
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
        </Col>
        <Col>
          <HeadingSub id="physiotherapists" name="physiotherapists">
            Our Physiotherapists
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
          <img src={massage} alt="Massage Therapists" />
          <HeadingSub id="admin-staff" name="admin-staff">
            Our Administration Staff
          </HeadingSub>
          <p class="set-size">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
            convallis a cras semper auctor neque. Lorem sed risus ultricies
            tristique nulla. Pellentesque nec nam aliquam sem. Magnis dis
            parturient montes nascetur ridiculus mus mauris vitae ultricies.
            Vulputate enim nulla aliquet porttitor lacus. Sed cras ornare arcu
            dui vivamus arcu felis
          </p>
          <img src={massage} alt="Massage" />
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
    </div>
  );
}
