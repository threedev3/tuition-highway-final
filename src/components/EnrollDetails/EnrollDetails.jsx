import React, { useEffect, useState } from "react";
import { fadedCircle, subjectImg } from "../../assets/img/images";
import { motion } from "framer-motion";
import { enrollDetails } from "../../data/data";

const EnrollDetails = ({ title, content }) => {
  return (
    <div>
      <div className="relative md:py-12 py-8 px-6 max-w-full min-h-[40vh]">
        <div className="absolute -top-56 left-0 -z-10 w-56">
          <img src={fadedCircle} alt="" className="object-contain" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-20 gap-8 ">
          {/* <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          > */}
          <div>
            <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-4 flex flex-col gap-6">
              <div className="flex flex-col gap-8 xl:max-w-3xl lg:max-w-xl max-w-full">
                <h3 className="xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl leading-none text-headingColor">
                  {title}
                </h3>

                <div className="flex flex-col gap-6">
                  {content.map((item, index) => (
                    <div className="flex flex-row gap-4" key={index}>
                      <div className="w-4 h-4 bg-blueBtn rounded-full flex-shrink-0 mt-1.5"></div>
                      <p className="lg:text-lg text-base font-semibold">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:block flex justify-center">
                <img
                  src={subjectImg}
                  alt=""
                  className="w-[500px] object-contain"
                />
              </div>
            </div>
          </div>
          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default EnrollDetails;
