import React, { useEffect, useState } from "react";
import { fadedCircle, subjectImg } from "../../assets/img/images";
import { motion, AnimatePresence } from "framer-motion";
import Outcomes from "../Outcomes/Outcomes";
import OutcomeAccordian from "../Accordian/OutcomeAccordian";

const SubjectDetailComp = ({ demoRef, subject }) => {
  const [activeView, setActiveView] = useState("");

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const sections = {
    Demo: demoRef,
  };

  const handleNavClick = (section) => {
    const targetRef = sections[section];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const activeSubjectData = subject.content?.[activeView] || {};
  const { description = [], learningOutcomes = [] } = activeSubjectData;
  const isGeneralView = !activeView;

  const outcomes = [
    {
      title: "Learning Outcomes",
      answer: isGeneralView
        ? subject.generalLearningOutcome // Default learning outcome if no view is selected
        : activeSubjectData?.learningOutcomes || [],
    },
  ];

  const renderItems = () => {
    console.log("activeSubjectData", activeSubjectData);
    console.log("Subject content", subject.content);

    return (
      <motion.div
        className=""
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 flex flex-col gap-6">
          <div className="flex flex-col gap-8 xl:max-w-3xl lg:max-w-xl max-w-full">
            <h3 className="xl:text-[40px] xl:leading-tight md:text-4xl sm:text-3xl text-[27px] lg:leading-[3.5rem] leading-8 font-extrabold text-headingColor">
              About The Course
            </h3>
            {!activeView && (
              <div className="flex flex-col gap-6">
                {subject.generalData.map((point, index) => (
                  <div key={index} className="flex flex-row gap-4">
                    <div className="sm:w-3 sm:h-3 w-3 h-3 bg-blueBtn rounded-full flex-shrink-0 mt-1.5"></div>
                    <p className="xl:text-base sm:text-sm text-sm font-semibold">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {activeView && (
              <div className="flex flex-col gap-6 ">
                {/* Render Description */}
                {/* <div className="flex flex-col gap-4">
                  <h4 className="text-lg font-bold">Description</h4> */}
                {description.map((point, index) => (
                  <div key={index} className="flex flex-row gap-4">
                    <div className="sm:w-3 sm:h-3 w-3 h-3 bg-blueBtn rounded-full flex-shrink-0 mt-1.5"></div>
                    <p className="xl:text-base sm:text-sm text-sm font-semibold">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              // </div>
            )}

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
      <div className="relative md:py-12 py-8 sm:px-12 px-6 max-w-full min-h-[40vh]">
        <div className="absolute xl:-top-56 -top-48 left-0 -z-10 xl:w-56 w-40">
          <img src={fadedCircle} alt="" className="object-contain" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-20 gap-8 ">
          <div className="flex sm:flex-row flex-col justify-center items-center flex-wrap gap-6">
            {Object.keys(subject.content || {}).map((curriculum, index) => (
              <motion.button
                key={index}
                onClick={() => handleViewChange(curriculum)}
                className={`py-1.5 sm:px-6 px-4 rounded-full xl:text-base text-sm transition-all duration-300 sm:w-auto w-72 ${
                  activeView === curriculum
                    ? "bg-activeBlueBtn text-white"
                    : "bg-subjectBtn text-white"
                }`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", damping: 17 }}
              >
                {curriculum}
              </motion.button>
            ))}
          </div>

          <AnimatePresence>
            <div className="">{renderItems()}</div>
          </AnimatePresence>
        </div>
      </div>
      {/* <Outcomes subject={subject} /> */}
      <div className="relative md:py-12 py-8 px-6 max-w-full bg-subjectsBg ">
        <div className="max-w-[1400px] mx-auto ">
          <div className="max-w-full ">
            {outcomes.map((item, index) => (
              <OutcomeAccordian
                key={index}
                question={item.title}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetailComp;
