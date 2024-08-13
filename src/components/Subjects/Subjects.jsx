import React, { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import heroIcon1 from "../../assets/img/heroIcon1.png";
import { motion } from "framer-motion";
import { subjects, curricula } from "../../data/data";

const Subjects = () => {
  const [activeView, setActiveView] = useState("subjects");

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const renderItems = () => {
    if (activeView === "subjects") {
      return subjects.slice(0, 6).map((item, index) => (
        <div
          key={index}
          className="p-3 lg:px-3 px-3 rounded-[30px] shadow-lg flex items-center gap-3 hover:shadow-2xl transition-shadow duration-300 bg-white h-[120px]"
        >
          <div className="flex-shrink-0 sm:w-[90px] w-[80px]">
            <img src={item.img} alt="" className="object-cover w-full h-auto" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="sm:text-xl text-lg font-semibold">{item.title}</p>
            <p className="sm:text-base text-sm">{item.subtitle}</p>
          </div>
        </div>
      ));
    } else {
      return curricula.slice(0, 6).map((item, index) => (
        <div
          key={index}
          className="p-3 lg:px-5 px-5 rounded-[30px] shadow-lg flex items-center gap-6 hover:shadow-2xl transition-shadow duration-300 bg-white h-[120px]"
        >
          <div className="flex-shrink-0 sm:w-[60px]  w-[60px]">
            <img src={item.img} alt="" className="object-cover w-full h-auto" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="sm:text-xl text-lg font-semibold">{item.title}</p>
            <p className="sm:text-base text-sm">{item.subtitle}</p>
          </div>
        </div>
      ));
    }
  };
  return (
    <div className="md:py-20 py-12 px-6 max-w-full relative bg-heroBg">
      <motion.div
        className="absolute md:top-10 md:left-10 sm:top-8 sm:left-8 top-2 left-2 md:w-24 sm:w-16 w-14 z-10"
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
              onClick={() => handleViewChange("curricula")}
              className={`py-1.5 sm:px-6 px-4 rounded-full sm:text-base text-sm transition-all duration-300 ${
                activeView === "curricula"
                  ? "bg-activeBlueBtn text-white"
                  : "bg-subjectBtn text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 17 }}
            >
              Curricula Coverage
            </motion.button>
            <motion.button
              onClick={() => handleViewChange("subjects")}
              className={`py-1.5 sm:px-6 px-4 rounded-full sm:text-base text-sm transition-all duration-300 ${
                activeView === "subjects"
                  ? "bg-activeBlueBtn text-white"
                  : "bg-subjectBtn text-white"
              }`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", damping: 17 }}
            >
              Popular Subjects
            </motion.button>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-10 md:grid md:grid-cols-2 md:gap-10 grid grid-cols-1 gap-10">
          {renderItems()}
        </div>

        <motion.div
          className="flex justify-center w-fit mx-auto rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", damping: 17 }}
        >
          <CustomButton
            text={`Other Key ${
              activeView === "subjects" ? "Subjects" : "Curriculum"
            } `}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Subjects;
