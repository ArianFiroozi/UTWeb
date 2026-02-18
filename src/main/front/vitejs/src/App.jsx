import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UTNavbar from "./components/UTNavbar";
import UTFooter from "./components/UTFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Decision from "./pages/Decision";
import Projects from "./pages/projects";
import People from "./pages/people";
import ComputerVision from "./pages/ComputerVision";
import React, { useEffect } from "react";
import "./App.css"
import Sensors from "./pages/Sensors";
import Simulation from "./pages/Simulation";
import Hardware from "./pages/Hardware";
// import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
    useEffect(() => {
    document.title = "UTCar";
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <UTNavbar />
      <div className="mwrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/people" element={<People />} />
          <Route path="/projects/decision-making" element={<Decision />} />
          <Route path="/projects/cv" element={<ComputerVision />} />
          <Route path="/projects/sensor-integration" element={<Sensors />} />
          <Route path="/projects/simulation" element={<Simulation />} />
          <Route path="/projects/hardware" element={<Hardware />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <UTFooter />
    </BrowserRouter>
  );
}

export default App
