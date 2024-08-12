import React, { useState, useEffect } from "react";

import aGrade from "../../assets/img/aGrade.png";
import sprinklesGif from "../../assets/img/sprinkles.gif";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { stepsContent } from "../../data/data";

const Working = () => {
  const [showSteps, setShowSteps] = useState(true);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const stepDuration = 10000; // Show steps for 8 seconds
    const imageDuration = 4000; // Show images for 4 seconds

    let showStepsTimeout;
    let showImageTimeout;

    const toggleDisplay = () => {
      setShowSteps(true);
      setShowImage(false);

      showStepsTimeout = setTimeout(() => {
        setShowSteps(false);
        setShowImage(true);
      }, stepDuration);

      showImageTimeout = setTimeout(() => {
        setShowSteps(true);
        setShowImage(false);
      }, stepDuration + imageDuration);
    };

    toggleDisplay();
    const interval = setInterval(toggleDisplay, stepDuration + imageDuration);

    return () => {
      clearInterval(interval);
      clearTimeout(showStepsTimeout);
      clearTimeout(showImageTimeout);
    };
  }, []);

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const gifVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="sm:py-20 py-12 px-6 max-w-full relative h-[572px] flex items-center overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 h-full w-full">
        <div className="flex flex-col gap-6 items-center text-headingColor">
          <h3 className="xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl font-bold tracking-wide text-center">
            Easy Steps Towards{" "}
            <span className="text-blueHeading font-MontserratBold">
              Top Grades
            </span>
          </h3>
        </div>

        <div className="slider-container w-auto cursor-pointer relative">
          <AnimatePresence>
            {showSteps && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
              >
                <Slider {...settings}>
                  {stepsContent.map((step, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={stepVariants}
                      className={`relative ${step.style}`} // Apply custom styling
                    >
                      <img
                        src={step.img}
                        alt={`Step ${i + 1}`}
                        className={`${step.imgStyle}`}
                      />
                      <div
                        className={`flex flex-col ${step.style} max-h-[100%] absolute top-0 p-6`}
                      >
                        <p className="font-semibold">Step {i + 1}</p>
                        <h3 className="min-[1210px]:text-[18px] min-[480px]:text-[16px] text-xl min-h-14">
                          {step.title}
                        </h3>
                        <p className="mt-5  text-[15px]">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </Slider>
              </motion.div>
            )}

            {showImage && (
              <motion.div
                className="flex items-center justify-center gap-8 relative"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.img
                  key="sprinklesGif"
                  src={sprinklesGif}
                  alt="Sprinkles GIF"
                  className="w-96 h-96 object-contain"
                  variants={gifVariants}
                />
                <motion.img
                  key="aGrade"
                  src={aGrade}
                  alt="Additional Image"
                  className="w-48 h-48 object-contain absolute "
                  variants={imageVariants}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Working;
