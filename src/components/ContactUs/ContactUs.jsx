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
  const { errors, validateContactForm } = useFormValidation();

  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    country: null,
    message: "",
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

    if (validateContactForm(formValues)) {
      // Form is valid, proceed with submission
      console.log("Form Submitted", formValues);
      setFormValues({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        country: null,
        message: "",
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
            <div className="sm:flex sm:flex-row sm:justify-between sm:items-center sm:gap-8 flex flex-col ">
              <div className="flex-1 flex flex-col gap-1 sm:mb-0 mb-3">
                {/* <input
                          type="email"
                          placeholder="Curriculum"
                          className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px]"
                        /> */}

                <textarea
                  name="message"
                  placeholder="Any Message"
                  className="py-2 border-b-2 border-b-borderColor bg-transparent focus:outline-none focus:border-b-[3px] sm:placeholder:text-base placeholder:text-sm placeholder:text-headingColor"
                  value={formValues.message}
                  onChange={handleInputChange}
                  rows={3}
                ></textarea>
                {errors.message && (
                  <span className="text-red-600 sm:text-base text-sm">
                    {errors.message}
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
