import React, { useEffect, useRef, useState } from "react";
import icon1 from "../../assets/img/icon1.png";
import icon2 from "../../assets/img/icon2.png";
import elearning from "../../assets/img/elearning.png";
import CustomButton from "../CustomButton/CustomButton";
import { motion } from "framer-motion";

const Reasons = ({ demoRef }) => {
  const reasons = [
    {
      title: "Qualified Expert Tutors",
      icon: icon1,
    },
    {
      title: "Personalized Learning",
      icon: icon2,
    },
    {
      title: "Flexible Scheduling",
      icon: icon1,
    },
    {
      title: "Comprehensive Curriculum",
      icon: icon2,
    },
    {
      title: "Proven Results",
      icon: icon2,
    },
  ];

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
      <div className="absolute inset-0 -top-4 bg-white transition-all duration-500 ease-in-out blur-md "></div>

      {/* Animated Icon */}
      <motion.div
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
      </motion.div>
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-12 ">
        <div className="flex flex-col sm:gap-6 gap-4 items-center text-headingColor ">
          <h3 className="lg:text-[46px] sm:text-4xl text-3xl font-bold tracking-wide text-center">
            Your Fast Track to Top Grades
          </h3>
          <p className="lg:text-xl sm:text-lg text-base text-center max-w-5xl mx-auto font-medium">
            Tuition Highway: Where expert tutors, personalized learning, and
            flexible scheduling meet comprehensive curriculum coverage. Our
            proven approach fast-tracks students to A* grades across IGCSE,
            A-levels, American, and IB curriculums.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-lg rounded-[30px] flex flex-col gap-6 hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="p-2 bg-blueHeading rounded-full w-10"
                />
              </div>
              <div>
                <p className="sm:text-xl text-lg text-headingColor font-semibold">
                  {item.title}
                </p>
              </div>
              {/* <div className="overflow-hidden">
                <p className="text-base text-headingColor opacity-0 transition-opacity duration-300 ease-linear group-hover:opacity-100">
                  {item.description}
                </p>
              </div> */}
            </div>
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

        {/* <div className="w-full bg-gradient-to-r from-startgrad to-endGrad rounded-xl lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 flex flex-col gap-8 py-6 sm:px-12 px-6 lg:pr-24 lg:mt-12 mt-4">
          <div className="flex flex-col gap-4  lg:max-w-2xl max-w-full">
            <h3 className="text-white lg:text-3xl sm:text-2xl text-xl">
              Nurturing Academic Excellence
            </h3>

            <p className="text-white sm:text-base text-sm">
              In today's competitive academic landscape, classroom learning
              isn't always enough. At Tuition Highway, we provide the one-on-one
              attention and tailored support your child needs to truly excel.
              Watch as their confidence grows, grades improve, and future
              opportunities expand.
            </p>
            <div className="">
              <button
                className="bg-white py-2 px-6 rounded-full sm:text-base text-sm font-bold flex gap-1 items-center"
                onClick={() => handleNavClick("Demo")}
              >
                Free Demo
                <ChevronRightIcon className="sm:w-5 w-4 text-[#2165EE] font-bold" />
              </button>
            </div>
          </div>

          <div className="lg:block flex md:justify-end justify-start">
            <img src={aGrade} alt="" className="w-36 object-cover" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Reasons;
