import { useI18n } from "../i18n/I18nContext";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Stepper, Step, StepLabel, StepContent, Typography, Paper } from "@mui/material";
import { Science as ScienceIcon, ViewInAr as ViewInArIcon, SmartToy as SmartToyIcon } from "@mui/icons-material";
import { motion } from "framer-motion";
import img1 from "../assets/utcar1.jpg";
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

const SIMULATION_STEPS = [
  {
    icon: ScienceIcon,
    titleKey: "step.carla",
    descKey: "step.carlaDesc",
    image: "https://carla.org//img/carla.jpg"
  },
  {
    icon: ViewInArIcon,
    titleKey: "step.highway",
    descKey: "step.highwayDesc",
    image: "https://raw.githubusercontent.com/eleurent/highway-env/gh-media/docs/media/mcts.gif?raw=true"
  },
  {
    icon: SmartToyIcon,
    titleKey: "step.gym",
    descKey: "step.gymDesc",
    image: "https://repository-images.githubusercontent.com/108592307/2a11d000-9a90-11ea-9774-463c6ead181d"
  }
];

const Simulation = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";
  const intro = t("simulationIntro").split("\n").filter(p => p.trim() !== "");

  return (
    <Container className="my-5" dir={isRtl ? "rtl" : "ltr"}>
      <hr />
      <div className="mb-4" />
      
      <Row className={`align-items-center ${isRtl ? "flex-row-reverse" : ""}`}>
        <Col md={6}>
          <h2 className="mb-4">{t("simulationTitle")}</h2>
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
        {SIMULATION_STEPS.map((step, index) => {
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

export default Simulation;
