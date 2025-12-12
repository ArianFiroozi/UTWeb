import { useI18n } from "../i18n/I18nContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import { Card, Row, Col, Button, Carousel } from "react-bootstrap";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

import './UTNavbar.css';

function UTFooter () {
  const { t, toggleLang , lang} = useI18n();

  return (
      <footer className="bg-dark text-light py-4">
        <Container dir = {lang==="fa"?"rtl":"ltr"}>
          <Row>
            <Col md={6}>
              <h5>{t("footernote")}</h5>
              <p>{t("footernote")}</p>
            </Col>
            <Col md={6} className={lang==="fa"?"text-md-start" :"text-md-end"} dir = {lang==="fa"?"ltr":"rtl"}>
                <p>
                  <MdEmail /> {t("email")}
                </p>
                <p>
                  <MdPhone /> {t("phone")}
                </p>
                <p>
                  <MdLocationOn /> {t("address")}
                </p>

            </Col>
          </Row>
        </Container>
      </footer>
      )}
  export default UTFooter;