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

const TutorForm = () => {
  const { errors, validateTutor } = useFormValidation();

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    country: null,
    selectedSubject: null,
    selectedGrade: null,
    selectedCurriculum: null,
    qualification: "",
    teachingExperience: "",
    remunerationPerHour: "",
    uploadedResume: [],
    reasonforTeach: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectorChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log("Selected Files: ", files); // Debugging: Log the selected files as an array

    if (files.length > 0) {
      setFormValues((prev) => ({
        ...prev,
        uploadedResume: [...prev.uploadedResume, ...files], // Append the new files to the existing ones
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateTutor(formValues)) {
      // Form is valid, proceed with submission
      console.log("Form Submitted", formValues);
      setFormValues({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        country: null,
        selectedSubject: null,
        selectedGrade: null,
        selectedCurriculum: null,
        qualification: "",
        teachingExperience: "",
        remunerationPerHour: "",
        uploadedResume: [],
        reasonforTeach: "",
      });
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
  const gradeOptions = grades.map((grade, index) => ({
    id: index,
    name: grade,
  }));

  const curriculumOptions = ourCurriculum.map((subject, index) => ({
    id: index,
    name: subject,
  }));

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  // const handlePrev = () => {
  //   if (currentStep > 1) setCurrentStep(currentStep - 1);
  // };
  return (
    <div>
      <div className="flex ">
        <div
          className={`py-4 sm:px-8 min-[375px]:px-6 px-4 text-center cursor-pointer rounded-t-xl font-semibold ${
            currentStep === 1 ? "bg-contactBg" : "bg-contactBg2"
          }`}
          onClick={() => setCurrentStep(1)}
        >
          Step 1
        </div>
        <div
          className={`py-4 sm:px-8 min-[375px]:px-6 px-4 text-center cursor-pointer rounded-t-xl font-semibold ${
            currentStep === 2 ? "bg-contactBg" : "bg-contactBg2"
          }`}
          onClick={() => setCurrentStep(2)}
        >
          Step 2
        </div>
        <div
          className={`py-4 sm:px-8 min-[375px]:px-6 px-4 text-center cursor-pointer rounded-t-xl font-semibold ${
            currentStep === 3 ? "bg-contactBg" : "bg-contactBg2"
          }`}
          onClick={() => setCurrentStep(3)}
        >
          Step 3
        </div>
      </div>
      <div className=" xl:w-[700px] lg:w-[600px] sm:w-[600px] min-[450px]:w-[400px] min-[400px]:w-[350px] w-[300px] bg-contactBg p-8 rounded-lg rounded-tl-none shadow-lg ">
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
                    name="fullName"
                    placeholder="Full Name"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                  />
                  {errors.fullName && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.fullName}
                    </span>
                  )}
                </div>

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
              </div>
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
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
              </div>
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
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
                    placeholder="Subject You Teach"
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
                    placeholder="Grade You Teach"
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
                    placeholder="Curriculum You Teach"
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
                <button
                  onClick={handleNext}
                  className="bg-blueHeading mt-8 text-white px-6 py-2 rounded-full shadow-lg "
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {currentStep === 3 && (
            <div className="sm:space-y-6">
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  {/* <input
                          type="text"
                          placeholder="Subject"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] "
                        /> */}

                  <input
                    type="text"
                    name="qualification"
                    placeholder="Your Qualification"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.qualification}
                    onChange={handleInputChange}
                  />
                  {errors.qualification && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.qualification}
                    </span>
                  )}
                </div>
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  {/* <input
                          type="text"
                          placeholder="Grade/Year"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px]"
                        /> */}

                  <input
                    type="text"
                    name="teachingExperience"
                    placeholder="Teaching Experience"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.teachingExperience}
                    onChange={handleInputChange}
                  />
                  {errors.teachingExperience && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.teachingExperience}
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

                  <input
                    type="text"
                    name="remunerationPerHour"
                    placeholder="Remuneration Per Hour"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.remunerationPerHour}
                    onChange={handleInputChange}
                  />
                  {errors.remunerationPerHour && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.remunerationPerHour}
                    </span>
                  )}
                </div>
              </div>
              <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col">
                <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                  <label className="block text-headingColor sm:text-base text-sm mb-1">
                    Upload Your Resume and Cover Letter
                  </label>
                  <input
                    type="file"
                    name="uploadedResume"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none sm:placeholder:text-base placeholder:text-sm"
                    onChange={handleFileChange}
                    multiple // Allow multiple file uploads
                  />
                  {errors.uploadedResume && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.uploadedResume}
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

                  <textarea
                    name="reasonforTeach"
                    placeholder="Reason For Teach"
                    className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                    value={formValues.reasonforTeach}
                    onChange={handleInputChange}
                    rows={3}
                  ></textarea>
                  {errors.reasonforTeach && (
                    <span className="text-red-600 sm:text-base text-sm">
                      {errors.reasonforTeach}
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

export default TutorForm;
