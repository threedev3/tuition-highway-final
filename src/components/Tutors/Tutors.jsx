import React from "react";
import twitterIcon from "../../assets/img/twitterIcon.png";
import linkedInIcon from "../../assets/img/linkedInIcon.png";
import CustomButton from "../CustomButton/CustomButton";
import pencil from "../../assets/img/pencil.png";
import { motion } from "framer-motion";
import { tutors } from "../../data/data";

const Tutors = () => {
  return (
    <div className="md:py-20 py-12 px-6 max-w-full relative">
      <div className="absolute inset-0 bg-heroBg transition-all duration-500 ease-in-out blur-md "></div>

      <motion.div
        className="absolute md:top-10 md:left-10 sm:top-8 sm:left-8 top-2 left-4  z-10"
        initial={{ opacity: 0, y: -50, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={true}
        transition={{
          type: "spring",
          stiffness: 70,
          damping: 10,
          duration: 0.6,
          delay: 0.2,
        }}
      >
        <img
          src={pencil}
          alt=""
          className="md:w-16 sm:w-16 w-10 object-contain"
        />
      </motion.div>

      {/* <div className="absolute top-10 left-0 w-36 -z-10">
        <img src={homework} alt="" className="object-contain" />
      </div> */}
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 z-10 relative">
        <div className="flex flex-col gap-6 items-center text-headingColor ">
          <h3 className="xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl font-bold tracking-wide text-center">
            Our Top Rated Faculty
          </h3>
          <p className="lg:text-xl sm:text-lg text-base text-center max-w-4xl mx-auto">
            We unite you with the world's finest educators. Our meticulously
            selected, top-rated faculty brings unparalleled expertise and
            inspirational teaching directly to you, fueling your journey towards
            academic mastery.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-10 md:grid md:grid-cols-2 md:gap-10 grid grid-cols-1 gap-10">
          {tutors.slice(0, 4).map((tutor, index) => (
            <div
              key={index}
              className="bg-chooseBg p-6 flex flex-col gap-6 items-center  shadow-md rounded-[30px] hover:shadow-xl transition-shadow duration-300 relative "
            >
              <div className="w-auto">
                <img src={tutor.icon} alt="" className="object-cover" />
              </div>

              <div className="max-w-[246px] flex flex-col gap-1">
                <p className="md:text-xl text-xl text-headingColor text-center min-h-[56px] font-semibold">
                  {tutor.name}
                </p>
                <p className="sm:text-base text-sm text-orangeHeading text-center">
                  {tutor.subject}
                </p>
              </div>

              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-row  items-center gap-1 text-tutorText text-base">
                  <p className="flex-1">Experience: </p>
                  <p>{tutor.experience}</p>
                </div>
                <div className="flex flex-row items-center gap-1 text-tutorText text-base">
                  <p className="flex-1">Grade: </p>
                  <p>{tutor.grade}</p>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <img src={twitterIcon} alt="" className="cursor-pointer" />
                <img src={linkedInIcon} alt="" className="cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", damping: 17 }}
        >
          <CustomButton text="More Tutor" />
        </motion.div>
      </div>
    </div>
  );
};

export default Tutors;
