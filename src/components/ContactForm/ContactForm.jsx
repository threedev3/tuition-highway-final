import React, { useEffect, useState } from "react";
import contactImg from "../../assets/img/contactimg.png";

import "react-international-phone/style.css";

import TypewriterComp from "../Typewriter/Typewriter";
import DemoForm from "../DemoForm/DemoForm";
import { useLocation } from "react-router-dom";
import TutorForm from "../TutorForm/TutorForm";

const ContactForm = ({ firstString, secondString, tagLine }) => {
  const location = useLocation();

  // Check if the current route is the "Join as a Tutor" page
  const isTutorPage = location.pathname === "/joinastutor";

  return (
    <div className="sm:py-12 py-12 px-6 max-w-full relative">
      {/* <motion.div
        className="absolute md:top-20 md:left-16 sm:top-8 sm:left-8 top-2 left-4  z-10"
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
          src={heroIcon2}
          alt=""
          className="lg:w-16 md:w-14 sm:w-12 w-10 object-contain"
        />
      </motion.div> */}
      <div className="max-w-[1400px] mx-auto flex flex-col sm:gap-12 gap-8">
        <div className="flex flex-col gap-6 items-center text-headingColor ">
          <TypewriterComp
            firstString={firstString}
            secondString={secondString}
          />
          <p className="lg:text-xl sm:text-lg text-base text-center max-w-4xl mx-auto">
            {tagLine ||
              "Secure your child's academic future with Tuition Highway."}
          </p>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-between lg:items-start lg:gap-8 flex flex-col items-center gap-12 px-4">
          <div className="w-auto">
            <img src={contactImg} alt="" className="w-[500px] object-cover" />
          </div>

          {/* Contact Form will be displayed here  */}
          {isTutorPage ? <TutorForm /> : <DemoForm />}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
