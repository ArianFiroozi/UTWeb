import { useI18n } from "../i18n/I18nContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./UTNavbar.css";

export default function UTNavbar() {
  const { t, toggleLang } = useI18n();

  return (
    <Navbar expand="lg" className="ut-navbar shadow-sm" sticky="top">
      <Container className="d-flex align-items-center">
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
          UTCar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" className="border-0 custom-toggler" />

        <Navbar.Collapse id="nav" className="justify-content-end">
          <Nav className="align-items-center gap-3">
            <Link className="nav-link custom-link" to="/">
              {t("home")}
            </Link>
            <Link className="nav-link custom-link" to="/projects">
              {t("projects")}
            </Link>
            <Link className="nav-link custom-link" to="/people">
              {t("members")}
            </Link>
            <Link className="nav-link custom-link" to="/about">
              {t("about")}
            </Link>

            <button onClick={toggleLang} className="lang-btn rounded-3 px-3 py-1 ms-2">
              {t("switch")}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}