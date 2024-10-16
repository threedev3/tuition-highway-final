import React from "react";
import SubjectHeroSection from "../../components/SubjectHeroSection/SubjectHeroSection";
import TermsSection from "../../components/TermsSection/TermsSection";

const TermsOfService = ({ demoRef }) => {
  return (
    <div>
      <SubjectHeroSection
        demoRef={demoRef}
        title="Terms Of Service"
        description="The best and most secured service for our clients"
        btnText={"Back To Home"}
      />
      <TermsSection title="Terms of Service" />
      
    </div>
  );
};

export default TermsOfService;
