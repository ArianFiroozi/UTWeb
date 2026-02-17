import { useI18n } from "../i18n/I18nContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./UTNavbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Color } from "three";

export default function UTNavbar() {
  const { t, toggleLang, lang } = useI18n();
  const [expanded, setExpanded] = useState(false); // <-- track collapse
  const navigate = useNavigate();
  const [showProjects, setShowProjects] = useState(false);

  return (
    <Navbar
      expand="lg"
      className="ut-navbar shadow-sm"
      sticky="top"
      expanded={expanded}               // <-- control expanded state
      onToggle={() => setExpanded(!expanded)} // <-- toggle when clicking the toggle button
    >
      <Container className="d-flex align-items-center" dir={lang==="fa"?"rtl": "ltr"}>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
          UTCar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="nav" className="border-0 custom-toggler" />

        <Navbar.Collapse id="nav" className={lang==="fa"?"justify-content-end": "justify-content-end"} dir={lang==="fa"?"rtl": "ltr"}>
          <Nav className="align-items-center gap-3">
            {/* Collapse navbar when clicking a link */}
            <Link className="nav-link custom-link" to="/" onClick={() => setExpanded(false)}>
              {t("home")}
            </Link>
            <NavDropdown
              className="ut-navdrop"
              show={showProjects}
              onToggle={(isOpen) => setShowProjects(isOpen)}
              title={
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/projects");
                    setExpanded(false);
                  }}
                >
                  {t("projects")}
                </span>
              }
            >

              <NavDropdown.Item
              className="ut-navdrop"
                onClick={() => {
                  navigate("/projects/decision-making");
                  setExpanded(false);
                }}
              >
                Decision Making
              </NavDropdown.Item>

              <NavDropdown.Item
              className="ut-navdrop"
                onClick={() => {
                  navigate("/projects/hardware");
                  setExpanded(false);
                }}
              >
                Hardware
              </NavDropdown.Item>

              <NavDropdown.Item
              className="ut-navdrop"
                onClick={() => {
                  navigate("/projects/cv");
                  setExpanded(false);
                }}
              >
                Computer Vision
              </NavDropdown.Item>

              <NavDropdown.Item
              className="ut-navdrop"
                onClick={() => {
                  navigate("/projects/simulation");
                  setExpanded(false);
                }}
              >
                Simulation
              </NavDropdown.Item>

              <NavDropdown.Item
              className="ut-navdrop"
                onClick={() => {
                  navigate("/projects/sensor-integration");
                  setExpanded(false);
                }}
              >
                Sensor Integration
              </NavDropdown.Item>
            </NavDropdown>
            <Link className="nav-link custom-link" to="/people" onClick={() => setExpanded(false)}>
              {t("members")}
            </Link>
            <Link className="nav-link custom-link" to="/about" onClick={() => setExpanded(false)}>
              {t("about")}
            </Link>

            <button onClick={() => { toggleLang(); setExpanded(false); }} className="lang-btn rounded-3 px-3 py-1 ms-2">
              {t("switch")}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
