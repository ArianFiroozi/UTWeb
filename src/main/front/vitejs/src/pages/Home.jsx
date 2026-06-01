import { useRef, useState } from "react";
import { Card, Container, Row, Col, Button, Carousel } from "react-bootstrap";
import { LightningFill, CpuFill, LeafFill } from "react-bootstrap-icons";
import { useI18n } from "../i18n/I18nContext";
import img1 from "../assets/utcar1.png";
import img2 from "../assets/utcar2.png";
import img3 from "../assets/utcar3.png";
import img4 from "../assets/utcar4.png";
import { useNavigate } from "react-router-dom";
import "./Home.css"
import { Canvas } from "@react-three/fiber";
import React from 'react';
import { useEffect } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import {ToastContainer, Zoom, toast} from "react-toastify";
import { useGLTF } from "@react-three/drei";
// import utcar from "../assets/utcarClean.glb"
import utcar from "../assets/UTCar.glb"
import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          color: "white",
          fontSize: "14px",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        <div>Loading… {progress.toFixed(0)}%</div>
      </div>
    </Html>
  );
}

function Model() {
  const { scene } = useGLTF(utcar);
  return <primitive object={scene} scale={1} />;
}


const Home = () => {
  const { t, lang } = useI18n();
  const [show, hide] = useState(true);
  // const notify = () => toast("This website is bad");
  const idRef = useRef(null);
  useEffect(() => {
      if (idRef.current) {
        toast.dismiss(idRef.current);
      }
    idRef.current = toast.warning(
      <>
        {t("maintenanceTitle")} <br />
        {t("maintenanceBody")}
      </>,
      {
        style: { width: "350px", textAlign: "center" },
      }
    );
  }, [t])

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

  const navigate = useNavigate();

  return (
    <div dir={lang === "fa" ? "rtl" : "ltr"} className="containerw">
      &nbsp;
      <hr/>
      <ToastContainer
        position="bottom-center"
        autoClose={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
        transition={Zoom}
        />
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
    <Card className="h-100 text-center shadow-sm d-flex flex-column" style={{ backgroundColor: '#ffffffe5' }}>
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex align-items-center justify-content-center">
          <span className="me-2">{card.icon}</span>
          {card.title}
        </Card.Title>
        <Card.Text className="mb-4">{card.text}</Card.Text>
        <div className="mt-auto">
          <Button
            variant={idx === flashcards.length - 2
              ? "secondary"
              : "primary"}
            onClick={() =>
              navigate(
                idx === flashcards.length - 2
                  ? "/gallery?filter=tests"
                  : "/projects"
              )
            }          >
            {idx === flashcards.length - 2
              ? t("checkout")
              : t("learnmore")}
          </Button>
        </div>
      </Card.Body>
    </Card>
  </Col>
))}
        </Row>
      </Container>
        
    <div
  style={{
    width: "100vw",
    maxWidth: "1000px",
    aspectRatio: "1 / 1", // or 16 / 9
    margin: "0 auto",
    overflow: "hidden",
  }}
>
  <Canvas
    shadows
    camera={{ position: [5, 5, 2], fov: 30 }}
    style={{ width: "100%", height: "100%" }}
  >
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    <ambientLight intensity={2} />
    <directionalLight position={[5, 5, 5]} />
    
      <Suspense fallback={<Loader />}>
        <Model />
      </Suspense>
  </Canvas>
</div>
    </div>
  );
};

export default Home;
