import React, { useEffect, useState } from "react";
import Selector from "../Selector/Selector";
import {
  ourCurriculum,
  selectedCountries,
  subjectsOffer,
} from "../../data/data";
import useFormValidation from "../../hooks/useFormValidation";
import heroIcon2 from "../../assets/img/heroIcon2.png";
import { motion } from "framer-motion";
import { PhoneInput } from "react-international-phone";

const ContactUs = () => {
  const { errors, validateDemo } = useFormValidation();

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
    } else {
      console.log("Validation errors", errors);
    }
  };

  const countryObjects = selectedCountries.map((country, index) => ({
    id: index + 1, // Ensure IDs are unique and start from 1
    name: country,
  }));

  return (
    <div>
      <div className=" xl:w-[700px] lg:w-[600px] sm:w-[600px] min-[450px]:w-[400px] min-[400px]:w-[350px] w-[300px] bg-contactBg p-8 rounded-lg  shadow-lg ">
        <form
          className="transition-transform duration-500 ease-in-out "
          onSubmit={handleSubmit}
        >
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
              <button className="bg-blueHeading mt-8 text-white px-6 py-2 rounded-full shadow-lg ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
