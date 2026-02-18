import { Container, Row, Col } from "react-bootstrap";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useI18n } from "../i18n/I18nContext";
import "./UTNavbar.css";

function UTFooter() {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";

  return (
    <footer className="bg-dark text-light py-4" role="contentinfo">
      <Container dir={isRtl ? "rtl" : "ltr"}>
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <h5 className="mb-2">{t("footernote")}</h5>
            <p className="text-muted mb-0">{t("footerTagline")}</p>
          </Col>
          <Col md={6} className={isRtl ? "text-md-start" : "text-md-end"}>
            <address className="mb-0" style={{ fontStyle: "normal" }}>
              <p className="mb-1">
                <MdEmail className="me-2" aria-hidden="true" />
                <a href={`mailto:${t("email")}`} className="text-light text-decoration-none">
                  {t("email")}
                </a>
              </p>
              <p className="mb-1">
                <MdPhone className="me-2" aria-hidden="true" />
                <a href={`tel:${t("phone")}`} className="text-light text-decoration-none">
                  {t("phone")}
                </a>
              </p>
              <p className="mb-0">
                <MdLocationOn className="me-2" aria-hidden="true" />
                {t("address")}
              </p>
            </address>
          </Col>
        </Row>
        <hr className="my-3 border-secondary" />
        <Row>
          <Col className="text-center">
            <small className="text-muted">{t("copyright")}</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default UTFooter;