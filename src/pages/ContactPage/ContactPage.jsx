import React from "react";
import SubjectHeroSection from "../../components/SubjectHeroSection/SubjectHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";


const ContactPage = ({ demoRef, handleNavClick }) => {
  return (
    <div>
      <SubjectHeroSection
        title="Contact Us"
        description="Paving the way with smart online tutoring solutions for IGCSE, A-Levels, IB & other Curriculums"
        btnText="Contact Now"
        handleNavClick={handleNavClick}
      />

      <div ref={demoRef}>
        <ContactForm
          demoRef={demoRef}
          firstString={"Contact Us For "}
          secondString={"More Details"}
          tagLine="Paving the way with smart online tutoring solutions for IGCSE, A-Levels, IB & other Curriculums"
        />
      </div>
    </div>
  );
};

export default ContactPage;
