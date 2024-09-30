import React from "react";
import SubjectHeroSection from "../../components/SubjectHeroSection/SubjectHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import PolicySection from "../../components/PolicySection/PolicySection";

const PrivacyPolicy = ({ demoRef }) => {
  return (
    <div>
      <SubjectHeroSection
        demoRef={demoRef}
        title="Privacy Policy"
        description="The best and most secured service for our clients"
        btnText={"Back To Home"}
      />
      <PolicySection title="Privacy Policy" />
      {/* <div ref={demoRef}>
        <ContactForm
          demoRef={demoRef}
          firstString={"Request a Free "}
          secondString={"Demo"}
        />
      </div> */}
    </div>
  );
};

export default PrivacyPolicy;
