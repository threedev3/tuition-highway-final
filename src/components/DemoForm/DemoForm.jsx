import React, { useEffect, useState } from "react";
import Selector from "../Selector/Selector";
import {
  ourCurriculum,
  selectedCountries,
  subjectsOffer,
} from "../../data/data";
import useFormValidation from "../../hooks/useFormValidation";
import { motion } from "framer-motion";
import { PhoneInput } from "react-international-phone";
import { useNavigate } from "react-router-dom";

const DemoForm = () => {
  const { errors, validateDemo } = useFormValidation();
  const naviagte = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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

    if (validateDemo(formValues)) {
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
      naviagte("/thankyou");
      scrollToTop();
    } else {
      console.log("Validation errors", errors);
    }
  };

  const countryObjects = selectedCountries.map((country, index) => ({
    id: index + 1, // Ensure IDs are unique and start from 1
    name: country,
  }));

  const subjectOptions = subjectsOffer.map((subject, index) => ({
    id: index,
    name: subject,
  }));

  const grades = Array.from({ length: 13 }, (_, i) => (i + 1).toString());
  const gradeOptions = grades
    .map((grade, index) => ({
      id: index,
      name: grade,
    }))
    .reverse();

  const curriculumOptions = ourCurriculum.map((subject, index) => ({
    id: index,
    name: subject,
  }));

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  // const handlePrev = () => {
  //   if (currentStep > 1) setCurrentStep(currentStep - 1);
  // };
  return (
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
      <div className=" xl:w-[700px] lg:w-[550px] sm:w-[600px] min-[450px]:w-[400px] min-[400px]:w-[350px] w-[300px] bg-contactBg p-8 rounded-lg rounded-tl-none shadow-lg ">
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
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
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
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
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
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
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
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
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
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
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
                    data={countryObjects}
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
                      handleSelectorChange("selectedCurriculum", curriculum)
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
  );
};

export default DemoForm;
