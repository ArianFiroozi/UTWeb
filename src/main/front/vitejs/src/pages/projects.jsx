import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Link } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useI18n } from "../i18n/I18nContext";


import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SensorsIcon from '@mui/icons-material/Sensors';
import MemoryIcon from '@mui/icons-material/Memory';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

import img1 from "../assets/utcar1.jpg";
import img2 from "../assets/utcar2.png";
import img3 from "../assets/utcar3.png";
import img4 from "../assets/utcar4.png";

export default function Projects() {
    const { t, lang } = useI18n();
  
  return (
    <Box sx={{ maxWidth: '900px', margin: '0 auto', mt: 5 ,position:'flex'}} dir={lang==="fa"? "rtl":"ltr"}>
        <hr/>
        &nbsp;
      {/* <Typography variant="h3" textAlign="center" mb={5} fontWeight="bold"> */}
      <h1 className="text-center mb-5">
        {t("ourproj")}
        </h1>
      {/* </Typography> */}

      <Timeline position="alternate">

        {/* 1 — Decision Making */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          />
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <PrecisionManufacturingIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Link className="nav-link custom-link" to="/projects/decision-making">
            <Paper
                  elevation={3}
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: '#ffffffe5',
                    textAlign: "start"
                  }}
                >
              
              <img
                src={img1}
                alt="Decision Making"
                style={{ width: "100%", borderRadius: "10px" }}
              />

              <Typography variant="h6" mt={2}>
                {t("decisionmakingstr")}
              </Typography>
              <Typography>
                {t("decisionmaking")}
              </Typography>
            </Paper>
              </Link>
          </TimelineContent>
        </TimelineItem>

        {/* 4 — Hardware */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <MemoryIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Link className="nav-link custom-link" to="/projects/hardware">
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 , backgroundColor: '#ffffffe5', textAlign: "end"}}>
              <img
                src={img4}
                alt="Hardware"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <Typography variant="h6" mt={2}>
                {t("hardwarestr")}
              </Typography>
              <Typography>
                {t("hardware")}
              </Typography>
            </Paper>
            </Link>
          </TimelineContent>
        </TimelineItem>

        {/* 5 — CV */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <CameraAltIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Link className="nav-link custom-link" to="/projects/cv">
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 , backgroundColor: '#ffffffe5', textAlign: "start"}}>
              <img
                src={img1}
                alt="ComputerVision"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <Typography variant="h6" mt={2}>
                {t("cvstr")}
              </Typography>
              <Typography>
                {t("cv")}
              </Typography>
            </Paper>
            </Link>
          </TimelineContent>
        </TimelineItem>

        {/* 2 — Simulation */}
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          />
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="secondary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Link className="nav-link custom-link" to="/projects/simulation">
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 , backgroundColor: '#ffffffe5', textAlign: "end"}}>
              <img
                src={img2}
                alt="Simulation"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <Typography variant="h6" mt={2}>
                {t("simulationstr")}
              </Typography>
              <Typography>
                {t("simulation")}
              </Typography>
            </Paper>
            </Link>
          </TimelineContent>
        </TimelineItem>

        {/* 3 — Sensors */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <SensorsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Link className="nav-link custom-link" to="/projects/sensor-integration">
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 , backgroundColor: '#ffffffe5', textAlign: "start"}}>
              <img
                src={img3}
                alt="Sensors"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <Typography variant="h6" mt={2}>
                {t("sensorstr")}
              </Typography>
              <Typography>
                {t("sensorp")}
              </Typography>
            </Paper>
            </Link>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Box>
  );
}
