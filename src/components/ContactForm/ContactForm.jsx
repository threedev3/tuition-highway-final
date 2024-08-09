import React, { useState } from "react";
import contactImg from "../../assets/img/contactimg.png";
import heroIcon2 from "../../assets/img/heroIcon2.png";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  // const handlePrev = () => {
  //   if (currentStep > 1) setCurrentStep(currentStep - 1);
  // };

  return (
    <div className="sm:py-20 py-12 px-6 max-w-full relative">
      <motion.div
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
          className="md:w-16 sm:w-16 w-10 object-contain"
        />
      </motion.div>
      <div className="max-w-[1400px] mx-auto flex flex-col sm:gap-12 gap-8">
        <div className="flex flex-col gap-6 items-center text-headingColor ">
          <h3 className="xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl font-bold tracking-wide text-center sm:mt-0 mt-2">
            Request a Free{" "}
            <span className="text-orangeHeading font-MontserratBold">Demo</span>
          </h3>
          <p className="lg:text-lg sm:text-base text-sm text-center max-w-sm mx-auto">
            Secure your child's academic future with Tuition Highway.
          </p>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-8 flex flex-col items-center gap-12 px-4">
          <div className="w-auto">
            <img src={contactImg} alt="" className="w-[500px] object-cover" />
          </div>

          {/* Contact Form will be displayed here  */}
          <div>
            <div className="flex ">
              <div
                className={`py-4 px-8 text-center cursor-pointer rounded-t-xl font-semibold ${
                  currentStep === 1 ? "bg-contactBg" : "bg-contactBg2"
                }`}
                onClick={() => setCurrentStep(1)}
              >
                Step 1
              </div>
              <div
                className={`py-4 px-8 text-center cursor-pointer rounded-t-xl font-semibold ${
                  currentStep === 2 ? "bg-contactBg" : "bg-contactBg2"
                }`}
                onClick={() => setCurrentStep(2)}
              >
                Step 2
              </div>
            </div>
            <div className=" xl:w-[700px] lg:w-[600px] sm:w-[600px] min-[450px]:w-[400px] bg-contactBg p-8 rounded-lg rounded-tl-none shadow-lg ">
              <div className="transition-transform duration-500 ease-in-out ">
                {currentStep === 1 && (
                  <div className="sm:space-y-6">
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          placeholder="Parent Name"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none sm:placeholder:text-base placeholder:text-sm"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          placeholder="Student Name"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none sm:placeholder:text-base placeholder:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="email"
                          placeholder="Email"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none sm:placeholder:text-base placeholder:text-sm"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          placeholder="WhatsApp/Mobile Number"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none sm:placeholder:text-base placeholder:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          placeholder="City"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none sm:placeholder:text-base placeholder:text-sm"
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          placeholder="Country"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none sm:placeholder:text-base placeholder:text-sm"
                        />
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        onClick={handleNext}
                        className="bg-orangeHeading mt-8 text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-600"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="sm:space-y-6">
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none "
                        />
                      </div>
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          placeholder="Grade/Year"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col">
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="email"
                          placeholder="Curriculum"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none"
                        />
                      </div>
                    </div>
                    {/* Add more fields as needed */}
                    <div className="text-right">
                      {/* <button
                        onClick={handlePrev}
                        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-400 mr-4"
                      >
                        Previous
                      </button> */}
                      <button className="bg-orangeHeading  mt-8 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-orange-600">
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
