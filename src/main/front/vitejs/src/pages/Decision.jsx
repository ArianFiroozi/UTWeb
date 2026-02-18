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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import img1 from "../assets/utcar1.jpg";
import imgdepth from "../assets/depth.jpg";
import jsonDepthArray from "../assets/depth.json";
import vid_carla_multi from "../assets/videos/decision-carla-multi.mp4";
import vid_carla_single from "../assets/videos/decision-carla-single.mp4";
import vid_highway_multi from "../assets/videos/decision-highway-multi.mp4";
import yolo from "../assets/yolo.jpg";
import { motion } from "framer-motion";


const Decision = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";
  const depthMap1 = new Float32Array(jsonDepthArray);
  
  const intro = t("decisionIntro").split("\n").filter(p => p.trim() !== "");
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
          <h2 className="mb-4">{t("decisionTitle")}</h2>
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
    icon={<ArrowForwardIosIcon />}
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
      viewport={{ once: true, margin: "-80px" }}
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

      
      <video 
        controls 
        style={{ width: '100%', borderRadius: 10, maxWidth: '700px', margin: '1rem' }} 
      >
        <source src= {vid_carla_multi} type="video/mp4" />
      </video>
    </Paper>
    </motion.div>
  </StepContent>
</Step>


<Step active>
  <StepLabel
    icon={<CarCrashIcon />}
  >
    <Typography variant="h6" className="white">
      {t("Fill")}
    </Typography>
  </StepLabel>

  <StepContent>

    <motion.div
      variants={popVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
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

      
      <video 
        controls 
        style={{ width: '100%', borderRadius: 10, maxWidth: '700px', margin: '1rem' }} 
      >
        <source src= {vid_highway_multi} type="video/mp4" />
      </video>
    </Paper>
    </motion.div>
  </StepContent>
</Step>


<Step active>
  <StepLabel
    icon={<DirectionsCarIcon />}
  >
    <Typography variant="h6" className="white">
      {t("Fill")}
    </Typography>
  </StepLabel>

  <StepContent>

    <motion.div
      variants={popVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
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

      
      <video 
        controls 
        style={{ width: '100%', borderRadius: 10, maxWidth: '700px', margin: '1rem' }} 
      >
        <source src= {vid_carla_single} type="video/mp4" />
      </video>
    </Paper>
    </motion.div>
  </StepContent>
</Step>

</Stepper>

    </Container>
    // </div>
  );
};

export default Decision;
