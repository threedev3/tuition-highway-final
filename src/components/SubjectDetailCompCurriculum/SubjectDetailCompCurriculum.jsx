import React, { useEffect, useRef, useState } from "react";
import { fadedCircle } from "../../assets/img/images";
import { motion, AnimatePresence } from "framer-motion";
import Outcomes from "../Outcomes/Outcomes";
import OutcomeAccordian from "../Accordian/OutcomeAccordian";
import { learningOutcomesImg } from "../../assets/img/images";

const SubjectDetailCompCurriculum = ({ demoRef, subject, curriculumData, handleNavClick }) => {
  // const [activeView, setActiveView] = useState("");
  const tabsRef = useRef(null);
  // const floatingTabsEnd = useRef(null);

 

  useEffect(() => {
    console.log("Curriculum Data", curriculumData);
  }, [curriculumData]);

  // const activeSubjectData = subject.content?.[activeView] || {};
  // const { description = [], learningOutcomes = [] } = activeSubjectData;
  // const isGeneralView = !activeView;

  // const outcomes = [
  //   {
  //     title: "Learning Outcomes",
  //     answer: isGeneralView
  //       ? subject.generalLearningOutcome
  //       : activeSubjectData?.learningOutcomes || [],
  //   },
  // ];

  const renderItems = () => {
    // console.log("activeSubjectData", activeSubjectData);
    // console.log("Subject content", subject.content);

    return (
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 flex flex-col gap-10">
          <div className="flex flex-col gap-6 xl:max-w-3xl lg:max-w-xl max-w-full">
            <h3 className="xl:text-[36px] xl:leading-tight md:text-4xl sm:text-3xl text-[27px] lg:leading-[3.5rem] leading-8 font-extrabold text-headingColor">
              About The Course
            </h3>
            {/* <div className="flex flex-col gap-6">
              {subject.generalData.map((point, index) => (
                <div key={index} className="flex flex-row gap-4">
                  <div className="sm:w-3 sm:h-3 w-3 h-3 bg-blueBtn rounded-full flex-shrink-0 mt-1.5"></div>
                  <p className="xl:text-base sm:text-sm text-sm font-semibold">
                    {point}
                  </p>
                </div>
              ))}
            </div> */}

            <div className="flex flex-col gap-6 ">
              {curriculumData.description.map((point, index) => (
                <div key={index} className="flex flex-row gap-4">
                  <div className="sm:w-3 sm:h-3 w-3 h-3 bg-blueBtn rounded-full flex-shrink-0 mt-1.5"></div>
                  <p className="xl:text-base sm:text-sm text-sm font-semibold">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="text-white font-semibold py-2 px-5 bg-orangeHeading rounded-md xl:max-w-48 max-w-40 xl:text-base text-sm"
              onClick={() => handleNavClick("Demo")}
            >
              Book A Free Trial
            </button>
          </div>

          <div className="lg:block flex justify-center">
            <img
              src={subject.heroImg}
              alt=""
              className="w-[480px] object-contain"
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div>
      <div
        ref={tabsRef}
        className="relative md:py-12 py-8 sm:px-12 px-6 max-w-full min-h-[40vh]"
      >
        <div className="absolute xl:-top-56 -top-48 left-0 -z-10 xl:w-48 w-40 sm:block hidden">
          <img src={fadedCircle} alt="" className="object-contain" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col lg:gap-16 md:gap-12 gap-8 ">
          <AnimatePresence>
            <div className="">{renderItems()}</div>
          </AnimatePresence>
        </div>
      </div>

      <div
        className="relative md:py-12 py-8 sm:px-12 px-6 max-w-full bg-subjectsBg "
        // ref={floatingTabsEnd}
      >
        <div className="max-w-[1400px] mx-auto ">
          <div className="max-w-full ">
            {/* {curriculumData.learningOutcomes.map((item, index) => ( */}
              <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 flex flex-col gap-6">
                <div className="lg:block hidden">
                  <img
                    src={learningOutcomesImg}
                    alt=""
                    className="w-[500px] object-contain"
                  />
                </div>
                <div className="flex flex-col gap-6">
                  <div className="w-full">
                    <h3 className="xl:text-[36px] xl:leading-tight md:text-4xl sm:text-3xl text-[27px] lg:leading-[3.5rem] leading-8 font-extrabold text-headingColor">
                      Learning Outcomes
                    </h3>
                  </div>
                  <div className="flex flex-col gap-4 w-full">
                    {curriculumData.learningOutcomes.map((item, index) => (
                      <div className="flex flex-row gap-4 w-full" key={index}>
                        <div className="sm:w-3 sm:h-3 w-3 h-3 bg-blueBtn rounded-full flex-shrink-0 mt-1.5"></div>
                        <p className="xl:text-base sm:text-sm text-sm font-semibold">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetailCompCurriculum;
