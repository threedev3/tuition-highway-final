import React from "react";
import SubjectHeroSection from "../../components/SubjectHeroSection/SubjectHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import EnrollDetails from "../../components/EnrollDetails/EnrollDetails";
import { enrollDetails } from "../../data/data";

const ContactPage = ({ demoRef }) => {
  return (
    <div>
      <SubjectHeroSection
        demoRef={demoRef}
        title="Contact Us"
        description="Paving the way with smart online tutoring solutions for IGCSE, A-Levels, IB & other Curriculums"
        btnText="Contact Now"
      />

      <div ref={demoRef}>
        <ContactForm
          demoRef={demoRef}
          firstString={"Contact Us For "}
          secondString={"More Details"}
        />
      </div>
    </div>
  );
};

export default ContactPage;
