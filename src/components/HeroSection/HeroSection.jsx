import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";
import Typewriter from "typewriter-effect";
import { TypeAnimation } from "react-type-animation";
import { heroSectionImg } from "../../assets/img/images";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const HeroSection = ({ demoRef }) => {
  const [heroHeight, setHeroHeight] = useState("100vh");

  useEffect(() => {
    const adjustHeroHeight = () => {
      const navbarHeight = document.querySelector("#navbar").offsetHeight;
      const availableHeight = window.innerHeight - navbarHeight;
      setHeroHeight(`${availableHeight}px`);
    };

    adjustHeroHeight();
    window.addEventListener("resize", adjustHeroHeight);

    return () => {
      window.removeEventListener("resize", adjustHeroHeight);
    };
  }, []);

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

  const [currentHeading, setCurrentHeading] = useState(0);
  const [isHeadingDone, setIsHeadingDone] = useState(false);

  // Function to switch to the next heading
  const switchHeading = () => {
    setCurrentHeading((prev) => (prev + 1) % 2);
    setIsHeadingDone(false);
  };

  useEffect(() => {
    if (isHeadingDone) {
      const timer = setTimeout(switchHeading, 2000); // Wait for 1 second before switching
      return () => clearTimeout(timer);
    }
  }, [isHeadingDone]);

  return (
    <div
      className="h-[91vh] bg-[url('/src/assets/img/heroBg.png')] bg-no-repeat bg-contain xl:bg-movedown lg:bg-bottom bg-bottom max-w-full py-12 px-6 overflow-hidden bg-heroBg relative"
      style={{ height: heroHeight }}
    >
      <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center items-center gap-16 h-full">
        <div className="max-w-full mx-auto flex flex-col sm:gap-6 gap-4">
          <div className="xl:max-w-2xl sm:max-w-3xl ">
            <AnimatePresence mode="wait">
              {currentHeading === 0 ? (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-headingColor xl:text-[42px] xl:leading-tight lg:text-4xl lg:leading-tight md:text-[44px] md:leading-[3rem] min-[540px]:text-3xl min-[346px]:text-[22px] text-[22px]  font-extrabold capitalize"
                >
                  Want to score top grades in{" "}
                  <span className="font-MontserratBold">
                    {/* Static Text */}
                    your
                    <Typewriter
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(
                            `<span style='color: #34ACD4; font-weight: 900; font-family: Montserrat-bold;'> Exams</span> <span style='color: #383838; font-weight: 900; font-family: Montserrat-bold;'>?</span>`
                          )
                          .pauseFor(1000)
                          .deleteAll()
                          .start()
                          .typeString(
                            `<span style='color: #34ACD4; font-weight: 900; font-family: Montserrat-bold;'> Assessments</span> <span style='color: #383838; font-weight: 900; font-family: Montserrat-bold;'>?</span>`
                          )
                          .pauseFor(1000)
                          .callFunction(() => {
                            setIsHeadingDone(true); // Set heading done to true when done typing
                          })
                          .start();
                      }}
                      options={{
                        autoStart: true,
                        loop: false,
                        deleteSpeed: 20,
                        delay: 50,
                      }}
                    />
                  </span>
                </motion.h2>
              ) : (
                <motion.h2
                  key="heading2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="text-headingColor xl:text-[42px] xl:leading-tight lg:text-4xl lg:leading-tight md:text-[44px] md:leading-[3rem] min-[540px]:text-3xl min-[346px]:text-[22px] text-[22px]  font-extrabold capitalize"
                >
                  Reach new heights in your academic{" "}
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(
                          `<span style='color: #34ACD4; font-weight: 900; font-family: Montserrat-bold;'>Goals</span> <span style='color: #383838; font-weight: 900; font-family: Montserrat-bold;'>?</span>`
                        )
                        .pauseFor(1000)
                        .deleteAll()
                        .start()
                        .typeString(
                          `<span style='color: #34ACD4; font-weight: 900; font-family: Montserrat-bold;'>Career</span> <span style='color: #383838; font-weight: 900; font-family: Montserrat-bold;'>?</span>`
                        )
                        .pauseFor(1000)
                        .callFunction(() => {
                          setIsHeadingDone(true); // Set heading done to true when done typing
                        })
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: false,
                      deleteSpeed: 20,
                      delay: 50,
                    }}
                  />
                </motion.h2>
              )}
            </AnimatePresence>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-headingColor xl:text-xl sm:text-lg text-base ">
              We all want to score top grades in our exams. Our expert tutors
              help students worldwide achieve their dreams of A
              <sup className="text-headingColor lg:text-xl sm:text-lg text-base">
                +
              </sup>{" "}
              grades.
            </p>
          </div>

          {/* <div className="flex flex-col gap-3">
            <div className="flex flex-row gap-2 items-center">
              <CheckCircleIcon width={28} color="#F46322" />
              <p className="xl:text-lg sm:text-base text-sm font-bold text-headingColor">
                75% Students Score A<sup>+</sup> or A Grades
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CheckCircleIcon width={28} color="#F46322" />
              <p className="xl:text-lg sm:text-base text-sm font-bold text-headingColor">
                125000 Hours Live Lessons Delivered
              </p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <CheckCircleIcon width={28} color="#F46322" />
              <p className="xl:text-lg sm:text-base text-sm font-bold text-headingColor">
                95% Parents Satisfaction Ratio
              </p>
            </div>
          </div> */}

          <motion.div
            className="w-fit"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", damping: 17 }}
            onClick={() => handleNavClick("Demo")}
          >
            <CustomButton text="Book A Free Demo" />
          </motion.div>
        </div>

        <div className="">
          <img src={heroSectionImg} alt="" className="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
