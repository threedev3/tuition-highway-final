import React, { useEffect, useState } from "react";
import { fadedCircle, subjectImg } from "../../assets/img/images";
import { motion, AnimatePresence } from "framer-motion";
import Outcomes from "../Outcomes/Outcomes";

const SubjectDetailComp = ({ demoRef, subject }) => {
  // const initialCurriculum = Object.keys(subject.content)[0];
  const [activeView, setActiveView] = useState("");

  useEffect(() => {
    const initialCurriculum = Object.keys(subject.content || {})[0] || "";
    setActiveView(initialCurriculum);
  }, [subject]);

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

  const renderItems = () => {
    // const activeSubjectData = subject.content[activeView];

    const activeSubjectData = subject.content?.[activeView] || [];

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
            <h3 className="xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl leading-none text-headingColor">
              About The Course
            </h3>
            <div className="flex flex-col gap-6">
              {/* <div className="flex flex-row gap-4">
                  <div className="w-4 h-4 bg-blueBtn rounded-full flex-shrink-0 mt-1.5"></div>
                  <p className="lg:text-lg text-base font-semibold">
                    Engage Your Child: Foster creativity and critical thinking
                    with a curriculum designed to inspire exploration across
                    academic disciplines.
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="w-4 h-4 bg-blueBtn rounded-full flex-shrink-0 mt-1.5 "></div>
                  <p className="lg:text-lg text-base font-semibold">
                    Holistic Development: Balance academic and co-curricular
                    activities to ensure well-rounded growth.
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="w-4 h-4 bg-blueBtn rounded-full flex-shrink-0 mt-1.5"></div>
                  <p className="lg:text-lg text-base font-semibold">
                    Flexibility: Allow your child to personalize their learning
                    path based on their interests and strengths.
                  </p>
                </div>
                <div className="flex flex-row gap-4">
                  <div className="w-4 h-4 bg-blueBtn rounded-full flex-shrink-0 mt-1.5"></div>
                  <p className="lg:text-lg text-base font-semibold">
                    Global Recognition: The American Curriculum's SAT and ACT
                    tests are recognized by top universities worldwide.
                  </p>
                </div> */}

              {activeSubjectData.map((point, index) => (
                <div key={index} className="flex flex-row gap-4">
                  <div className="sm:w-4 sm:h-4 w-3 h-3 bg-blueBtn rounded-full flex-shrink-0 mt-1.5"></div>
                  <p className="xl:text-lg sm:text-base text-sm font-semibold">
                    {point}
                  </p>
                </div>
              ))}
            </div>

            <button
              className="text-white font-semibold py-2 px-5 bg-orangeHeading rounded-md max-w-48"
              onClick={() => handleNavClick("Demo")}
            >
              Book A Free Trial
            </button>
          </div>

          <div className="lg:block flex justify-center">
            <img
              src={subject.heroImg}
              alt=""
              className="w-[550px] object-contain"
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div>
      <div className="relative md:py-12 py-8 px-6 max-w-full min-h-[40vh]">
        <div className="absolute -top-56 left-0 -z-10 w-56">
          <img src={fadedCircle} alt="" className="object-contain" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-20 gap-8 ">
          <div className="flex sm:flex-row flex-col justify-center items-center gap-6">
            {Object.keys(subject.content || {}).map((curriculum, index) => (
              <motion.button
                key={index}
                onClick={() => handleViewChange(curriculum)}
                className={`py-1.5 sm:px-6 px-4 rounded-full sm:text-base text-sm transition-all duration-300 ${
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
            {/* <motion.button
              onClick={() => handleViewChange("alevel")}
              className={`py-1.5 sm:px-6 px-4 rounded-full sm:text-base text-sm transition-all duration-300 ${
                activeView === "alevel"
                  ? "bg-activeBlueBtn text-white"
                  : "bg-subjectBtn text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 17 }}
            >
              A-Level
            </motion.button>
            <motion.button
              onClick={() => handleViewChange("indian")}
              className={`py-1.5 sm:px-6 px-4 rounded-full sm:text-base text-sm transition-all duration-300 ${
                activeView === "indian"
                  ? "bg-activeBlueBtn text-white"
                  : "bg-subjectBtn text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 17 }}
            >
              Indian Curriculum
            </motion.button> */}
          </div>

          <AnimatePresence>
            <div className="">{renderItems()}</div>
          </AnimatePresence>
        </div>
      </div>
      <Outcomes />
    </div>
  );
};

export default SubjectDetailComp;
