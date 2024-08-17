import React from "react";
import { subjectsOffering, testimonials } from "../../data/data";
import SubjectsCard from "../SubjectsCard/SubjectsCard";

const SubjectsList = ({ demoRef }) => {
  return (
    <div className="relative md:py-20 py-12 px-6 max-w-full bg-subjectsBg">
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-20 gap-8 ">
        <div className="grid lg:grid-cols-4 lg:gap-6 sm:grid-cols-2 md:gap-6 grid-cols-1 gap-3 ">
          {subjectsOffering.map((item, index) => (
            <SubjectsCard item={item} key={index} demoRef={demoRef} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectsList;
