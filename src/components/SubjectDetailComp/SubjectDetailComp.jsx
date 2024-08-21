import React, { useState } from "react";
import { fadedCircle, subjectImg } from "../../assets/img/images";
import { motion, AnimatePresence } from "framer-motion";
import Outcomes from "../Outcomes/Outcomes";

const SubjectDetailComp = ({ demoRef }) => {
  const [activeView, setActiveView] = useState("igcse");

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
    if (activeView === "igcse") {
      return (
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 flex flex-col gap-6">
            <div className="flex flex-col gap-8 max-w-3xl">
              <h3 className="xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl leading-none text-headingColor">
                About The Course
              </h3>
              <div className="flex flex-col gap-6">
                <div className="flex flex-row gap-4">
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
                </div>
              </div>

              <button
                className="text-white font-semibold py-2 px-5 bg-orangeHeading rounded-md max-w-48"
                onClick={() => handleNavClick("Demo")}
              >
                Book A Free Trial
              </button>
            </div>

            <div>
              <img
                src={subjectImg}
                alt=""
                className="w-[500px] object-contain"
              />
            </div>
          </div>
        </motion.div>
      );
    } else if (activeView === "alevel") {
      return (
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3>A-Level</h3>
          </div>
        </motion.div>
      );
    } else {
      return (
        <motion.div
          className=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3>Indian Curriculum</h3>
          </div>
        </motion.div>
      );
    }
  };

  return (
    <div>
      <div className="relative md:py-12 py-8 px-6 max-w-full min-h-[40vh]">
        <div className="absolute -top-56 left-0 -z-10 w-56">
          <img src={fadedCircle} alt="" className="object-contain" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-20 gap-8 ">
          <div className="flex sm:flex-row flex-col justify-center items-center gap-6">
            <motion.button
              onClick={() => handleViewChange("igcse")}
              className={`py-1.5 sm:px-6 px-4 rounded-full sm:text-base text-sm transition-all duration-300 ${
                activeView === "igcse"
                  ? "bg-activeBlueBtn text-white"
                  : "bg-subjectBtn text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 17 }}
            >
              IGCSE
            </motion.button>
            <motion.button
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
            </motion.button>
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
