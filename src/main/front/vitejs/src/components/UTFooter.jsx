import { useI18n } from "../i18n/I18nContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";

import './UTNavbar.css';

function UTFooter () {
  const { t, toggleLang } = useI18n();

  return (
      <footer className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>{t("footernote")}</h5>
              <p>{t("footernote")}</p>
            </Col>
            <Col md={6} className="text-md-end">
              <p>{t("emailstr")}: {t("email")}</p>
              <p>{t("phonestr")}: {t("phone")}</p>
              <p>{t("addressstr")}: {t("address")}</p>
            </Col>
          </Row>
        </Container>
      </footer>
      )}
  export default UTFooter;