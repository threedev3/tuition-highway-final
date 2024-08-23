import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useNavigate, useParams } from "react-router-dom";
import { subjectsOffering } from "../../data/data";
import NotFoundPage from "../../components/NotFoundPage/NotFoundPage";
import SubjectHeroSection from "../../components/SubjectHeroSection/SubjectHeroSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import SubjectSlider from "../../components/SubjectSlider/SubjectSlider";
import SubjectDetailComp from "../../components/SubjectDetailComp/SubjectDetailComp";

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
        description="Give your child a head start by enrolling them in our comprehensive American Curriculum program, all from the comfort of your home."
      />
      <SubjectDetailComp demoRef={demoRef} subject={subject} />
      <Testimonials />
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
