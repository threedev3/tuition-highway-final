import { useRef } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import FreeDemo from "./components/FreeDemo/FreeDemo";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import Reasons from "./components/Reasons/Reasons";
import Subjects from "./components/Subjects/Subjects";
import Testimonials from "./components/Testimonials/Testimonials";
import TutorNumbers from "./components/TutorNumbers/TutorNumbers";
import Tutors from "./components/Tutors/Tutors";
import Working from "./components/Working/Working";
import { BrowserRouter as Router } from "react-router-dom";
import CurriculumSection from "./components/CurriculumSection/CurriculumSection";
import Learn from "./components/Learn/Learn";

function App() {
  const demoRef = useRef(null);

  return (
    <>
      <Router>
        <Navbar demoRef={demoRef} />
        <HeroSection demoRef={demoRef} />
        <TutorNumbers />
        <Reasons demoRef={demoRef} />
        <Subjects />
        <CurriculumSection demoRef={demoRef} />
        {/* <FreeDemo demoRef={demoRef} /> */}
        <Tutors />
        <Learn />
        <Testimonials />
        <Working />
        <div ref={demoRef}>
          <ContactForm demoRef={demoRef} />
        </div>
        <Faq />
        <Footer />
      </Router>
    </>
  );
}

export default App;
