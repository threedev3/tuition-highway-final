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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(6); // Default slides to show

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

    const lastVisibleSlide = currentSlide + slidesToShow - 1;
    if (lastVisibleSlide >= stepsContent.length - 1) {
      toggleDisplay();
      const interval = setInterval(toggleDisplay, stepDuration + imageDuration);
      return () => {
        clearInterval(interval);
        clearTimeout(showStepsTimeout);
        clearTimeout(showImageTimeout);
      };
    }
  }, [currentSlide, slidesToShow]);

  const handleAfterChange = (index) => {
    setCurrentSlide(index);
  };

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
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.5,
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
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.5,
      },
    },
  };

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    afterChange: handleAfterChange,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(6);
      } else if (window.innerWidth >= 1024) {
        setSlidesToShow(5);
      } else if (window.innerWidth >= 800) {
        setSlidesToShow(4);
      } else if (window.innerWidth >= 640) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 480) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    window.addEventListener("resize", updateSlidesToShow);
    updateSlidesToShow();

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  return (
    <div className="sm:py-12 py-8 px-6 max-w-full relative h-[572px] flex items-center overflow-x-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 justify-center h-full w-full">
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
                      className={`relative `} // Apply custom styling
                    >
                      <img
                        src={step.img}
                        alt={`Step ${i + 1}`}
                        className={`${step.imgStyle}`}
                      />
                      <div
                        className={`flex flex-col ${step.style} max-h-[90%] absolute top-0 py-6 min-[480px]:pr-4 min-[480px]:pl-4 pl-5 pr-8`}
                      >
                        <p className="font-semibold">Step {i + 1}</p>
                        <h3 className="min-[1210px]:text-[18px] min-[480px]:text-[16px] min-[420px]:text-xl text-[18px] leading-6 min-h-14">
                          {step.title}{" "}
                          <span className="block font-MontserratBold">
                            {step.subtitle}
                          </span>
                        </h3>
                        <p className="mt-4  min-[1034px]:text-[15px] min-[754px]:text-[14px] min-[641px]:text-[13px] min-[471px]:text-[15px] text-[14px] min-[1034px]:leading-6 leading-5">
                          {step.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </Slider>
              </motion.div>
            )}

            {showImage && (
              <motion.div
                className="flex items-center justify-center  relative"
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                <motion.img
                  key="sprinklesGif"
                  src={sprinklesGif}
                  alt="Sprinkles GIF"
                  className="min-[480px]:w-[17rem] min-[480px]:h-[17rem] w-[18rem] h-[18rem] object-contain"
                  variants={gifVariants}
                />
                <motion.img
                  key="aGrade"
                  src={aGrade}
                  alt="Additional Image"
                  className="w-36 h-36 object-contain absolute "
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
