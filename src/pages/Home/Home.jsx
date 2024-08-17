import React, { useRef } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import TutorNumbers from "../../components/TutorNumbers/TutorNumbers";
import Reasons from "../../components/Reasons/Reasons";
import Subjects from "../../components/Subjects/Subjects";
import CurriculumSection from "../../components/CurriculumSection/CurriculumSection";
import Tutors from "../../components/Tutors/Tutors";
import Learn from "../../components/Learn/Learn";
import Testimonials from "../../components/Testimonials/Testimonials";
import Working from "../../components/Working/Working";
import ContactForm from "../../components/ContactForm/ContactForm";
import Faq from "../../components/Faq/Faq";

const Home = ({ demoRef }) => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
