import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef } from "react";
import Slider from "react-slick";
import StarRating from "react-star-ratings";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { testimonials } from "../../data/data";

const Testimonials = () => {
  const sliderRef = useRef(null);

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    // cssEase: "ease",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="relative md:py-20 py-10 px-6 max-w-full overflow-x-hidden">
      <div className="absolute inset-0 bg-heroBg transition-all duration-500 ease-in-out blur-md "></div>

      <div className="relative z-10 max-w-[1400px] mx-auto md:flex md:flex-row md:items-center md:justify-between md:gap-10 flex flex-col gap-6 items-center justify-center ">
        <div className="flex flex-col gap-8 max-w-[500px]">
          <div>
            <h3 className="xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl leading-none text-headingColor">
              Testimonials and{" "}
              <span className="font-MontserratBold text-orangeHeading">
                Success
              </span>{" "}
              Stories
            </h3>
          </div>
          <div className="flex gap-8">
            <div onClick={handlePrevClick} className="cursor-pointer">
              <ArrowLeftCircleIcon className=" text-blueArrows lg:w-16 w-12" />
            </div>
            <div onClick={handleNextClick} className="cursor-pointer">
              <ArrowRightCircleIcon className="text-blueArrows lg:w-16 w-12" />
            </div>
          </div>
        </div>
        <div className="min-[1200px]:max-w-3xl lg:max-w-2xl md:max-w-sm max-w-sm px-5">
          <div className="slider-container w-auto cursor-pointer ">
            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((item, index) => (
                <div className="" key={index}>
                  <div
                    className="flex flex-col gap-6 w-[300px] md:p-0 p-6"
                    key={index}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-[#00D1FF] w-10 h-10 rounded-full"></div>
                      <div className="">
                        <h3 className="text-headingColor md:text-2xl text-xl">
                          {item.name}
                        </h3>
                      </div>
                    </div>

                    <div className="text-headingColor text-base min-h-32">
                      {item.review}
                    </div>

                    <div className="">
                      <StarRating
                        name="course-rating"
                        caption="Rate your stay!"
                        totalStars={5}
                        starRatedColor="#FAB437"
                        rating={4}
                        starDimension="20px"
                      />
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

export default Testimonials;
