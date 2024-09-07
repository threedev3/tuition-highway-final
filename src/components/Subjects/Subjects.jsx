import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomButton from "../CustomButton/CustomButton";
import { motion, AnimatePresence } from "framer-motion";
import { subjectsOffering } from "../../data/data";
import TypewriterComp from "../Typewriter/Typewriter";
import { useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Slider from "react-slick";

const Subjects = () => {
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [visibleSubjects, setVisibleSubjects] = useState(8);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleToggleSubjects = () => {
    setShowAllSubjects(!showAllSubjects);
    setVisibleSubjects(subjectsOffering.length);
  };

  const navigateAllSubjects = () => {
    navigate("/subjects");
    scrollToTop();
  };

  useEffect(() => {
    // Check screen size on mount and resize
    const checkScreenSize = () => {
      const width = window.innerWidth;

      // Adjust visible subjects based on screen size
      if (width >= 1280) {
        setVisibleSubjects(8); // xl and above
      } else {
        setVisibleSubjects(6); // default fallback
      }

      // Check if the screen size is mobile
      setIsMobile(width < 1024); // Tailwind's md breakpoint is 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  // const [activeView, setActiveView] = useState("subjects");

  // const handleViewChange = (view) => {
  //   setActiveView(view);
  // };

  // const renderItems = () => {
  //   const items = activeView === "subjects" ? subjects : curricula;

  //   return items.slice(0, 6).map((item) => (
  //     <motion.div
  //       key={item.title} // use a unique key
  //       className={`p-3 rounded-[30px] shadow-lg flex items-center hover:shadow-2xl transition-shadow duration-300 bg-white h-[120px] ${
  //         activeView === "subjects"
  //           ? "lg:px-3 px-3 gap-3"
  //           : "lg:px-7 px-5 gap-7"
  //       }`}
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       exit={{ opacity: 0, y: 20 }}
  //       whileHover={{ scale: 1.1 }}
  //       transition={{ duration: 0.5 }}
  //     >
  //       <div
  //         className={`flex-shrink-0 ${
  //           activeView === "subjects"
  //             ? "sm:w-[90px] w-[80px]"
  //             : "sm:w-[60px] w-[60px]"
  //         }`}
  //       >
  //         <img
  //           src={item.img}
  //           alt={item.title}
  //           className="object-cover w-full h-auto"
  //         />
  //       </div>
  //       <div className="flex flex-col gap-1">
  //         <p className="sm:text-xl text-lg font-semibold">{item.title}</p>
  //         <p className="sm:text-base text-sm">{item.subtitle}</p>
  //       </div>
  //     </motion.div>
  //   ));
  // };

  // const renderItems = () => {
  //   const items = activeView === "subjects" ? subjects : curricula;

  //   return items.slice(0, 6).map((item) => (
  //     <motion.div
  //       key={item.title}
  //       className={`p-3 rounded-[30px] md:shadow-lg shadow-md flex items-center hover:shadow-2xl transition-shadow duration-300 bg-white cursor-pointer h-[120px] ${
  //         activeView === "subjects"
  //           ? "lg:px-3 px-3 gap-3"
  //           : "lg:px-3 px-3 gap-3"
  //       }`}
  //       initial={{ opacity: 0, y: 20 }}
  //       animate={{ opacity: 1, y: 0 }}
  //       exit={{ opacity: 0, y: 20 }}
  //       whileHover={{ scale: 1.05 }}
  //       transition={{ duration: 0.5 }}
  //     >
  //       <div
  //         className={`flex-shrink-0 flex justify-center items-center ${
  //           activeView === "subjects"
  //             ? "sm:w-[90px] w-[80px] h-[90px] sm:h-[90px]"
  //             : "sm:w-[90px] w-[80px] h-[90px] sm:h-[90px] p-3"
  //         }`}
  //       >
  //         <img
  //           src={item.img}
  //           alt={item.title}
  //           className="object-contain w-full h-full"
  //         />
  //       </div>
  //       <div className="flex flex-col gap-1 w-full">
  //         <p className="sm:text-xl text-lg font-semibold">{item.title}</p>
  //         <p className="sm:text-base text-sm">{item.subtitle}</p>
  //       </div>
  //     </motion.div>
  //   ));
  // };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 546,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [isPopular, setIsPopular] = useState(false);

  useEffect(() => {
    // Toggle the state every 3 seconds (3000 milliseconds)
    const interval = setInterval(() => {
      setIsPopular((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="md:py-20 py-12 px-6 max-w-full relative bg-heroBg">
      {/* <motion.div
        className="absolute md:top-10 md:left-10 sm:top-8 sm:left-8 top-2 left-2 md:w-24 sm:w-16 w-14 z-10"
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
        <img src={heroIcon1} alt="" className="object-contain" />
      </motion.div> */}

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col justify-center sm:gap-12 gap-8">
        <div className="flex flex-col sm:gap-6 gap-4 items-center text-headingColor max-w-5xl mx-auto">
          {/* <TypewriterComp firstString="Popular" secondString="Subjects" /> */}
          <AnimatePresence mode="wait">
            <motion.h3
              key={isPopular ? "Popular" : "In-Demand"}
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              exit={{ rotateX: -90, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="xl:text-[42px] xl:leading-tight lg:text-4xl lg:leading-tight md:text-[40px] md:leading-10 min-[540px]:text-3xl min-[346px]:text-2xl text-[22px] font-bold tracking-wide text-center gap-3 text-headingColor"
            >
              {isPopular ? "Popular Subjects" : "In-Demand Subjects"}
            </motion.h3>
          </AnimatePresence>
          <p className="xl:text-xl sm:text-lg text-base text-center max-w-4xl mx-auto">
            Our expert tutors cover all subjects across major curricula. Get
            personalized support to overcome academic challenges and excel in
            your studies.
          </p>

          {/* <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 17 }}
              onClick={() => handleViewChange("curricula")}
              className={`py-1.5 sm:px-6 px-4 rounded-full sm:text-base text-sm transition-all duration-300 ${
                activeView === "curricula"
                  ? "bg-activeBlueBtn text-white"
                  : "bg-subjectBtn text-white"
              }`}
            >
              Curricula Coverage
            </motion.button>
            <motion.button
              onClick={() => handleViewChange("subjects")}
              className={`py-1.5 sm:px-6 px-4 rounded-full sm:text-base text-sm transition-all duration-300 ${
                activeView === "subjects"
                  ? "bg-activeBlueBtn text-white"
                  : "bg-subjectBtn text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 17 }}
            >
              Popular Subjects
            </motion.button>
          </div> */}
        </div>
        {/* <AnimatePresence mode="wait">
          <div className="lg:grid lg:grid-cols-3 lg:gap-10 md:grid md:grid-cols-2 md:gap-10 grid grid-cols-1 gap-6">
            {subjectsOffering.slice(0, visibleSubjects).map((item, index) => (
              <motion.div
                key={index}
                className={`p-3 rounded-[30px] md:shadow-lg shadow-md flex items-center hover:shadow-2xl transition-shadow duration-300 bg-white cursor-pointer h-[120px] lg:px-3 px-3 gap-3`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                onClick={() => {
                  navigate(`${item.to}`);
                  scrollToTop();
                }}
              >
                <div
                  className={`flex-shrink-0 flex justify-center items-center sm:w-[90px] w-[80px] h-[90px] sm:h-[90px]`}
                >
                  <img
                    src={item.mainImg}
                    alt={item.title}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <p className="sm:text-xl text-lg font-semibold">
                    {item.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence> */}

        <AnimatePresence mode="wait">
          <div>
            {/* Render grid on medium and larger screens */}
            <div className="xl:grid xl:grid-cols-4 xl:gap-10 lg:grid lg:grid-cols-3 lg:gap-10 hidden ">
              {subjectsOffering.slice(0, visibleSubjects).map((item, index) => (
                <motion.div
                  key={index}
                  className={`p-3 rounded-[30px] md:shadow-lg shadow-md flex items-center transition-shadow duration-300 bg-white cursor-pointer h-[120px] lg:px-3 px-3 gap-3`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    navigate(`${item.to}`);
                    scrollToTop();
                  }}
                >
                  <div
                    className={`flex-shrink-0 flex justify-center items-center sm:w-[90px] w-[80px] h-[90px] sm:h-[90px]`}
                  >
                    <img
                      src={item.mainImg}
                      alt={item.title}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 w-full">
                    <p className="sm:text-xl text-lg font-semibold">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Render slider on small screens */}
            <div className="block lg:hidden">
              <div className="slider-container cursor-pointer w-auto">
                <Slider {...settings}>
                  {subjectsOffering
                    .slice(0, visibleSubjects)
                    .map((item, index) => (
                      <div key={index}>
                        <motion.div
                          className={`p-3 rounded-[30px] md:shadow-lg shadow-md flex items-center transition-shadow duration-300 bg-white cursor-pointer h-[120px] lg:px-3 px-3 gap-3 my-4 mx-2`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.5 }}
                          onClick={() => {
                            navigate(`${item.to}`);
                            scrollToTop();
                          }}
                        >
                          <div
                            className={`flex-shrink-0 flex justify-center items-center sm:w-[90px] w-[80px] h-[90px] sm:h-[90px]`}
                          >
                            <img
                              src={item.mainImg}
                              alt={item.title}
                              className="object-contain w-full h-full"
                            />
                          </div>
                          <div className="flex flex-col gap-1 w-full">
                            <p className="sm:text-xl text-lg font-semibold">
                              {item.title}
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    ))}
                </Slider>
              </div>
            </div>
          </div>
        </AnimatePresence>

        {isMobile ? (
          <motion.div
            className="flex justify-center w-fit mx-auto rounded-full "
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", damping: 17 }}
            onClick={() => {
              navigate("/subjects");
              scrollToTop();
            }}
          >
            <CustomButton text="Show All Subjects" />
          </motion.div>
        ) : (
          <motion.div
            className="flex justify-center w-fit mx-auto rounded-full mt-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            transition={{ type: "spring", damping: 17 }}
            onClick={
              showAllSubjects ? navigateAllSubjects : handleToggleSubjects
            }
          >
            <CustomButton
              text={
                showAllSubjects ? "Show All Subjects" : "Show More Subjects"
              }
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Subjects;
