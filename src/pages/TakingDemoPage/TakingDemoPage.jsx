import React from "react";
import SubjectHeroSection from "../../components/SubjectHeroSection/SubjectHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import EnrollDetails from "../../components/EnrollDetails/EnrollDetails";
import { enrollDetails } from "../../data/data";

const TakingDemoPage = ({ demoRef }) => {
  return (
    <div>
      <SubjectHeroSection
        demoRef={demoRef}
        title="Take A Free Demo"
        description="Experience our personalised, high-quality online lessons and simplify your child’s educational journey"
      />
      <EnrollDetails
        demoRef={demoRef}
        title="Start Your Free Trial Now!"
        content={enrollDetails}
      />
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

export default TakingDemoPage;
