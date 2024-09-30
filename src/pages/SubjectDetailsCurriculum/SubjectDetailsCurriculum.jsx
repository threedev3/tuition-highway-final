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
import SubjectDetailCompCurriculum from "../../components/SubjectDetailCompCurriculum/SubjectDetailCompCurriculum";

const SubjectDetailsCurriculum = ({ demoRef }) => {
  const { slug, curriculumType } = useParams();

  const subject = subjectsOffering.find((s) => s.slug === slug);

  if (!subject) {
    return <NotFoundPage />;
  }

  const curriculumData = subject.content?.[curriculumType];

//   console.log("Curriculum data", curriculumData);

  if (!curriculumData) {
    return <NotFoundPage />;
  }

  return (   
    <div>
      <SubjectHeroSection
        demoRef={demoRef}
        title={(curriculumType === "igcse" || curriculumType === "cbse" ? curriculumType.toUpperCase() : curriculumType.replace("-", " "))  + " " + subject.title  }
        description={`Explore ${curriculumType === "igcse" || curriculumType === "cbse" ? curriculumType.replace("-", " ").toUpperCase() : curriculumType.replace("-", " ")} in ${subject.title}`}
        curriculumType={curriculumType}
      />
      <SubjectDetailCompCurriculum demoRef={demoRef} subject={subject} curriculumData={curriculumData} />
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

export default SubjectDetailsCurriculum;
