import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import "typeface-montserrat";
import HeroSection from "./components/HeroSection/HeroSection";
import About from "./components/AboutSection/AboutSection";
import ContactUs from "./components/ContactUsSection/ContactUs";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily: "montserrat" }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
