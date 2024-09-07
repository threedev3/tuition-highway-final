import React, { useEffect, useState } from "react";
import { fadedCircle, subjectImg } from "../../assets/img/images";
import { motion, AnimatePresence } from "framer-motion";
import Outcomes from "../Outcomes/Outcomes";

const CurriculumDetailComp = ({ demoRef, curriculum }) => {
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
              About The Curriculum
            </h3>
            <div className="flex flex-col gap-6">
              {curriculum.content.map((point, index) => (
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
              src={curriculum.heroImg}
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
          <AnimatePresence>
            <div className="">{renderItems()}</div>
          </AnimatePresence>
        </div>
      </div>
      <Outcomes />
    </div>
  );
};

export default CurriculumDetailComp;