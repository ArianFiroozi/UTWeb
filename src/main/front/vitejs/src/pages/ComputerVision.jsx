import { useI18n } from "../i18n/I18nContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./About.css";
import DepthImage from "./DepthImage.jsx"

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SensorsIcon from '@mui/icons-material/Sensors';
import MemoryIcon from '@mui/icons-material/Memory';

import img1 from "../assets/utcar1.jpg";
import img2 from "../assets/utcar2.png";
import img3 from "../assets/utcar3.png";
import imgdepth from "../assets/depth.jpg";
import jsonDepthArray from "../assets/depth.json";
import vid_test1 from "../assets/videos/test1.mp4";
import vid_lane from "../assets/videos/lanedetection.mp4";


const ComputerVision = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";
  const depthMap1 = new Float32Array(jsonDepthArray);
  
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
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on small screens
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography mt={2} sx={{ flex: 1, textAlign: 'left' }}>
        {t("decisionmaking")}
      </Typography>

      <DepthImage
        imageSrc={imgdepth}
        depthData={depthMap1}
        width={320}
        height={320}
        style={{
          width: "150px", // Adjusted width for consistent layout
          borderRadius: "10px",
          mt: { xs: 2, sm: 0 }, // Add margin on top for small screens
        }}
      />
    </Paper>
  </StepContent>
</Step>


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
        <source src= {vid_lane} type="video/mp4" />
      </video>
    </Paper>
  </StepContent>
</Step>

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
        <source src= {vid_test1} type="video/mp4" />
      </video>
    </Paper>
  </StepContent>
</Step>

</Stepper>

    </Container>
    // </div>
  );
};

export default ComputerVision;
