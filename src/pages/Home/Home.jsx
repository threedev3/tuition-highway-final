import React, { useRef } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import TutorNumbers from "../../components/TutorNumbers/TutorNumbers";
import Reasons from "../../components/Reasons/Reasons";
import Subjects from "../../components/Subjects/Subjects";
import CurriculumSection from "../../components/CurriculumSection/CurriculumSection";
import Tutors from "../../components/Tutors/Tutors";
import Learn from "../../components/Learn/Learn";
import Testimonials from "../../components/Testimonials/Testimonials";
import Working from "../../components/Working/Working";
import ContactForm from "../../components/ContactForm/ContactForm";
import Faq from "../../components/Faq/Faq";

const Home = ({ demoRef }) => {
  return (
    <div>
      <HeroSection demoRef={demoRef} />
      <TutorNumbers />
      <Reasons demoRef={demoRef} />
      <Subjects />
      <CurriculumSection demoRef={demoRef} />
      {/* <FreeDemo demoRef={demoRef} /> */}
      <Tutors />
      <Learn
        firstHead="Learn with 100%"
        secondHead="Satisfaction guaranteed"
        description="If your lesson doesn't take place, or you are not satisfied with
            your tutor, we will do our best to ensure that your learning goals
            are achieved!"
        style="text-white xl:text-lg min-[896px]:text-base sm:text-sm text-sm md:text-start text-center"
        textStyle="min-[1140px]:max-w-xl min-[896px]:max-w-md min-[836px]:max-w-sm md:max-w-xs max-w-sm"
      />
      <Testimonials />
      <Working />
      <div ref={demoRef}>
        <ContactForm
          demoRef={demoRef}
          firstString={"Request a Free "}
          secondString={"Demo"}
        />
      </div>
      <Faq />
    </div>
  );
};

export default Home;
