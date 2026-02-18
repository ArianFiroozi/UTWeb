import { useI18n } from "../i18n/I18nContext";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Stepper, Step, StepLabel, StepContent, Typography, Paper } from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import SettingsInputComponentIcon from "@mui/icons-material/SettingsInputComponent";
import { motion } from "framer-motion";
import img1 from "../assets/utcar1.jpg";
import rb5 from "../assets/rb5.jpg";
import jn from "../assets/jn.png";
import esp32 from "../assets/esp32.png";
import "./shared.css";

const HARDWARE_STEPS = [
  { labelKey: "step.rb5", descKey: "step.rb5Desc", icon: PsychologyIcon, image: rb5, bgWhite: false },
  { labelKey: "step.jetson", descKey: "step.jetsonDesc", icon: DeveloperBoardIcon, image: jn, bgWhite: true },
  { labelKey: "step.esp32", descKey: "step.esp32Desc", icon: SettingsInputComponentIcon, image: esp32, bgWhite: true },
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

const Hardware = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";
  const intro = t("hardwareIntro").split("\n").filter((p) => p.trim() !== "");

  return (
    <Container className="my-5" dir={isRtl ? "rtl" : "ltr"}>
      <hr />
      <div className="mb-4" />

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
        {HARDWARE_STEPS.map((step, index) => {
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
                    <Typography mt={2} sx={{ flex: 1, textAlign: "left" }}>
                      {t(step.descKey)}
                    </Typography>
                    <img
                      src={step.image}
                      alt={t(step.labelKey)}
                      style={{
                        width: "100%",
                        borderRadius: 10,
                        maxWidth: "500px",
                        margin: "1rem",
                        backgroundColor: step.bgWhite ? "white" : "transparent",
                      }}
                    />
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

export default Hardware;
