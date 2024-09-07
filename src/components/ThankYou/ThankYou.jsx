// src/pages/NotFound/NotFound.jsx

import React from "react";
import { thankYouImg } from "../../assets/img/images";

function ThankYou() {
  return (
    <div className="relative max-w-full overflow-x-hidden ">
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col gap-6 items-center justify-center min-h-96 sm:py-12 py-8 px-4">
        {/* <h1 className="xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl leading-none text-headingColor">
          Thank You
        </h1>
        <p className="lg:text-xl sm:text-lg text-base text-center max-w-4xl mx-auto font-medium">
          The page you are looking for does not exist.
        </p> */}

        <div className="p-6 bg-white shadow-xl rounded-xl flex flex-col gap-8">
          <div className="sm:w-[80%] w-[100%] mx-auto">
            <img src={thankYouImg} alt="" className="w-full object-contain" />
          </div>
          <div>
            <p className="text-headingColor text-base text-center max-w-lg mx-auto font-semibold">
              Thank you for visiting Tuition Highway. One of our representative
              will be in touch shortly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThankYou;
