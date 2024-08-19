import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import CustomButton from "../CustomButton/CustomButton";
import Typewriter from "typewriter-effect";
import { TypeAnimation } from "react-type-animation";

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
      className="h-[91vh] bg-[url('/src/assets/img/heroBg.png')] bg-no-repeat lg:bg-cover bg-contain lg:bg-movedown bg-bottom max-w-full py-12 px-6 overflow-hidden bg-heroBg relative"
      style={{ height: heroHeight }}
    >
      <div className="max-w-[1400px] mx-auto lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col justify-center items-center gap-8 h-full">
        <div className="max-w-full mx-auto flex flex-col sm:gap-6 gap-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-headingColor lg:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl leading-9 font-extrabold text-center capitalize ">
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
              Want to score top grades in your{" "}
              <span>
                {/* Static Text */}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        "<span style='color: #34ACD4; font-weight: 900; font-family: Montserrat-bold;'>Exams </span> <span style='color: #383838; font-weight: 900; font-family: Montserrat-bold;'>?</span>"
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

          <div className="max-w-4xl mx-auto">
            <p className="text-headingColor lg:text-xl sm:text-lg text-base text-center">
              We all want to score top grades in our exams. Our expert tutors
              help students worldwide achieve their dreams of A* grades.
            </p>
          </div>

          <motion.div
            className="mx-auto"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", damping: 17 }}
            onClick={() => handleNavClick("Demo")}
          >
            <CustomButton text="Book A Free Demo" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
