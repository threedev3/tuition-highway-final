import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const SubjectHeroSection = ({ demoRef, title, description }) => {
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
    <div className="sm:py-20 py-12 px-6 max-w-full relative bg-gradient-radial from-subHeroStart to-subHeroEnd">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-10 justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div>
            <h3 className="text-white lg:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-[27px] lg:leading-[3.5rem] leading-8 font-extrabold max-w-3xl text-center">
              {title}
            </h3>
          </div>
          <div>
            <p className="text-white text-center max-w-2xl capitalize">
              {description}
            </p>
          </div>
        </div>

        <div
          className="py-2 px-5 bg-orangeHeading  flex gap-1 rounded-md cursor-pointer"
          onClick={() => handleNavClick("Demo")}
        >
          <button className="text-white font-semibold">
            Book A Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubjectHeroSection;
