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

function App() {
    useEffect(() => {
    document.title = "UTCar";
  }, []);

  return (
    <BrowserRouter>
      <UTNavbar />
      <div className="mwrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/people" element={<People />} />
          <Route path="/projects/decisionmaking" element={<Decision />} />
          <Route path="/projects/cv" element={<ComputerVision />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <UTFooter />
    </BrowserRouter>
  );
}

export default App
