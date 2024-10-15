import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useNavigate, useParams } from "react-router-dom";
import { curriculumOffering, subjectsOffering } from "../../data/data";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import SubjectHeroSection from "../../components/SubjectHeroSection/SubjectHeroSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import SubjectSlider from "../../components/SubjectSlider/SubjectSlider";
import SubjectDetailComp from "../../components/SubjectDetailComp/SubjectDetailComp";
import CurriculumDetailComp from "../../components/CurriculumDetailComp/CurriculumDetailComp";
import CurriculumSection from "../../components/CurriculumSection/CurriculumSection";

const CurriculumPage = ({ demoRef }) => {
  const { slug } = useParams();

  const curriculum = curriculumOffering.find((s) => s.slug === slug);

  if (!curriculum) {
    return <NotFoundPage />;
  }
  return (
    <div>
      <SubjectHeroSection
        demoRef={demoRef}
        title={curriculum.title}
        description="Give your child a head start by enrolling them in our comprehensive American Curriculum program, all from the comfort of your home."
      />
      <CurriculumDetailComp demoRef={demoRef} curriculum={curriculum} />
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

export default CurriculumPage;
