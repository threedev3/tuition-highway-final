import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import arrowDots from "../../assets/img/arrowDots.png";
import demoArrow from "../../assets/img/demoArrow.png";
import arrowDots2 from "../../assets/img/arrowDots2.png";
import plane from "../../assets/img/plane.png";

const FreeDemo = ({ demoRef }) => {
  const ref = useRef(null);

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

  return (
    <div
      ref={ref}
      className="px-6 max-w-full relative flex justify-center items-center bg-gradient-to-r from-startgrad to-endGrad overflow-hidden lg:min-h-[349px] min-h-[300px]"
    >
      <motion.img
        src={demoArrow}
        alt="arrow1"
        className="absolute xl:-bottom-2 lg:bottom-10 md:bottom-28 sm:bottom-28 bottom-32 md:-left-[13%] -left-[13%] sm:w-[93%] w-[100%] object-contain"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={true}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 10,
          duration: 0.6,
          delay: 0.5,
        }}
      />

      <motion.img
        src={demoArrow}
        alt="arrow2"
        className="absolute xl:bottom-10 lg:bottom-10 md:bottom-24 sm:bottom-28 bottom-28 xl:-left-[25%] lg:-left-[21%] md:-left-[23%] sm:-left-[22%] -left-[22%] md:w-[93%] w-[97%] object-contain"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={true}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 10,
          duration: 1.2,
          delay: 0.8,
        }}
      />
      <div className="max-w-[1300px] mx-auto flex flex-col gap-8 justify-center items-center">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 justify-center items-center z-10">
          <div>
            <h3 className="text-white xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl text-center">
              Want Top Grades?
            </h3>
            <h3 className="text-white xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl text-center">
              Start Now!
            </h3>
          </div>

          <motion.button
            className="bg-white rounded-[13px] w-full py-2 sm:text-lg text-base font-bold text-headingColor cursor-pointer"
            onClick={() => handleNavClick("Demo")}
            whileHover={{
              scale: 1.1,
              backgroundColor: "#F46322",
              color: "#FFFFFF",
            }}
            transition={{ type: "spring", damping: 17 }}
          >
            Take A Free Demo
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FreeDemo;
