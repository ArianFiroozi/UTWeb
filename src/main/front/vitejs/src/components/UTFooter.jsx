import { Container, Row, Col } from "react-bootstrap";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { useI18n } from "../i18n/I18nContext";
import "./UTNavbar.css";

function UTFooter () {
  const { t, toggleLang , lang} = useI18n();

  return (
      <footer className="bg-dark text-light py-4">
        <Container dir = {lang==="fa"?"rtl":"ltr"}>
          <Row>
            <Col md={6} className={`text-${lang === "fa" ? "end" : "start"} mb-3 mb-md-0`}>
              <h5>{t("footernote")}</h5>
            </Col>
            <Col
              md={6}
              className={`
                d-flex flex-column
                align-items-${lang === "fa" ? "start" : "start"}
                align-items-md-${lang === "fa" ? "end" : "end"}
                text-${lang === "fa" ? "end" : "start"}
                text-md-${lang === "fa" ? "start" : "end"}
              `}
            >
              <p className="mb-1 d-flex flex-row align-items-center gap-2 flex-md-row-reverse">
                <MdEmail /> {t("email")}
              </p>

              <p className="mb-1 d-flex flex-row align-items-center gap-2 flex-md-row-reverse">
                <MdPhone /> {t("phone")}
              </p>

              <p className="mb-0 d-flex flex-row align-items-center gap-2 flex-md-row-reverse">
                <MdLocationOn /> {t("address")}
              </p>
            </Col>

          </Row>
        </Container>
      </footer>
      )}
  export default UTFooter;