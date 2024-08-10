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

function App() {
  const demoRef = useRef(null);

  return (
    <>
      <Navbar demoRef={demoRef} />
      <HeroSection />
      <Reasons demoRef={demoRef} />
      <TutorNumbers />
      <Subjects />
      <FreeDemo demoRef={demoRef} />
      <Testimonials />
      <Working />
      <Tutors />
      <div ref={demoRef}>
        <ContactForm demoRef={demoRef} />
      </div>
      <Faq />
      <Footer />
    </>
  );
}

export default App;
