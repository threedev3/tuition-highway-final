import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import CurriculumSection from "../../components/CurriculumSection/CurriculumSection";
import SubjectsList from "../../components/SubjectsList/SubjectsList";

const SubjectsPage = ({ demoRef }) => {
  return (
    <div>
      <SubHeroSection
        demoRef={demoRef}
        title="Explore Our Comprehensive Subject Offerings"
        description="Paving the way with smart online tutoring solutions for IGCSE & A- Levels"
      />
      <SubjectsList demoRef={demoRef} />
      <CurriculumSection demoRef={demoRef} />
      <div ref={demoRef}>
        <ContactForm demoRef={demoRef} />
      </div>
    </div>
  );
};

export default SubjectsPage;
