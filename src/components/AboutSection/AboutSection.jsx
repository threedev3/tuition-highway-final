import React from "react";
import { aboutImg } from "../../assets/img/images";
import { CheckIcon } from "@heroicons/react/24/outline";

const AboutSection = () => {
  return (
    <div className="relative md:py-20 py-12 px-6 max-w-full ">
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col sm:gap-8 gap-4 ">
        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center flex flex-col gap-3">
          <div className="flex flex-col gap-2 max-w-4xl">
            <div className="flex flex-row gap-4 items-center ml-3">
              <div className="h-4 w-4 bg-orangeHeading"></div>
              <h4 className="text-headingColor text-lg">
                Welcome To Tuition Highway
              </h4>
            </div>
            <h3 className="lg:text-[46px] sm:text-4xl text-[27px] leading-9 font-bold tracking-wide text-headingColor capitalize">
              About the Company
            </h3>

            <div className="flex flex-col gap-10 mt-4 font-semibold">
              <p className="text-headingColor">
                Tuition Highway started in 2017 to meet the demand for flexible
                online tutoring. With our experienced and qualified faculty from
                around the world, we provide one-to-one and group online lessons
                to help improve grades, fill gaps in learning, and boost future
                chances.
              </p>
              <p className="text-headingColor">
                Tuition Highway is here to change things. We provide a smart
                platform with top-notch teachers, dedicated to helping students
                do their best. We make tricky topics easy to understand from
                home, helping students do well and opening doors to better
                education
              </p>
              <p className="text-headingColor">
                Our platform is a safe place for online learning. It lets
                parents keep an eye on their child's progress and share thoughts
                with teachers. Our talented teachers can cover a range of
                subjects, from KS2, KS3, GCSE, IGCSE, and A-Level to IB,
                American, French, and Indian systems. Our lessons can be
                tailored to fit any lifestyle, anywhere in the world.
              </p>
            </div>
          </div>

          <div>
            <img
              src={aboutImg}
              alt="aboutImg"
              className="w-80 object-contain"
            />
          </div>
        </div>

        {/* <div className="md:grid md:grid-col-2 md:gap-4">
          <div className="flex gap-3">
            <div className="rounded-full bg-orangeHeading p-1 h-4 flex-shrink-0">
              <CheckIcon className="w-4 text-white font-bold flex-shrink-0" />
            </div>

            <div className="flex flex-col">
              <h3>Our Mission</h3>

              <p>
                Our mission is to bridge the gap between students and quality
                education regardless of their geographical location. Through
                personalized online tutoring, we aim to empower each student
                with knowledge, skills, and the confidence to excel in their
                studies, paving their way to a bright future.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutSection;
