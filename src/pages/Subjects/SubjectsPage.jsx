import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import CurriculumSection from "../../components/CurriculumSection/CurriculumSection";
import SubjectsList from "../../components/SubjectsList/SubjectsList";

const SubjectsPage = ({ demoRef, handleNavClick }) => {
  return (
    <div>
      <SubHeroSection
        title="Explore Our Comprehensive Subject Offerings"
        description="Paving the way with smart online tutoring solutions for IGCSE & A- Levels"
        handleNavClick={handleNavClick}
      />
      <SubjectsList  handleNavClick={handleNavClick} />
      <CurriculumSection handleNavClick={handleNavClick} />
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

export default SubjectsPage;
