import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarExterna } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { Projects } from "./pages/Projects/Projects";
import { About } from "./pages/About/About";
import { Certifications } from "./pages/Certifications/Certifications";

function App() {
  return (
    <BrowserRouter>
      <NavbarExterna />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
