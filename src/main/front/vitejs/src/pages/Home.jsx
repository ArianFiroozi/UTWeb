import { useState } from "react";
import { Card, Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { LightningFill, CpuFill, LeafFill } from "react-bootstrap-icons";
import { useI18n } from "../i18n/I18nContext";
import img1 from "../assets/utcar1.jpg";
import img2 from "../assets/utcar2.png";
import img3 from "../assets/utcar3.png";
import img4 from "../assets/utcar4.png";

const Home = () => {
  const { t, lang } = useI18n();

  const slides = [
    { 
      className:"d-block w-100 carousel-img",
      img: img1,
      title: t("utcar"),
      text: t("aboututcar"),
    },
    { 
      className:"d-block w-100 carousel-img",
      img: img2,
      title: t("utcar"),
      text: t("aboututcar"),
    },
    { 
      className:"d-block w-100 carousel-img",
      img: img3,
      title: t("utcar"),
      text: t("aboututcar"),
    },
    {
      className:"d-block w-100 carousel-img",
      img: img4,
      title: t("utcar"),
      text: t("aboututcar"),
    },
  ];

  const flashcards = [
    {
      title: t("innovation"),
      text: t("aboutinno"),
      icon: <LightningFill />,
    },
    {
      title: t("sensor"),
      text: t("aboutsensor"),
      icon: <CpuFill />,
    },
    {
      title: t("env"),
      text: t("aboutenv"),
      icon: <LeafFill />,
    },
  ];

  return (
    <div dir={lang === "fa" ? "rtl" : "ltr"}>
      <Carousel interval={5000}>
        {slides.map((slide, idx) => (
          <Carousel.Item key={idx}>
            <img className={slide.className} src={slide.img} alt={`Slide ${idx + 1}`} />
            <Carousel.Caption className="caption-carousel">
              <h1>{slide.title}</h1>
              <h3>{slide.text}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container className="my-5" >
        <Row className="g-4">
          {flashcards.map((card, idx) => (
            <Col key={idx} md={4}>
              <Card className="h-100 text-center shadow-sm d-flex flex-column">
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="d-flex align-items-center justify-content-center">
                    <span className="me-2">{card.icon}</span>
                    {card.title}
                  </Card.Title>
                  <Card.Text className="mb-4">{card.text}</Card.Text>
                  <div className="mt-auto">
                    <Button variant="primary">{t("learnmore")}</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
  );
};

export default Home;
