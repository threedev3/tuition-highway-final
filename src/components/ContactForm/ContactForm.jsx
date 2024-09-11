import React, { useEffect, useState } from "react";
import contactImg from "../../assets/img/contactimg.png";

import "react-international-phone/style.css";

import TypewriterComp from "../Typewriter/Typewriter";
import DemoForm from "../DemoForm/DemoForm";
import { useLocation } from "react-router-dom";
import TutorForm from "../TutorForm/TutorForm";
import ContactUs from "../ContactUs/ContactUs";
import { AnimatePresence, motion } from "framer-motion";

const ContactForm = ({ firstString, secondString, tagLine }) => {
  const location = useLocation();

  // Check if the current route is the "Join as a Tutor" page
  const isTutorPage = location.pathname === "/joinastutor";
  const isContactPage = location.pathname === "/contact";

  const [showDemoText, setShowDemoText] = useState(true);

  useEffect(() => {
    // Toggle the state every 3 seconds (3000 milliseconds)
    const interval = setInterval(() => {
      setShowDemoText((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="sm:py-8 py-6 px-6 max-w-full relative">
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
          {/* <TypewriterComp
            firstString={firstString}
            secondString={secondString}
          /> */}
          <AnimatePresence mode="wait">
            {showDemoText ? (
              <motion.h3
                key="demo"
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="xl:text-[42px] xl:leading-tight lg:text-4xl lg:leading-tight md:text-[40px] md:leading-10 min-[540px]:text-3xl min-[346px]:text-2xl text-[22px] font-bold tracking-wide text-center gap-3 text-headingColor"
              >
                {isTutorPage
                  ? "Join As Tutor"
                  : isContactPage
                  ? "Contact Us For More Details"
                  : "Book A Free Demo"}
              </motion.h3>
            ) : (
              <motion.h3
                key="callback"
                initial={{ rotateX: 90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                exit={{ rotateX: -90, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="xl:text-[42px] xl:leading-tight lg:text-4xl lg:leading-tight md:text-[40px] md:leading-10 min-[540px]:text-3xl min-[346px]:text-2xl text-[22px] font-bold tracking-wide text-center gap-3 text-headingColor"
              >
                {isTutorPage
                  ? "Submit Your Resume"
                  : isContactPage
                  ? "Request For Any Query"
                  : "Request a Call Back"}
              </motion.h3>
            )}
          </AnimatePresence>
          <p className="xl:text-xl sm:text-lg text-base text-center max-w-4xl mx-auto">
            {tagLine ||
              "Experience our top-notch tutoring firsthand. Schedule your free session today and see how we can transform your academic journey."}
          </p>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-between lg:items-start lg:gap-8 flex flex-col items-center gap-12 px-4">
          <div className="w-auto">
            <img src={contactImg} alt="" className="w-[500px] object-cover" />
          </div>

          {/* Contact Form will be displayed here  */}
          {isTutorPage ? (
            <TutorForm />
          ) : isContactPage ? (
            <ContactUs />
          ) : (
            <DemoForm />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
