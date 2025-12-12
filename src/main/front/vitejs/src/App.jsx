import { BrowserRouter, Routes, Route } from "react-router-dom";
import UTNavbar from "./components/UTNavbar";
import UTFooter from "./components/UTFooter";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/projects";

function App() {
  return (
    <BrowserRouter>
      <UTNavbar />
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
      <UTFooter />
    </BrowserRouter>
  );
}

export default App
