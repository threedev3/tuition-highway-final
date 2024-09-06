import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from "../CustomButton/CustomButton";
import { motion } from "framer-motion";
import { reasons } from "../../data/data.js";
import ReactCardFlip from "react-card-flip";
import TypewriterComp from "../Typewriter/Typewriter.jsx";
import Slider from "react-slick";

const Reasons = ({ demoRef }) => {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1110,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 444,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

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
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-12 gap-8 ">
        <div className="flex flex-col sm:gap-6 gap-4 items-center text-headingColor ">
          <h3 className="xl:text-[42px] xl:leading-tight lg:text-4xl lg:leading-tight md:text-[40px] md:leading-10 min-[540px]:text-3xl min-[346px]:text-2xl text-[22px] font-bold tracking-wide text-center text-blueHeading">
            Your Fast Track To Top Grades
          </h3>

          <p className="xl:text-xl sm:text-lg text-base text-center max-w-4xl mx-auto font-medium">
            Personalized tutoring by experts in all subjects. Progress
            monitoring and flexible scheduling ensure your academic success.
          </p>
        </div>

        <div className="slider-container cursor-pointer w-auto">
          <Slider {...settings}>
            {reasons.map((item, index) => (
              // <ReactCardFlip
              //   isFlipped={flippedCards[index] || false}
              //   flipDirection="horizontal"
              //   key={index}
              // >
              //   <div>
              //     <div
              //       className="p-6 bg-white md:shadow-md shadow-md rounded-[30px] flex flex-col gap-6  transition-shadow duration-300 group xl:min-h-[200px] min-h-[200px] my-4 mx-2"
              //       onMouseEnter={() => handleMouseEnter(index)}
              //       onMouseLeave={() => handleMouseLeave(index)}
              //     >
              //       <div className="p-3 bg-blueHeading rounded-full w-14 h-14 flex justify-center items-center">
              //         <img src={item.icon} alt={item.title} className="" />
              //       </div>
              //       <div>
              //         <p className="xl:text-xl text-lg text-headingColor font-semibold min-[444px]:block hidden">
              //           {item.firstTitle}{" "}
              //           <span className="block">{item.secondTitle}</span>
              //         </p>
              //         <p className="xl:text-xl text-lg text-headingColor font-semibold min-[444px]:hidden block">
              //           {item.wholeTitle}
              //         </p>
              //       </div>
              //     </div>
              //   </div>
              //   <div>
              //     <div
              //       className="p-6 bg-flipBg md:shadow-md shadow-md rounded-[30px] flex flex-col gap-6  transition-shadow duration-300 group xl:min-h-[200px] min-h-[200px] my-4 mx-2"
              //       onMouseEnter={() => handleMouseEnter(index)}
              //       onMouseLeave={() => handleMouseLeave(index)}
              //     >
              //       <div className="flex flex-col gap-4">
              //         <p className="xl:text-xl text-lg text-headingColor font-semibold min-[444px]:block hidden">
              //           {item.firstTitle}{" "}
              //           <span className="block">{item.secondTitle}</span>
              //         </p>
              //         <p className="xl:text-xl text-lg text-headingColor font-semibold min-[444px]:hidden block">
              //           {item.wholeTitle}
              //         </p>
              //         <p className="sm:text-sm text-sm text-headingColor ">
              //           {item.description}
              //         </p>
              //       </div>
              //     </div>
              //   </div>
              // </ReactCardFlip>

              <motion.div
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <motion.div className="relative w-full h-full">
                  <motion.div
                    className="bg-white md:shadow-md shadow-md rounded-[30px] flex flex-col gap-6 transition-shadow duration-300 group xl:min-h-[200px] min-h-[200px] my-4 mx-2 p-6"
                    animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="p-3 bg-blueHeading rounded-full w-14 h-14 flex justify-center items-center">
                      <img src={item.icon} alt={item.title} className="" />
                    </div>
                    <div>
                      <p className="xl:text-xl text-lg text-headingColor font-semibold min-[444px]:block hidden">
                        {item.firstTitle}{" "}
                        <span className="block">{item.secondTitle}</span>
                      </p>
                      <p className="xl:text-xl text-lg text-headingColor font-semibold min-[444px]:hidden block">
                        {item.wholeTitle}
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute inset-0 bg-flipBg md:shadow-md shadow-md rounded-[30px] flex flex-col gap-6 transition-shadow duration-300 group xl:min-h-[200px] min-h-[200px]  mx-2 p-6"
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: flippedCards[index] ? 0 : 180 }}
                    transition={{ duration: 0.7 }}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="flex flex-col gap-4">
                      <p className="xl:text-xl text-lg text-headingColor font-semibold min-[444px]:block hidden">
                        {item.firstTitle}{" "}
                        <span className="block">{item.secondTitle}</span>
                      </p>
                      <p className="xl:text-xl text-lg text-headingColor font-semibold min-[444px]:hidden block">
                        {item.wholeTitle}
                      </p>
                      <p className="sm:text-sm text-sm text-headingColor">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </Slider>
        </div>

        <motion.div
          className="mx-auto cursor-pointer"
          onClick={() => handleNavClick("Demo")}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", damping: 17 }}
        >
          <CustomButton text="Book A Free Trial Lesson" />
        </motion.div>
      </div>
    </div>
  );
};

export default Reasons;
