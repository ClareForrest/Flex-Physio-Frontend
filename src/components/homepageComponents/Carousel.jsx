import { Image, Carousel } from "react-bootstrap";

export function ImageDisplay() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image
          className="d-block w-100"
          src="../steps.jpg"
          alt="Steps"
        />
        <Carousel.Caption>
          <h3>Physiotherapy</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="crunches.jpg/800x400 text=Crunches slide&bg=282c34"
          alt="Crunches"
        />
        <Carousel.Caption>
          <h3>Remedial Massage</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="silhouette.jpg/800x400 text=Silhouette slide&bg=20232a"
          alt="Silhouette"
        />
        <Carousel.Caption>
          <h3>Sports Massage</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
