import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";
import Typewriter from "typewriter-effect";
import { TypeAnimation } from "react-type-animation";
import { heroImg } from "../../assets/img/images";
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

  return (
    <div
      className="h-[91vh] bg-[url('/src/assets/img/heroBg.png')] bg-no-repeat bg-contain xl:bg-movedown lg:bg-moveup bg-bottom max-w-full py-12 px-6 overflow-hidden bg-heroBg relative"
      style={{ height: heroHeight }}
    >
      <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center items-center gap-16 h-full">
        <div className="max-w-full mx-auto flex flex-col sm:gap-6 gap-4">
          <div className="sm:max-w-2xl ">
            <h2 className="text-headingColor xl:text-[42px] xl:leading-tight lg:text-4xl lg:leading-tight md:text-[40px] md:leading-10 min-[540px]:text-3xl min-[346px]:text-2xl text-[22px]  font-extrabold capitalize ">
              {/* Want to score top grades in your{" "}
              <span className="text-blueHeading font-MontserratBold">
                exams
              </span>
              ? */}
              {/* <div className="font-MontserratBold">
                Want to score top grades in your
                <TypeAnimation
                  sequence={[" Exams"]}
                  speed={50}
                  style={{ color: "#34ACD4" }}
                  repeat={Infinity}
                />
                ?
              </div> */}
              Want to score top grades in{" "}
              <span className="font-MontserratBold">
                {/* Static Text */}
                your
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "<span style='color: #34ACD4; font-weight: 900; font-family: Montserrat-bold;'> Exams</span> <span style='color: #383838; font-weight: 900; font-family: Montserrat-bold;'>?</span>"
                      )

                      .pauseFor(1000)
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 20,
                    delay: 50,
                  }}
                />
              </span>
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
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

        <div>
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
