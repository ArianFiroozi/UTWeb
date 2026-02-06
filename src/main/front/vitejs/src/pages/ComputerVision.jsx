import { useI18n } from "../i18n/I18nContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./About.css";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Link } from "react-router-dom";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SensorsIcon from '@mui/icons-material/Sensors';
import MemoryIcon from '@mui/icons-material/Memory';

import img1 from "../assets/utcar1.jpg";
import img2 from "../assets/utcar2.png";
import img3 from "../assets/utcar3.png";
import img4 from "../assets/utcar4.png";

const ComputerVision = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";

  const intro = t("cvIntro").split("\n").filter(p => p.trim() !== "");

  return (
    <Container className="my-5" dir={isRtl ? "rtl" : "ltr"}>
      <hr/>
      &nbsp;
      <Row className={`align-items-center ${isRtl ? "flex-col-reverse" : ""}`}>
        <Col md={6}>
          <h2 className="mb-4">{t("cvTitle")}</h2>
          {intro.map((para, index) => (
            <p key={index} className="lead text-secondary aboutpar">
              {para}
            </p>
          ))}
        </Col>
        <Col md={6} className="mb-4 mb-md-0">
          <Image
            src={img1}
            alt="Decision Making Pipeline"
            fluid
            rounded
            className={`shadow-sm ${isRtl ? "img-rtl" : ""}`}
          />
        </Col>
      </Row>
    
    <Stepper
  orientation="vertical"
  sx={{
  '& .MuiStepConnector-line': {
    minHeight: 24,
  },
}}

>
  {/* 1 — Decision Making */}
  <Step active>
    <StepLabel
      icon={<PrecisionManufacturingIcon />}
    >
      <Typography variant="h6">
        {t("deptheststr")}
      </Typography>
    </StepLabel>

    <StepContent>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 3,
          backgroundColor: '#ffffffe5',
          textAlign: isRtl ? "right" : "left"
        }}
      >
        <img
          src={img1}
          alt="Depth Estimation"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <Typography mt={2}>
          {t("decisionmaking")}
        </Typography>
      </Paper>
    </StepContent>
  </Step>

  {/* 2 — Simulation */}
  <Step active>
    <StepLabel
      icon={<LaptopMacIcon />}
    >
      <Typography variant="h6">
        {t("lanedetectstr")}
      </Typography>
    </StepLabel>

    <StepContent>
      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 3,
          backgroundColor: '#ffffffe5',
          textAlign: isRtl ? "right" : "left"
        }}
      >
        <img
          src={img2}
          alt="Simulation"
          style={{ width: "100%", borderRadius: "10px" }}
        />

        <Typography mt={2}>
          {t("simulation")}
        </Typography>
      </Paper>
    </StepContent>
  </Step>
</Stepper>

    </Container>
    // </div>
  );
};

export default ComputerVision;
