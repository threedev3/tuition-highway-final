import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import arrowDots from "../../assets/img/arrowDots.png";
import demoArrow from "../../assets/img/demoArrow.png";
import arrowDots2 from "../../assets/img/arrowDots2.png";
import plane from "../../assets/img/plane.png";

const FreeDemo = ({ demoRef }) => {
  const controlsPlane = useAnimation();
  const controlsArrowDots = useAnimation();
  const [isInView, setIsInView] = useState(false);
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
      className="py-28 px-6 max-w-full relative bg-gradient-to-r from-startgrad to-endGrad overflow-hidden min-h-[40vh]"
    >
      <motion.img
        src={demoArrow}
        alt=""
        className="absolute lg:bottom-4 md:bottom-28 bottom-10 md:left-2 w-[93%]  object-contain"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={true}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 10,
          duration: 0.6,
          delay: 0.2,
        }}
      />
      {/* <motion.img
        src={plane}
        alt=""
        className="absolute lg:top-28 md:bottom-28 bottom-10 right-[131px]"
        // initial={{ rotate: 0, x: "0%", y: "0%" }}
        // animate={controlsPlane}
      /> */}

      <motion.img
        src={demoArrow}
        alt=""
        className="absolute xl:bottom-20 lg:bottom-16 md:bottom-36 sm:bottom-48 bottom-48 xl:-left-80 lg:-left-60 md:-left-40 sm:-left-28 -left-16 md:w-[93%] w-[97%] object-contain"
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
          <h3 className="text-white xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl text-center">
            Want Top Grades?
            <h3 className="block">Start Now!</h3>
          </h3>

          <motion.button
            className="bg-white rounded-[13px] w-full py-2 sm:text-lg text-base font-bold text-headingColor cursor-pointer"
            onClick={() => handleNavClick("Demo")}
            whileHover={{ scale: 1.1 }}
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
