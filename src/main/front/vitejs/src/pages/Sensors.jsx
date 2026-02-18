import { useI18n } from "../i18n/I18nContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./projectinner.css";

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import ScienceIcon from '@mui/icons-material/Science';
import HubIcon from '@mui/icons-material/Hub';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import InsightsIcon from '@mui/icons-material/Insights';
import VideocamIcon from '@mui/icons-material/Videocam';
import StraightenIcon from '@mui/icons-material/Straighten';

import img1 from "../assets/utcar1.jpg";
import fusepipe from "../assets/fusionpipe.png";
import jsonDepthArray from "../assets/depth.json";
import { motion } from "framer-motion";


const Sensors = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";
  const depthMap1 = new Float32Array(jsonDepthArray);
  
  const intro = t("sensorsIntro").split("\n").filter(p => p.trim() !== "");
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
          <h2 className="mb-4">{t("sensorsTitle")}</h2>
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
    icon={<HubIcon />}
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
        src={fusepipe}
        style={{ width: '100%', backgroundColor: "white", borderRadius: 10, maxWidth: '500px', margin: '1rem' }}
        alt=""
      />

    </Paper>
    </motion.div>
  </StepContent>
</Step>
<Step active>
  <StepLabel
    icon={<InsightsIcon  />}
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
        src={"https://raw.githubusercontent.com/ArianFiroozi/UTFusion/refs/heads/main/Profiling/HeapStack/HeapUsage.png"}
        style={{ width: '100%', backgroundColor: "white", borderRadius: 10, maxWidth: '500px', margin: '1rem' }}
        alt=""
      />

    </Paper>
    </motion.div>
  </StepContent>
</Step>

  <Step active>
    <StepLabel
      icon={<VideocamIcon />}
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
          src={"https://www.waveshare.com/media/catalog/product/i/m/imx219-83-stereo-camera-1.jpg"}
          style={{ width: '100%', borderRadius: 10, maxWidth: '500px', margin: '1rem' }}
          alt=""
        />
  
      </Paper>
      </motion.div>
    </StepContent>
  </Step>
  <Step active>
    <StepLabel
      icon={<StraightenIcon />}
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
          src={"https://www.smart-prototyping.com/image/cache/data/2020/10/102076%20VL53L1X/1-750x750.JPG"}
          style={{ width: '100%', borderRadius: 10, maxWidth: '500px', margin: '1rem' }}
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

export default Sensors;
