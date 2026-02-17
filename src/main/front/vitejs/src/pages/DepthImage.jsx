import Image from "react-bootstrap/Image";
import "./About.css";
import React from "react";
import { useI18n } from "../i18n/I18nContext";

const DepthImage = ({ imageSrc, depthData, width, height }) => {
  const canvasRef = React.useRef(null);
  const [hoverInfo, setHoverInfo] = React.useState(null);
  const handleMouseLeave = () => {
    setHoverInfo(null);
  };
  const { t, lang } = useI18n();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new window.Image();
    img.onload = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
    };
    img.src = imageSrc;
    img.onerror = () => {
      console.error("Failed to load image:", imageSrc);
    };

  }, [imageSrc, width, height]);

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) * (width / rect.width));
    const y = Math.floor((e.clientY - rect.top) * (height / rect.height));

    const index = y * width + x;
    const distance = depthData[index];

    setHoverInfo({ x: e.clientX, y: e.clientY, distance });
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "100%",
          cursor: "crosshair",
          maxHeight: "500px",
          maxWidth: "500px",
          borderRadius: "10px", // Apply border radius for smooth edges
          overflow: "hidden" // Prevent overflow
        }}
      />
      {hoverInfo && (
        <div
          style={{
            position: "fixed",
            left: hoverInfo.x + 10,
            top: hoverInfo.y + 10,
            background: "rgba(0,0,0,0.7)",
            color: "#fff",
            padding: "4px 8px",
            borderRadius: 4,
            pointerEvents: "none",
            fontSize: 12
          }}
        >
          {hoverInfo.distance.toFixed(2)} {t("cm")}
        </div>
      )}
    </>
  );
};

export default DepthImage;
