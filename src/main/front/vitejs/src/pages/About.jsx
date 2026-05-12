import { useI18n } from "../i18n/I18nContext";
import { Container, Row, Col, Image } from "react-bootstrap";
import img1 from "../assets/utcar1.png";
import "./shared.css";

const About = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";
  const paragraphs = t("aboutText").split("\n").filter(p => p.trim() !== "");

  return (
    <Container className="my-5" dir={isRtl ? "rtl" : "ltr"} as="article">
      <hr />
      <div className="mb-4" />
      
      <Row className={`align-items-center ${isRtl ? "flex-row-reverse" : ""}`}>
        <Col md={6}>
          <h2 className="mb-4">{t("aboutTitle")}</h2>
          {paragraphs.map((para, index) => (
            <p key={index} className="lead text-secondary aboutpar">
              {para}
            </p>
          ))}
        </Col>
        <Col md={6} className="mb-4 mb-md-0">
          <Image
            src={img1}
            alt={t("aboutTitle")}
            fluid
            rounded
            className={`shadow-sm ${isRtl ? "img-rtl" : ""}`}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
