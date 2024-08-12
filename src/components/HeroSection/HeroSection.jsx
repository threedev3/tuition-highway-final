import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";

const HeroSection = () => {
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const adjustHeroHeight = () => {
      const navbarHeight = document.querySelector("#navbar").offsetHeight;
      const availableHeight = window.innerHeight - navbarHeight;
      setHeroHeight(`${availableHeight}px`);
    };

    // Adjust the height on component mount and window resize
    adjustHeroHeight();
    window.addEventListener("resize", adjustHeroHeight);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", adjustHeroHeight);
    };
  }, []);

  return (
    <div
      className="h-[91vh] bg-[url('/src/assets/img/heroBg.png')] bg-no-repeat sm:bg-cover bg-contain sm:bg-movedown bg-bottom max-w-full py-12 px-6 overflow-hidden bg-heroBg relative"
      style={{ height: heroHeight }}
    >
      <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center items-center gap-8 h-full">
        <div className="max-w-full mx-auto flex flex-col sm:gap-6 gap-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headingColor xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-[26px] leading-9 font-extrabold text-center capitalize">
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
            <CustomButton text="Book A Free Demo" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
