import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import UTNavbar from "./components/UTNavbar";
import UTFooter from "./components/UTFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Decision from "./pages/Decision";
import Projects from "./pages/projects";
import People from "./pages/people";
import ComputerVision from "./pages/ComputerVision";
import Sensors from "./pages/Sensors";
import Simulation from "./pages/Simulation";
import Hardware from "./pages/Hardware";
import Gallery from "./pages/Gallery";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function SkipLink() {
  return (
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
  );
}

function App() {
  useEffect(() => {
    document.title = "UTCar";
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <SkipLink />
      <UTNavbar />
      <main id="main-content" className="mwrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/people" element={<People />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects/decision-making" element={<Decision />} />
          <Route path="/projects/cv" element={<ComputerVision />} />
          <Route path="/projects/sensor-integration" element={<Sensors />} />
          <Route path="/projects/simulation" element={<Simulation />} />
          <Route path="/projects/hardware" element={<Hardware />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <UTFooter />
    </BrowserRouter>
  );
}

export default App;
