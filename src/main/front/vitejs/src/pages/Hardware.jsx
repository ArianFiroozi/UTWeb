import { useI18n } from "../i18n/I18nContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./projectinner.css";
import DepthImage from "./DepthImage.jsx"

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import Search from '@mui/icons-material/Search';
import PsychologyIcon from '@mui/icons-material/Psychology';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

import img1 from "../assets/utcar1.jpg";
import imgdepth from "../assets/depth.jpg";
import jsonDepthArray from "../assets/depth.json";
import vid_test1 from "../assets/videos/test1.mp4";
import vid_lane from "../assets/videos/lanedetection.mp4";
import yolo from "../assets/yolo.jpg";
import rb5 from "../assets/rb5.jpg";
import jn from "../assets/jn.png";
import esp32 from "../assets/esp32.png";
import { motion } from "framer-motion";


const Hardware = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";
  const depthMap1 = new Float32Array(jsonDepthArray);
  
  const intro = t("hardwareIntro").split("\n").filter(p => p.trim() !== "");
  const popVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};


  return (
    <Container className="my-5" dir={isRtl ? "rtl" : "ltr"}>
      <hr/>
      &nbsp;
      <Row className={`align-items-center ${isRtl ? "flex-col-reverse" : ""}`}>
        <Col md={6}>
          <h2 className="mb-4">{t("hardwareTitle")}</h2>
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


  <Step active>
    <StepLabel
      icon={<PsychologyIcon />}
    >
      <Typography variant="h6" className="white">
        {t("Fill") }
      </Typography>
    </StepLabel>
  
    <StepContent>
  
      <motion.div
        variants={popVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-80px" }}
      >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          borderRadius: 3,
          backgroundColor: '#ffffffe5',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography mt={2} sx={{ flex: 1, textAlign: 'left' }}>
          {t("decisionmaking")}
        </Typography>
  
        
        <img
          src={rb5}
          style={{ width: '100%', borderRadius: 10, maxWidth: '500px', margin: '1rem' }}
          alt=""
        />
  
      </Paper>
      </motion.div>
    </StepContent>
  </Step>
<Step active>
  <StepLabel
    icon={<DeveloperBoardIcon />}
  >
    <Typography variant="h6" className="white">
      {t("Fill") }
    </Typography>
  </StepLabel>

  <StepContent>

    <motion.div
      variants={popVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
    >
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: '#ffffffe5',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography mt={2} sx={{ flex: 1, textAlign: 'left' }}>
        {t("decisionmaking")}
      </Typography>

      
      <img
        src={jn}
        style={{ width: '100%', backgroundColor: "white", borderRadius: 10, maxWidth: '500px', margin: '1rem' }}
        alt=""
      />

    </Paper>
    </motion.div>
  </StepContent>
</Step>
<Step active>
  <StepLabel
    icon={<SettingsInputComponentIcon  />}
  >
    <Typography variant="h6" className="white">
      {t("Fill") }
    </Typography>
  </StepLabel>

  <StepContent>

    <motion.div
      variants={popVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-80px" }}
    >
    <Paper
      elevation={3}
      sx={{
        p: 2,
        borderRadius: 3,
        backgroundColor: '#ffffffe5',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography mt={2} sx={{ flex: 1, textAlign: 'left' }}>
        {t("decisionmaking")}
      </Typography>

      
      <img
        src={esp32}
        style={{ width: '100%', backgroundColor: "white", borderRadius: 10, maxWidth: '500px', margin: '1rem' }}
        alt=""
      />

    </Paper>
    </motion.div>
  </StepContent>
</Step>

</Stepper>

    </Container>
    // </div>
  );
};

export default Hardware;
