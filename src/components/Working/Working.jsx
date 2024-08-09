import React, { useState, useEffect } from "react";
import step from "../../assets/img/step.png";
import firstStep from "../../assets/img/firstStep.png";
import step2 from "../../assets/img/step2.png";
import lastStep from "../../assets/img/lastStep.png";
import aGrade from "../../assets/img/aGrade.png";
import sprinklesGif from "../../assets/img/sprinkles.gif";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Working = () => {
  const [showSteps, setShowSteps] = useState(true);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSteps((prev) => !prev);
      setShowImage((prev) => !prev);
    }, 6000); // Adjust timing here for how long steps/images are shown
    return () => clearInterval(interval);
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

  const stepsContent = [
    {
      img: firstStep,
      title: "Assessment",
      description: "We evaluate your current academic standing and goals.",
      style: "min-[481px]:w-[80%] min-[430px]:w-[60%] w-[72%]",
      imgStyle: "min-[480px]:w-[280px] w-[300px] h-[280px]",
    },
    {
      img: step,
      title: "Tutor Matching",
      description:
        "We pair you with an expert tutor specialized in your subject and curriculum.",
      style: "min-[481px]:w-[80%] min-[430px]:w-[60%] w-[72%]",
      imgStyle: "min-[480px]:w-[280px] w-[300px] h-[280px]",
    },
    {
      img: step2,
      title: "Personalized Learning Plan",
      description:
        "Your tutor creates a tailored strategy to address your specific needs.",
      style: "min-[481px]:w-[80%] min-[430px]:w-[60%] w-[72%]",
      imgStyle: "min-[480px]:w-[280px] w-[300px] h-[280px]",
    },
    {
      img: step,
      title: "Regular Sessions",
      description:
        "Attend flexible, one-on-one online sessions at times that suit you.",
      style: "min-[481px]:w-[80%] min-[430px]:w-[60%] w-[72%]",
      imgStyle: "min-[480px]:w-[280px] w-[300px] h-[280px]",
    },
    {
      img: step2,
      title: "Progress Tracking",
      description: "We continuously monitor and report on your improvement.",
      style: "min-[481px]:w-[80%] min-[430px]:w-[60%] w-[72%]",
      imgStyle: "min-[480px]:w-[280px] w-[300px] h-[280px]",
    },
    {
      img: lastStep,
      title: "Achieve Your Goals",
      description: "Watch your grades improve and confidence soar.",
      style: "min-[769px]:w-[80%]  w-[90%]",
      imgStyle: "min-[480px]:w-[220px] w-[270px] h-[280px]",
    },
  ];

  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false,
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
            Easy Steps Towards Top Grades
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
