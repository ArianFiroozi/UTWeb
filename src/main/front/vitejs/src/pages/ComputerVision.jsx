import { useI18n } from "../i18n/I18nContext";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Stepper, Step, StepLabel, StepContent, Typography, Paper } from "@mui/material";
import {
  Search,
  ArrowForwardIos as ArrowForwardIosIcon,
  AddRoad as AddRoadIcon,
  SquareFoot as SquareFootIcon
} from "@mui/icons-material";
import { motion } from "framer-motion";
import DepthImage from "./DepthImage.jsx";
import img1 from "../assets/utcar1.png";
import imgdepth from "../assets/depth.jpg";
import jsonDepthArray from "../assets/depth.json";
import vid_test1 from "../assets/videos/test1.mp4";
import vid_lane from "../assets/videos/lanedetection.mp4";
import yolo from "../assets/yolo.jpg";
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

const ComputerVision = () => {
  const { t, lang } = useI18n();
  const isRtl = lang === "fa";
  const depthMap1 = new Float32Array(jsonDepthArray);
  const intro = t("cvIntro").split("\n").filter(p => p.trim() !== "");

  const CV_STEPS = [
    {
      icon: ArrowForwardIosIcon,
      titleKey: "step.tracking",
      descKey: "step.trackingDesc",
      media: { type: "video", src: vid_test1 }
    },
    {
      icon: AddRoadIcon,
      titleKey: "step.lane",
      descKey: "step.laneDesc",
      media: { type: "video", src: vid_lane }
    },
    {
      icon: SquareFootIcon,
      titleKey: "step.depth",
      descKey: "step.depthDesc",
      media: { type: "depth", src: imgdepth, depthData: depthMap1 }
    },
    {
      icon: Search,
      titleKey: "step.yolo",
      descKey: "step.yoloDesc",
      media: { type: "image", src: yolo }
    }
  ];

  const renderMedia = (media, altText) => {
    switch (media.type) {
      case "video":
        return (
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
            <source src={media.src} type="video/mp4" />
          </video>
          </div>
        );
      case "depth":
        return (
          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center"
            }}
          >
          <DepthImage
            imageSrc={media.src}
            depthData={media.depthData}
            width={320}
            height={320}
            style={{
              width: "150px",
              borderRadius: "10px",
              marginTop: "1rem"
            }}
          />
          </div>
        );
      case "image":
      default:
        return (
          <div
                      style={{
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        padding: "1rem"
                      }}
                    >
          <img
            src={media.src}
            style={{ width: "100%", borderRadius: 10, maxWidth: "500px", margin: "1rem" }}
            alt={altText}
          />
          </div>
        );
    }
  };

  return (
    <Container className="my-5" dir={isRtl ? "rtl" : "ltr"}>
      <hr />
      <div className="mb-4" />
      
      <Row className={`align-items-center ${isRtl ? "flex-row-reverse" : ""}`}>
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
        {CV_STEPS.map((step, index) => {
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
                    {renderMedia(step.media, t(step.titleKey))}
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

export default ComputerVision;
