import React, { useEffect, useRef } from "react";
import heroIcon1 from "../../assets/img/heroIcon1.png";
import heroIcon2 from "../../assets/img/heroIcon2.png";
import heroIcon3 from "../../assets/img/heroIcon3.png";
import heroIcon4 from "../../assets/img/heroIcon4.png";
import { motion } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";

const HeroSection = () => {
  const iconsRef = useRef([]);

  const getRandomMovement = () => {
    return {
      x: Math.random() * 40 - 20, // Random value between -10 and 10
      y: Math.random() * 40 - 20, // Random value between -10 and 10
    };
  };

  const animateIcons = () => {
    iconsRef.current.forEach((icon) => {
      if (icon) {
        const { x, y } = getRandomMovement();
        icon.style.transition = "transform 3s ease-in-out"; // Smooth transition
        icon.style.transform = `translate(${x}px, ${y}px)`;
      }
    });
  };

  useEffect(() => {
    const interval = setInterval(animateIcons, 3000); // Change position every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-[70vh] bg-[url('/src/assets/img/heroBg.png')] bg-no-repeat sm:bg-cover bg-contain sm:bg-movedown bg-bottom max-w-full py-12 px-6 overflow-hidden  relative">
      {/* <div className="absolute top-24 right-0 bottom-0 left-0 bg-heroBg transition-all duration-500 ease-in-out blur-md -z-10 h-[65vh]"></div> */}
      {/* <div className="absolute inset-0 bg-heroBg transition-all duration-500 ease-in-out blur-lg -z-10 h-[75vh]"></div> */}

      <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center items-center gap-8 h-full">
        <div className="max-w-full mx-auto flex flex-col sm:gap-6 gap-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headingColor xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-[26px] leading-9 font-extrabold text-center">
              Want to score top grades in your{" "}
              <span className="text-blueHeading font-MontserratBold">
                exams
              </span>
              ?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-headingColor lg:text-xl md:text-lg sm:text-base text-base text-center">
              We all want to score top grades in our exams. Our expert tutors
              help students worldwide achieve their dreams of A* grades.
            </p>
          </div>

          <motion.div
            className="mx-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", damping: 17 }}
          >
            <CustomButton text="I want a A* grade too" />
          </motion.div>
        </div>

        <div className="">
          <motion.img
            ref={(el) => (iconsRef.current[0] = el)}
            src={heroIcon1}
            alt="heroIcon1"
            className="absolute lg:top-[12%] top-[4%] sm:left-[6%] left-[4%] md:w-20 sm:w-12 w-10 object-contain"
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            viewport={true}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
          />
          <motion.img
            ref={(el) => (iconsRef.current[1] = el)}
            src={heroIcon2}
            alt="heroIcon2"
            className="absolute lg:top-[12%] top-[4%] sm:right-[6%] right-[4%] md:w-12 sm:w-8 w-6 object-contain"
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            viewport={true}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
          />

          <motion.img
            ref={(el) => (iconsRef.current[2] = el)}
            src={heroIcon3}
            alt="heroIcon3"
            className="absolute bottom-[12%] right-[10%] md:w-12 sm:w-8 w-6 object-contain"
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            viewport={true}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
          />
          <motion.img
            ref={(el) => (iconsRef.current[3] = el)}
            src={heroIcon4}
            alt="heroIcon4"
            className="absolute bottom-[16%] left-[10%] md:w-14 sm:w-10 w-8 object-contain"
            initial={{ opacity: 0, y: -50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            viewport={true}
            transition={{
              type: "spring",
              stiffness: 70,
              damping: 10,
              duration: 0.6,
              delay: 0.2,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
