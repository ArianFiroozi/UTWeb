import { useI18n } from "../i18n/I18nContext";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Stepper, Step, StepLabel, StepContent, Typography, Paper } from "@mui/material";
import {
  Hub as HubIcon,
  Insights as InsightsIcon,
  Videocam as VideocamIcon,
  Straighten as StraightenIcon
} from "@mui/icons-material";
import { motion } from "framer-motion";
import img1 from "../assets/utcar1.png";
import fusepipe from "../assets/fusionpipe.png";
import "./shared.css";

const popVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const SENSOR_STEPS = [
  {
    icon: HubIcon,
    titleKey: "step.fusion",
    descKey: "step.fusionDesc",
    image: fusepipe
  },
  {
    icon: InsightsIcon,
    titleKey: "step.profiling",
    descKey: "step.profilingDesc",
    image: "https://raw.githubusercontent.com/ArianFiroozi/UTFusion/refs/heads/main/Profiling/HeapStack/HeapUsage.png"
  },
  {
    icon: VideocamIcon,
    titleKey: "step.stereo",
    descKey: "step.stereoDesc",
    image: "https://www.waveshare.com/media/catalog/product/i/m/imx219-83-stereo-camera-1.jpg"
  },
  {
    icon: StraightenIcon,
    titleKey: "step.tof",
    descKey: "step.tofDesc",
    image: "https://www.smart-prototyping.com/image/cache/data/2020/10/102076%20VL53L1X/1-750x750.JPG"
  }
];

const Sensors = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";
  const intro = t("sensorsIntro").split("\n").filter(p => p.trim() !== "");

  return (
    <Container className="my-5" dir={isRtl ? "rtl" : "ltr"}>
      <hr />
      <div className="mb-4" />
      
      <Row className={`align-items-center ${isRtl ? "flex-row-reverse" : ""}`}>
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
            alt={t("decisionImageAlt")}
            fluid
            rounded
            className={`shadow-sm ${isRtl ? "img-rtl" : ""}`}
          />
        </Col>
      </Row>

      <Stepper
        orientation="vertical"
        sx={{ "& .MuiStepConnector-line": { minHeight: 24 } }}
      >
        {SENSOR_STEPS.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <Step key={index} active>
              <StepLabel icon={<IconComponent />}>
                <Typography variant="h6" className="white">
                  {t(step.titleKey)}
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
                      backgroundColor: "#ffffffe5",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography mt={2} sx={{ flex: 1, textAlign: isRtl ? "right" : "left" }}>
                      {t(step.descKey)}
                    </Typography>
                    <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center"
                      }}
                    >
                    <img
                      src={step.image}
                      style={{
                        width: "100%",
                        backgroundColor: "white",
                        borderRadius: 10,
                        maxWidth: "500px",
                        margin: "1rem"
                      }}
                      alt={t(step.titleKey)}
                    />
                    </div>
                  </Paper>
                </motion.div>
              </StepContent>
            </Step>
          );
        })}
      </Stepper>
    </Container>
  );
};

export default Sensors;
