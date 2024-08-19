import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import Faq from "../../components/Faq/Faq";
import ContactForm from "../../components/ContactForm/ContactForm";
import Learn from "../../components/Learn/Learn";
import AboutSection from "../../components/AboutSection/AboutSection";

const About = ({ demoRef }) => {
  return (
    <div>
      <SubHeroSection
        demoRef={demoRef}
        title="ABOUT US"
        description="Paving the way with smart online tutoring solutions for IGCSE, A-Levels, IB & other Curriculums"
      />
      <AboutSection />
      {/* <Learn
        firstHead="Online Tutoring"
        secondHead="With Real Teachers"
        description="Instant online tutoring - all subjects, anytime, anywhere"
      /> */}
      <div ref={demoRef}>
        <ContactForm demoRef={demoRef} />
      </div>
      <Faq />
    </div>
  );
};

export default About;