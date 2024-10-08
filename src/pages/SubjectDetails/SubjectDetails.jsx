import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useNavigate, useParams } from "react-router-dom";
import { subjectsOffering } from "../../data/data";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import SubjectHeroSection from "../../components/SubjectHeroSection/SubjectHeroSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import SubjectSlider from "../../components/SubjectSlider/SubjectSlider";
import SubjectDetailComp from "../../components/SubjectDetailComp/SubjectDetailComp";
import CurriculumSection from "../../components/CurriculumSection/CurriculumSection";

const SubjectDetails = ({ demoRef }) => {
  const { slug } = useParams();

  const subject = subjectsOffering.find((s) => s.slug === slug);

  if (!subject) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <SubjectHeroSection
        demoRef={demoRef}
        title={subject.title}
        description="Paving the way with smart online tutoring solutions for IGCSE & A-Levels"
      />
      <SubjectDetailComp demoRef={demoRef} subject={subject} />
      <Testimonials />
      <CurriculumSection demoRef={demoRef} />
      <SubjectSlider demoRef={demoRef} />

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

export default SubjectDetails;
