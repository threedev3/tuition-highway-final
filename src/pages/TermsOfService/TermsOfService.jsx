import React from "react";
import SubjectHeroSection from "../../components/SubjectHeroSection/SubjectHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import TermsSection from "../../components/TermsSection/TermsSection";

const TermsOfService = ({ demoRef }) => {
  return (
    <div>
      <SubjectHeroSection
        demoRef={demoRef}
        title="Terms Of Service"
        description="The best and most secured service for our clients"
      />
      <TermsSection title="Terms of Service" />
      <div ref={demoRef}>
        <ContactForm
          demoRef={demoRef}
          firstString={"Request a Free "}
          secondString={"Demo"}
        />
      </div>
    </div>
  );
};

export default TermsOfService;
