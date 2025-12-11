import { useI18n } from "../i18n/I18nContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

import './UTNavbar.css';

function UTNavbar () {
  const { t, toggleLang } = useI18n();

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary ut-navbar">
      <Container>
        <Navbar.Brand href="#home" className="white">UTCar</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav  className="white">
            <Link to="/">{t("home")}</Link>
          </Nav>
          <Nav className="me-auto">
            <Link to="/projects">{t("projects")}</Link>
          </Nav>
          <Nav>
            <Link to="/about">{t("about")}</Link>
            <button onClick={toggleLang} className="lang-btn">{t("switch")}</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default UTNavbar;
