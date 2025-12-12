import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UTNavbar from "./components/UTNavbar";
import UTFooter from "./components/UTFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/projects";
import People from "./pages/people";

function App() {
  return (
    <BrowserRouter>
      <UTNavbar />
      <div style={{
            padding: 0,
            display: "flex",
            flex: 1,
            width: "100vw",
            minHeight: "100vh",
            }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/people" element={<People />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <UTFooter />
    </BrowserRouter>
  );
}

export default App
