import { useState, useEffect } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css"; // for custom styles
import img1 from "../assets/utcar1.jpg";
import img2 from "../assets/utcar2.jpg";
import img3 from "../assets/utcar2.jpg";
import Carousel from 'react-bootstrap/Carousel';

const flashcards = [
  { title: "Innovation", text: "Cutting-edge autonomous technology for safer roads." },
  { title: "AI & Sensors", text: "High-precision sensors and AI-driven decision making." },
  { title: "Sustainability", text: "Electric and eco-friendly vehicle design." },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);

  return (
    <div>
        <Carousel interval={50000} height={1}>
            <Carousel.Item>
              <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                  />
              <Carousel.Caption>
                <h3>UTCar for Autonomous Driving</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                    className="d-block w-100"
                    src={img2}
                    alt="First slide"
                  />
              <Carousel.Caption>
                <h3>UTCar for Autonomous Driving</h3>
                <p>something that i typed here</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                    className="d-block w-100"
                    src={img3}
                    alt="First slide"
                  />
              <Carousel.Caption>
                <h3>UTCar for Autonomous Driving</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

      {/* Flashcards Section */}
      <Container className="my-5">
        <Row className="g-4">
          {flashcards.map((card, idx) => (
            <Col key={idx} md={4}>
              <Card className="h-100 text-center shadow-sm">
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button variant="primary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>UTCar Autonomous Driving</h5>
              <p>Building the future of safe and autonomous transportation.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p>Contact: info@utcar.com</p>
              <p>Phone: +1 234 567 890</p>
              <p>Address: 123 Innovation Road, Tech City</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
