import React, { useEffect, useRef, useState } from "react";
import computer from "../../assets/img/computer.gif";
import maths from "../../assets/img/maths.gif";
import physics from "../../assets/img/physics.gif";
import brownBook from "../../assets/img/brownBook.png";
import CustomButton from "../CustomButton/CustomButton";
import heroIcon1 from "../../assets/img/heroIcon1.png";
import { motion } from "framer-motion";

const Subjects = () => {
  const subjects = [
    {
      title: "Mathematics",
      img: maths,
    },
    {
      title: "Physics",
      img: physics,
    },
    {
      title: "Chemistry",
      img: computer,
    },
    {
      title: "English",
      img: maths,
    },
    {
      title: "Biology",
      img: physics,
    },
    {
      title: "Modern Languages",
      img: computer,
    },
  ];

  return (
    <div className="md:py-20 py-12 px-6 max-w-full relative bg-heroBg">
      {/* <div className="absolute inset-0 bg-heroBg transition-all duration-500 ease-in-out blur-md "></div> */}

      <motion.div
        className="absolute md:top-10 md:left-10 sm:top-8 sm:left-8 top-4 left-4 md:w-24 w-16 z-10"
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
        <img src={heroIcon1} alt="" className="object-contain" />
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col justify-center sm:gap-20 gap-8">
        <div className="flex flex-col sm:gap-6 gap-4 items-center text-headingColor max-w-5xl mx-auto">
          <p className="lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-semibold text-center">
            Coverage
          </p>
          <h3 className="lg:text-[46px] sm:text-4xl text-[28px] leading-9 font-bold tracking-wide text-center">
            Curricula & Subjects
          </h3>
          <p className="lg:text-xl md:text-lg text-base text-center">
            At Tuition Highway, we offer expert tutoring across a wide range of
            curricula and subjects, ensuring your child gets the specific
            support they need.
          </p>

          <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
            <motion.button
              className="py-1.5 sm:px-6 px-4 bg-subjectBtn text-white rounded-full sm:text-base text-sm"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 17 }}
            >
              Curricula Coverage
            </motion.button>
            <motion.button
              className="py-1.5 sm:px-6 px-4 bg-blueBtn text-white rounded-full sm:text-base text-sm"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 17 }}
            >
              Popular Subjects
            </motion.button>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10 md:grid md:grid-cols-2 md:gap-10 grid grid-cols-1 gap-10">
          {subjects.map((item, index) => (
            <div
              key={index}
              className="p-3 lg:px-3 px-3 rounded-[30px] shadow-lg flex items-center gap-3 hover:shadow-2xl transition-shadow duration-300 bg-white h-fit"
            >
              <div className="">
                <img
                  src={item.img}
                  alt=""
                  className="sm:w-[90px] w-[90px] object-cover"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="sm:text-xl text-lg font-semibold">{item.title}</p>
                <p className="sm:text-base text-sm">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", damping: 17 }}
        >
          <CustomButton text="Other Key Subjects" />
        </motion.div>
      </div>
    </div>
  );
};

export default Subjects;
