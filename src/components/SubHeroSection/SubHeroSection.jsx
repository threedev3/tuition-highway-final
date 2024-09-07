import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const SubHeroSection = ({ demoRef, title, description, btnText }) => {
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
    <div className="sm:py-20 py-12 px-6 max-w-full relative bg-gradient-to-r from-startgrad to-endGrad">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6 justify-center items-center">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div>
            <h3 className="text-white xl:text-[42px] xl:leading-tight lg:text-4xl lg:leading-tight md:text-[40px] md:leading-10 min-[540px]:text-3xl min-[346px]:text-[22px] text-[20px] font-extrabold max-w-3xl text-center">
              {title}
            </h3>
          </div>
          <div>
            <p className="xl:text-xl sm:text-lg min-[540px]:text-base text-sm text-white text-center max-w-md capitalize">
              {description}
            </p>
          </div>
        </div>

        <div
          className="py-3 px-5 bg-white flex gap-1 rounded-full cursor-pointer"
          onClick={() => handleNavClick("Demo")}
        >
          <button className="text-headingColor font-semibold">
            {btnText ? btnText : "Free Demo"}
          </button>
          {!btnText && (
            <ChevronRightIcon className="w-5 text-[#2165EE] font-bold" />
          )}
        </div>
      </div>
    </div>
  );
};

export default SubHeroSection;
