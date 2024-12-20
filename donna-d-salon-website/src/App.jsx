import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/global/header";
import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Services from "./pages/ServicesPage";
import Gallery from "./pages/GalleryPage";
import Footer from "./components/global/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
