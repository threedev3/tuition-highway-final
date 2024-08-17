import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { curricula } from "../../data/data";

const CurriculumSection = ({ demoRef }) => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1032,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
    <div className="relative  max-w-full overflow-hidden sm:h-72 h-52">
      <div className="flex ">
        <div className="  before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 min-[898px]:before:w-[47%] sm:before:w-[54%] min-[524px]:before:w-[58%] before:w-[62%] before:bg-orangeHeading before:-skew-x-[33deg] before:origin-top before:-z-10">
          <div className=" flex flex-col justify-center items-start gap-2 min-[493px]:py-12 min-[393px]:py-6 py-6 md:pl-16 sm:pl-10 min-[393px]:pl-6 pl-3 z-10">
            <h2 className="xl:text-[46px] xl:leading-tight min-[1047px]:text-4xl md:text-3xl sm:text-2xl text-xl leading-none text-white">
              Popular Curriculum
            </h2>
            <h3 className="text-white xl:text-[46px] xl:leading-tight min-[1047px]:text-4xl md:text-3xl sm:text-2xl text-xl leading-none">
              Start Now!
            </h3>
            <button
              className="min-[393px]:mt-4 mt-1 min-[756px]:px-6 min-[493px]:px-4 min-[353px]:px-2 px-1 min-[353px]:py-2 py-1 bg-white text-headingColor font-semibold rounded-[13px] min-[756px]:text-base min-[493px]:text-sm text-xs"
              onClick={() => handleNavClick("Demo")}
            >
              Take a Free Demo
            </button>
          </div>
        </div>
        {/* <div className="absolute w-full bg-gradient-to-r from-startgrad to-endGrad flex items-center h-72  -z-20">
          {" "}
        </div>
        <div className="w-full max-w-[56%] ml-auto flex items-center h-72  relative">
          <div className="slider-container w-full cursor-pointer ">
            <Slider {...settings}>
              {curricula.map((item, index) => (
                <div key={index} className="">
                  <div className="p-4 mx-4 ">
                    <div className="text-white text-2xl font-semibold w-48">
                      {item.firstTitle}
                      <span className="block">{item.secondTitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div> */}

        <div className="absolute w-full bg-gradient-to-r from-startgrad to-endGrad flex items-center sm:h-72 h-52 -z-20"></div>
        <div className="w-full sm:max-w-[56%] min-[393px]:max-w-[50%] max-w-[53%] ml-auto flex items-center sm:h-72 h-52 relative">
          <div className="slider-container w-full cursor-pointer">
            <Slider {...settings}>
              {curricula.map((item, index) => (
                <div key={index} className="min-[493px]:px-2 lg:px-4">
                  {" "}
                  {/* Added padding for spacing */}
                  <div className="min-[493px]:p-4 rounded-md">
                    <div className="text-white min-[1510px]:text-2xl sm:text-[22px] text-[17px] text-center font-semibold min-w-[200px]">
                      {" "}
                      {/* Set minimum width */}
                      <span className="block">{item.firstTitle}</span>
                      <span className="block">{item.secondTitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;
