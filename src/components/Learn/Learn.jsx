import React, { useEffect, useState } from "react";
import { learnImg } from "../../assets/img/images.js";

const Learn = ({ firstHead, secondHead, description, style, textStyle }) => {
  return (
    <div className="md:py-12 py-6 px-6 max-w-full relative bg-gradient-to-r from-startgrad to-endGrad">
      <div className="max-w-[1400px] mx-auto md:flex md:flex-row md:justify-evenly md:items-center md:gap-4 flex flex-col gap-4 justify-center items-center">
        <div className="flex xl:gap-12 gap-6 justify-between items-center">
          <div>
            <img
              src={learnImg}
              alt=""
              className="lg:w-24 sm:w-16 w-12 object-contain"
            />
          </div>
          <div className="max-w-3xl">
            <h3 className="text-white min-[1350px]:text-[38px] min-[1350px]:leading-[3.5rem] xl:text-4xl lg:text-3xl md:text-2xl min-[416px]:text-2xl text-[19px]">
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
