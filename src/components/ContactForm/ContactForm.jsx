import React, { useEffect, useState } from "react";
import contactImg from "../../assets/img/contactimg.png";
import contactImg2 from "../../assets/img/freeDemo2.png";

import "react-international-phone/style.css";

import TypewriterComp from "../Typewriter/Typewriter";
import DemoForm from "../DemoForm/DemoForm";
import { useLocation } from "react-router-dom";
import TutorForm from "../TutorForm/TutorForm";
import ContactUs from "../ContactUs/ContactUs";
import { AnimatePresence, motion } from "framer-motion";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/20/solid";


const ContactForm = ({ firstString, secondString, tagLine }) => {
  const location = useLocation();

  // Check if the current route is the "Join as a Tutor" page
  const isTutorPage = location.pathname === "/join-as-a-tutor";
  const isContactPage = location.pathname === "/contact-us";

  const [showDemoText, setShowDemoText] = useState(true);

  useEffect(() => {
    // Toggle the state every 3 seconds (3000 milliseconds)
    const interval = setInterval(() => {
      setShowDemoText((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="sm:py-8 py-6 sm:px-12 px-6 max-w-full relative">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:gap-12 gap-8">
        <div className="flex flex-col gap-6 items-center text-headingColor ">
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
          <p className="xl:text-lg sm:text-lg text-base text-center max-w-4xl mx-auto">
            {tagLine ||
              "Experience our top-notch tutoring firsthand. Schedule your free session today and see how we can transform your academic journey."}
          </p>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-8 flex flex-col items-center gap-12 px-4">
          {!isContactPage && (
            <div className="lg:block hidden w-auto">
              
              <img
                src={isTutorPage ? contactImg2 : contactImg}
                alt=""
                className="w-[500px] object-cover"
              />
            </div>
          )}
          {isContactPage && (
            <div className="flex flex-col gap-8">
              <div className="flex flex-row xl:gap-6 lg:gap-3 sm:gap-6 gap-6 items-center">
                <MapPinIcon
                  className="xl:w-8 lg:w-6 sm:w-8 w-6 flex-shrink-0"
                  color="#008fbf"
                />
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-headingColor xl:text-[22px] lg:text-xl sm:text-[22px] text-lg">
                    Address
                  </h3>
                  <p className="text-headingColor xl:text-base lg:text-sm sm:text-base text-sm">
                    ASE Global LLC-FZ Business Centre, Meydan Hotel, Nad Al
                    Sheeba, Dubai, UAE
                  </p>
                </div>
              </div>
              <div className="flex flex-row xl:gap-6 lg:gap-3 sm:gap-6 gap-6 items-center">
                <PhoneIcon
                  className="xl:w-8 lg:w-6 sm:w-8 w-6 flex-shrink-0"
                  color="#008fbf"
                />
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-headingColor xl:text-[22px] lg:text-xl sm:text-[22px] text-lg">
                    Call Us
                  </h3>
                  <p className="text-headingColor xl:text-base lg:text-sm sm:text-base text-sm">
                    +971563511722
                  </p>
                </div>
              </div>
              <div className="flex flex-row xl:gap-6 lg:gap-3 sm:gap-6 gap-6 items-center">
                <EnvelopeIcon
                  className="xl:w-8 lg:w-6 sm:w-8 w-6 flex-shrink-0"
                  color="#008fbf"
                />
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-headingColor xl:text-[22px] lg:text-xl sm:text-[22px] text-lg">
                    Email Us
                  </h3>
                  <p className="text-headingColor xl:text-base lg:text-sm sm:text-base text-sm">
                    hello@tuitionhighway.com
                  </p>
                </div>
              </div>
            </div>
          )}
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
