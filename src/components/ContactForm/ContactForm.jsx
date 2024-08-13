import React, { useEffect, useState } from "react";
import contactImg from "../../assets/img/contactimg.png";
import heroIcon2 from "../../assets/img/heroIcon2.png";
import { motion } from "framer-motion";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { City, Country, State } from "country-state-city";
import Selector from "../Selector/Selector";
import {
  ourCurriculum,
  selectedCountries,
  subjectsOffer,
} from "../../data/data";
import useFormValidation from "../../hooks/useFormValidation";

const ContactForm = () => {
  const { errors, validate } = useFormValidation();

  const [formValues, setFormValues] = useState({
    parentName: "",
    studentName: "",
    email: "",
    phone: "",
    city: "",
    country: null,
    selectedSubject: null,
    selectedGrade: null,
    selectedCurriculum: null,
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectorChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate(formValues)) {
      // Form is valid, proceed with submission
      console.log("Form Submitted", formValues);
      setFormValues({
        parentName: "",
        studentName: "",
        email: "",
        phone: "",
        city: "",
        country: null,
        selectedSubject: null,
        selectedGrade: null,
        selectedCurriculum: null,
      });
    } else {
      console.log("Validation errors", errors);
    }
  };

  let countryData = Country.getAllCountries();

  // Filter the countryData to only include selected countries
  let filteredCountryData = countryData.filter((country) =>
    selectedCountries.includes(country.name)
  );

  const [country, setCountry] = useState(filteredCountryData);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjectOptions = subjectsOffer.map((subject, index) => ({
    id: index,
    name: subject,
  }));

  const grades = Array.from({ length: 13 }, (_, i) => (i + 1).toString());

  const [selectedGrade, setSelectedGrade] = useState(null);

  const gradeOptions = grades.map((grade, index) => ({
    id: index,
    name: grade,
  }));

  const [selectedCurriculum, setSelectedCurriculum] = useState(null);

  const curriculumOptions = ourCurriculum.map((subject, index) => ({
    id: index,
    name: subject,
  }));

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const [phone, setPhone] = useState("");

  // const handlePrev = () => {
  //   if (currentStep > 1) setCurrentStep(currentStep - 1);
  // };

  return (
    <div className="sm:py-12 py-12 px-6 max-w-full relative">
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
          className="lg:w-16 md:w-14 sm:w-12 w-10 object-contain"
        />
      </motion.div>
      <div className="max-w-[1400px] mx-auto flex flex-col sm:gap-12 gap-8">
        <div className="flex flex-col gap-6 items-center text-headingColor ">
          <h3 className="xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl font-bold tracking-wide text-center sm:mt-0 mt-2">
            Request a Free{" "}
            <span className="text-blueHeading font-MontserratBold">Demo</span>
          </h3>
          <p className="lg:text-xl sm:text-lg text-base text-center max-w-4xl mx-auto">
            Secure your child's academic future with Tuition Highway.
          </p>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-between lg:items-start lg:gap-8 flex flex-col items-center gap-12 px-4">
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
              <form
                className="transition-transform duration-500 ease-in-out "
                onSubmit={handleSubmit}
              >
                {currentStep === 1 && (
                  <div className="sm:space-y-6">
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          name="parentName"
                          placeholder="Parent Name"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm"
                          value={formValues.parentName}
                          onChange={handleInputChange}
                        />
                        {errors.parentName && (
                          <span className="text-red-600 sm:text-base text-sm">
                            {errors.parentName}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          name="studentName"
                          placeholder="Student Name"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm"
                          value={formValues.studentName}
                          onChange={handleInputChange}
                        />
                        {errors.studentName && (
                          <span className="text-red-600 sm:text-base text-sm">
                            {errors.studentName}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm"
                          value={formValues.email}
                          onChange={handleInputChange}
                        />
                        {errors.email && (
                          <span className="text-red-600 sm:text-base text-sm">
                            {errors.email}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          name="phone"
                          placeholder="WhatsApp/Mobile Number"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm"
                          value={formValues.phone}
                          onChange={handleInputChange}
                        />
                        {errors.phone && (
                          <span className="text-red-600 sm:text-base text-sm">
                            {errors.phone}
                          </span>
                        )}
                        {/* <div className="py-0.5 border-b-2 border-b-borderColor bg-transparent focus:outline-none sm:placeholder:text-base placeholder:text-sm">
                          <PhoneInput
                            defaultCountry="pk"
                            value={phone}
                            onChange={(phone) => setPhone(phone)}
                            placeholder="Country"
                          />
                        </div> */}
                      </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        <input
                          type="text"
                          name="city"
                          placeholder="City"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm"
                          value={formValues.city}
                          onChange={handleInputChange}
                        />
                        {errors.city && (
                          <span className="text-red-600 sm:text-base text-sm">
                            {errors.city}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        {/* <input
                          type="text"
                          placeholder="Country"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm"
                        /> */}

                        <Selector
                          data={filteredCountryData}
                          selected={formValues.country}
                          setSelected={(country) =>
                            handleSelectorChange("country", country)
                          }
                          placeholder="Select Country"
                        />
                        {errors.country && (
                          <span className="text-red-600 sm:text-base text-sm">
                            {errors.country}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        onClick={handleNext}
                        className="bg-blueHeading mt-8 text-white px-6 py-2 rounded-full shadow-lg "
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
                        {/* <input
                          type="text"
                          placeholder="Subject"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] "
                        /> */}

                        <Selector
                          data={subjectOptions}
                          selected={formValues.selectedSubject}
                          setSelected={(subject) =>
                            handleSelectorChange("selectedSubject", subject)
                          }
                          placeholder="Select Subject"
                        />
                        {errors.selectedSubject && (
                          <span className="text-red-600 sm:text-base text-sm">
                            {errors.selectedSubject}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        {/* <input
                          type="text"
                          placeholder="Grade/Year"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px]"
                        /> */}

                        <Selector
                          data={gradeOptions}
                          selected={formValues.selectedGrade}
                          setSelected={(grade) =>
                            handleSelectorChange("selectedGrade", grade)
                          }
                          placeholder="Select Grade"
                        />
                        {errors.selectedGrade && (
                          <span className="text-red-600 sm:text-base text-sm">
                            {errors.selectedGrade}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col">
                      <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                        {/* <input
                          type="email"
                          placeholder="Curriculum"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px]"
                        /> */}

                        <Selector
                          data={curriculumOptions}
                          selected={formValues.selectedCurriculum}
                          setSelected={(curriculum) =>
                            handleSelectorChange(
                              "selectedCurriculum",
                              curriculum
                            )
                          }
                          placeholder="Select Curriculum"
                        />
                        {errors.selectedCurriculum && (
                          <span className="text-red-600 sm:text-base text-sm">
                            {errors.selectedCurriculum}
                          </span>
                        )}
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
                      <button className="bg-orangeHeading  mt-8 text-white px-6 py-2 rounded-full shadow-lg hover:bg-orange-600">
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
