import { useI18n } from "../i18n/I18nContext";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Stepper, Step, StepLabel, StepContent, Typography, Paper } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { motion } from "framer-motion";
import img1 from "../assets/utcar1.png";
import vid_carla_multi from "../assets/videos/decision-carla-multi.mp4";
import vid_carla_single from "../assets/videos/decision-carla-single.mp4";
import vid_highway_multi from "../assets/videos/decision-highway-multi.mp4";
import "./shared.css";

const DECISION_STEPS = [
  { labelKey: "step.carlaMulti", descKey: "step.carlaMultiDesc", icon: ArrowForwardIosIcon, video: vid_carla_multi },
  { labelKey: "step.highway", descKey: "step.highwayDesc", icon: CarCrashIcon, video: vid_highway_multi },
  { labelKey: "step.carlaSingle", descKey: "step.carlaSingleDesc", icon: DirectionsCarIcon, video: vid_carla_single },
];

const popVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Decision = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";
  const intro = t("decisionIntro").split("\n").filter((p) => p.trim() !== "");

  return (
    <Container className="my-5" dir={isRtl ? "rtl" : "ltr"}>
      <hr />
      <div className="mb-4" />

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
            alt={t("alt.utcarCar")}
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
        {DECISION_STEPS.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <Step key={index} active>
              <StepLabel icon={<IconComponent />}>
                <Typography variant="h6" className="white">
                  {t(step.labelKey)}
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
                        justifyContent: "center",
                        padding: "1rem"
                      }}
                    >
                    <video
                      controls
                      style={{ width: "100%", borderRadius: 10, maxWidth: "700px", margin: "1rem" }}
                    >
                      <source src={step.video} type="video/mp4" />
                    </video>
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

export default Decision;
