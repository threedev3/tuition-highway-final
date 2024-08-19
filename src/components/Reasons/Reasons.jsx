import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import { motion } from "framer-motion";
import { reasons } from "../../data/data.js";
import ReactCardFlip from "react-card-flip";
import TypewriterComp from "../Typewriter/Typewriter.jsx";

const Reasons = ({ demoRef }) => {
  // Initialize state to keep track of flip state for each card
  const [flippedCards, setFlippedCards] = useState({});

  const handleMouseEnter = (index) => {
    setFlippedCards((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseLeave = (index) => {
    setFlippedCards((prev) => ({ ...prev, [index]: false }));
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

  return (
    <div className="relative md:py-20 py-12 px-6 max-w-full">
      {/* <div className="absolute inset-0 -top-4 bg-white transition-all duration-500 ease-in-out blur-md "></div> */}

      {/* Animated Icon */}
      {/* <motion.div
        className="absolute lg:top-6 lg:right-6 sm:top-4 sm:right-4 top-2 right-2 md:w-24 sm:w-16 w-12 z-10"
        initial={{ opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={true}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 10,
          duration: 0.6,
          delay: 0.2,
        }}
      >
        <img src={elearning} alt="" className="object-contain" />
      </motion.div> */}
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-12 gap-8 ">
        <div className="flex flex-col sm:gap-6 gap-4 items-center text-headingColor ">
          {/* <h3 className="lg:text-[46px] sm:text-4xl text-3xl font-bold tracking-wide text-center">
            Your Fast Track to{" "}
            <span className="text-blueHeading font-MontserratBold">
              Top Grades
            </span>
          </h3> */}

          <TypewriterComp
            firstString="Your Fast Track to"
            secondString="Top Grades"
          />

          <p className="lg:text-xl sm:text-lg text-base text-center max-w-4xl mx-auto font-medium">
            Tuition Highway: Where expert tutors, personalized learning, and
            flexible scheduling meet comprehensive curriculum coverage. Our
            proven approach fast-tracks students to A* grades across IGCSE,
            A-levels, American, and IB curriculums.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-[30px] flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="p-3 bg-blueHeading rounded-full w-14 h-14 flex justify-center items-center">
                <img src={item.icon} alt={item.title} className="" />
              </div>
              <div>
                <p className="sm:text-xl text-lg text-headingColor font-semibold">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        <div className="flip-card-container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {reasons.map((item, index) => (
            <ReactCardFlip
              isFlipped={flippedCards[index] || false}
              flipDirection="vertical"
              key={index}
            >
              <div
                className="p-6 bg-white md:shadow-lg shadow-md rounded-[30px] flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-300 group xl:min-h-[216px] min-h-[180px]"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="p-3 bg-blueHeading rounded-full w-14 h-14 flex justify-center items-center">
                  <img src={item.icon} alt={item.title} className="" />
                </div>
                <div>
                  <p className="sm:text-xl text-lg text-headingColor font-semibold xl:block hidden">
                    {item.firstTitle}{" "}
                    <span className="block">{item.secondTitle}</span>
                  </p>
                  <p className="sm:text-xl text-lg text-headingColor font-semibold xl:hidden block">
                    {item.wholeTitle}
                  </p>
                </div>
              </div>
              <div
                className="p-6 bg-flipBg md:shadow-lg shadow-md rounded-[30px] flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-300 group xl:min-h-[216px] min-h-[180px]"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <div className="flex flex-col gap-4">
                  <p className="sm:text-xl text-lg text-headingColor font-semibold xl:block hidden">
                    {item.firstTitle}{" "}
                    <span className="block">{item.secondTitle}</span>
                  </p>
                  <p className="sm:text-xl text-lg text-headingColor font-semibold xl:hidden block">
                    {item.wholeTitle}
                  </p>
                  <p className="sm:text-base text-sm text-headingColor ">
                    {item.description}
                  </p>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>

        <motion.div
          className="mx-auto cursor-pointer"
          onClick={() => handleNavClick("Demo")}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", damping: 17 }}
        >
          <CustomButton text="Get A Free Demo" />
        </motion.div>
      </div>
    </div>
  );
};

export default Reasons;
