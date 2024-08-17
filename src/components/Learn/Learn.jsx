import React, { useEffect, useState } from "react";
import { learnImg } from "../../assets/img/images.js";

const Learn = () => {
  return (
    <div className="md:py-12 py-6 px-6 max-w-full relative bg-gradient-to-r from-startgrad to-endGrad">
      <div className="max-w-[1400px] mx-auto md:flex md:flex-row md:justify-between md:items-center md:gap-4 flex flex-col gap-4 justify-center items-center">
        <div className="flex xl:gap-8 gap-2 justify-between items-center">
          <div>
            <img
              src={learnImg}
              alt=""
              className="lg:w-24 sm:w-16 w-12 object-contain"
            />
          </div>
          <div className="max-w-3xl">
            <h3 className="text-white min-[1350px]:text-[46px] min-[1350px]:leading-10 xl:text-4xl lg:text-3xl md:text-2xl min-[416px]:text-2xl text-[19px]">
              Learn with 100%{" "}
              <span className="block font-MontserratBold">
                Satisfaction guaranteed
              </span>
            </h3>
          </div>
        </div>

        <div className="min-[1140px]:max-w-xl min-[896px]:max-w-md min-[836px]:max-w-sm md:max-w-xs max-w-sm">
          <p className="text-white xl:text-lg min-[896px]:text-base sm:text-sm text-sm">
            If your lesson doesn't take place, or you are not satisfied with
            your tutor, we will do our best to ensure that your learning goals
            are achieved!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
