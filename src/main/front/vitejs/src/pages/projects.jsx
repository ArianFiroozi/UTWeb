import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

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

export default function Projects() {
  return (
    <Box sx={{ maxWidth: '900px', margin: '0 auto', mt: 5 }}>
        <hr/>
      <Typography variant="h3" textAlign="center" mb={5} fontWeight="bold">
        Our Projects
      </Typography>

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
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
              <img
                src={img1}
                alt="Decision Making"
                style={{ width: "100%", borderRadius: "10px" }}
              />

              <Typography variant="h6" mt={2}>
                Decision Making
              </Typography>
              <Typography>
                Developing intelligent decision-making algorithms for autonomous systems.
              </Typography>
            </Paper>
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
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
              <img
                src={img2}
                alt="Simulation"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <Typography variant="h6" mt={2}>
                Simulation
              </Typography>
              <Typography>
                Creating virtual environments to test robot behavior and system performance.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        {/* 3 — Sensors */}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <SensorsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
              <img
                src={img3}
                alt="Sensors"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <Typography variant="h6" mt={2}>
                Sensor Integration
              </Typography>
              <Typography>
                Integrating cameras, IMUs, LIDAR and other sensors for real-time data collection.
              </Typography>
            </Paper>
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
            <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
              <img
                src={img4}
                alt="Hardware"
                style={{ width: "100%", borderRadius: "10px" }}
              />
              <Typography variant="h6" mt={2}>
                Hardware
              </Typography>
              <Typography>
                Assembling electronics, mechanical parts, and embedded systems into final robots.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

      </Timeline>
    </Box>
  );
}
