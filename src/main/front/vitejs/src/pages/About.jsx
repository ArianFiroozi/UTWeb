import { useI18n } from "../i18n/I18nContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./About.css";
import img1 from "../assets/utcar1.jpg";

const About = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";

  const paragraphs = t("aboutText").split("\n").filter(p => p.trim() !== "");

  return (
    // <div dir={lang === "fa" ? "rtl" : "ltr"}>
    <Container className="my-5" dir={isRtl ? "rtl" : "ltr"}>
      <Row className={`align-items-center ${isRtl ? "flex-row-reverse" : ""}`}>
        <Col md={6} className="mb-4 mb-md-0">
          <Image
            src={img1}
            alt="About UTCar"
            fluid
            rounded
            className={`shadow-sm ${isRtl ? "img-rtl" : ""}`}
          />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">{t("aboutTitle")}</h2>
          {paragraphs.map((para, index) => (
            <p key={index} className="lead text-secondary">
              {para}
            </p>
          ))}
        </Col>
      </Row>
    </Container>
    // </div>
  );
};

export default About;
