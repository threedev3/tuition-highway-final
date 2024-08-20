import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { subjectsOffering } from "../../data/data";
import SubjectsCard from "../SubjectsCard/SubjectsCard";

const SubjectSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative md:py-12 pt-8 px-6 max-w-full bg-subjectsBg min-[856px]:min-h-[440px] min-[841px]:min-h-[460px] sm:min-h-[420px] min-h-[380px]">
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-12 gap-8 ">
        <h3 className="lg:text-[46px] sm:text-4xl text-3xl font-bold tracking-wide text-headingColor">
          Popular Subjects
        </h3>

        <div className="slider-container w-auto cursor-pointer ">
          <Slider {...settings}>
            {subjectsOffering.map((item, index) => (
              <SubjectsCard item={item} key={index} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SubjectSlider;
