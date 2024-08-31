import React, { useEffect, useState } from "react";
import { learnImg, learningImg2 } from "../../assets/img/images.js";

const Learn = ({ firstHead, secondHead, description, style, textStyle }) => {
  return (
    <div className="md:py-6 py-6 px-6 max-w-full relative bg-gradient-to-r from-startgrad to-endGrad">
      <div className="max-w-[1400px] mx-auto md:flex md:flex-row md:justify-evenly md:items-center md:gap-4 flex flex-col gap-4 justify-center items-center">
        <div className="flex xl:gap-12 sm:gap-6 gap-2 justify-between items-center">
          <div className="relative xl:w-[106px] min-[769px]:w-[85px] sm:w-20 w-16">
            <div className="md:absolute xl:-top-12 -top-10 z-10">
              <img
                src={learningImg2}
                alt=""
                className="w-full object-contain"
              />
            </div>
          </div>
          <div className="max-w-3xl">
            <h3 className="text-white min-[1350px]:text-[38px] min-[1350px]:leading-[3.5rem] xl:text-3xl lg:text-[26px] lg:leading-9 md:text-[22px] md:leading-8 min-[416px]:text-2xl min-[360px]:text-[19px] text-[17px]">
              {firstHead}{" "}
              <span className="block font-MontserratBold">{secondHead}</span>
            </h3>
          </div>
        </div>

        <div className={`${textStyle}`}>
          <p className={`${style} `}>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Learn;
