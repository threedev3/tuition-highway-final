import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import TestimonialsList from "../../components/TestimonialsList/TestimonialsList";
import SubjectSlider from "../../components/SubjectSlider/SubjectSlider";

const TestimonialsPage = ({ demoRef }) => {
  return (
    <div>
      <SubHeroSection
        demoRef={demoRef}
        title="SUCCESS STORIES"
        description="Recommended by hundreds of delighted parents"
      />
      <TestimonialsList />
      <SubjectSlider demoRef={demoRef} />
      <div ref={demoRef}>
        <ContactForm demoRef={demoRef} />
      </div>
    </div>
  );
};

export default TestimonialsPage;
