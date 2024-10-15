import React, { useEffect, useState } from "react";
import mainLogo from "../../assets/img/mainLogo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import CustomButton from "../CustomButton/CustomButton";
import { Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { navigationData } from "../../data/data";
import LazyImage from "../LazyLoadImage/LazyImage";

const Navbar = ({ demoRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeItem, setActiveItem] = useState(null); // State to track the active item
  const location = useLocation(); // Hook to get the current location

  const sections = {
    Demo: demoRef,
  };

  const handleNavClick = (section) => {
    const targetRef = sections[section];

    if (targetRef && targetRef.current) {
      window.scrollTo({
        top: targetRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleSection = (section) => {
    setExpandedSection((prevSection) =>
      prevSection === section ? null : section
    );
  };

  useEffect(() => {
    // Toggle body overflow based on the menu state
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup overflow style on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const contentSections = document.querySelectorAll(".content-section");
    contentSections.forEach((section) => {
      if (section.dataset.section === expandedSection) {
        section.style.height = section.scrollHeight + "px";
      } else {
        section.style.height = "0px";
      }
    });
  }, [expandedSection]);

  useEffect(() => {
    // Set active item based on the current path
    setActiveItem(location.pathname);
  }, [location]);

  const handleItemClick = (to) => {
    setActiveItem(to); // Update the active item
    scrollToTop(); // Scroll to the top
    setIsOpen(false); // Close the menu
  };

  // Combined navigation data

  return (
    <nav
      id="navbar"
      className="bg-white sm:py-4 py-3 sm:px-12 px-6 max-w-full shadow-sm sticky top-0 z-20"
    >
      <div className="">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          <div className=" cursor-pointer">
            <Link to={"/"}>
              <LazyImage
                src={mainLogo}
                alt="Logo"
                // width="300px"
                // height="auto"
                className="sm:w-[164px] w-[150px] object-contain"
                onClick={scrollToTop}
              />
              {/* <img
                src={mainLogo}
                alt=""
                
              /> */}
            </Link>
          </div>

          <div className="md:flex md:justify-between md:items-center md:gap-16">
            <div className="md:block hidden">
              <div className="flex gap-4 items-center">
                <div onClick={() => handleNavClick("Demo")}>
                  <CustomButton text="Book A Free Trial" />
                </div>
                <Link
                  to="https://portal.tuitionhighway.com/"
                  target="_blank"
                  className="bg-blueBtn py-1.5 px-6 text-white rounded-full sm:text-base text-sm"
                >
                  Portal Login
                </Link>
              </div>
            </div>

            <button className="" onClick={() => setIsOpen(!isOpen)}>
              <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <Transition
        as="div"
        show={isOpen}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 z-50 bg-white px-6 py-6 overflow-y-auto"
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="flex justify-end ">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 text-5xl"
            >
              &times;
            </button>
          </div>
          <div className="flex flex-col gap-8 h-full">
            {/* Grid layout for medium and larger screens */}
            <div className="hidden md:grid lg:grid-cols-3 md:grid-cols-3 gap-6">
              {Object.entries(navigationData).map(([section, items]) => (
                <div key={section}>
                  <h3 className="text-xl text-headingColor capitalize border-b-2 border-b-headingColor pb-6">
                    {section}
                  </h3>
                  <ul className="space-y-6 pt-6">
                    {items.map((item) => (
                      <li key={item.title}>
                        <Link
                          to={item.to}
                          className={`text-headingColor font-semibold text-base relative group transition-all duration-300 ease-in-out ${
                            activeItem === item.to ? "text-orangeHeading" : ""
                          }`}
                          onClick={() => handleItemClick(item.to)}
                        >
                          <span className="group-hover:text-orangeHeading transition-all duration-300 ease-in-out">
                            {item.title}
                          </span>
                          <span
                            className={`absolute bottom-0 left-0 h-0.5 w-0 bg-orangeHeading transition-all duration-300 ease-in-out group-hover:w-full ${
                              activeItem === item.to ? "w-full" : ""
                            }`}
                          ></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Accordion layout for smaller screens */}
            <div className="md:hidden">
              {Object.entries(navigationData).map(
                ([section, items], index, array) => (
                  <div
                    key={section}
                    className={`pt-6 pb-4 ${
                      index !== array.length - 1
                        ? "border-b-2 border-b-headingColor"
                        : ""
                    }`}
                  >
                    <button
                      className="flex justify-between items-center w-full text-left focus:outline-none cursor-pointer"
                      onClick={() => toggleSection(section)}
                    >
                      <h3 className="text-lg text-headingColor capitalize">
                        {section}
                      </h3>
                      {expandedSection === section ? (
                        <ChevronUpIcon className="w-5 h-5 text-headingColor" />
                      ) : (
                        <ChevronDownIcon className="w-5 h-5 text-headingColor" />
                      )}
                    </button>
                    <div
                      className="content-section overflow-hidden transition-all duration-500 ease-in-out"
                      data-section={section}
                      style={{ height: "0px" }}
                    >
                      <ul className="space-y-6 pt-3">
                        {items.map((item) => (
                          <li key={item.title}>
                            <Link
                              to={item.to}
                              className={`text-headingColor font-semibold text-base relative group transition-all duration-300 ease-in-out ${
                                activeItem === item.to
                                  ? "text-orangeHeading"
                                  : ""
                              }`}
                              onClick={() => {
                                handleItemClick(item.to);
                                setExpandedSection(null);
                              }}
                            >
                              <span className="group-hover:text-orangeHeading transition-all duration-300 ease-in-out">
                                {item.title}
                              </span>
                              <span
                                className={`absolute bottom-0 left-0 h-0.5 w-0 bg-orangeHeading transition-all duration-300 ease-in-out ${
                                  activeItem === item.to ? "w-full" : ""
                                }`}
                              ></span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="md:hidden flex gap-3 items-center">
              <div
                onClick={() => {
                  setIsOpen(false);
                  handleNavClick("Demo");
                }}
              >
                <CustomButton text="Book A Free Trial" />
              </div>
              <Link
                to="https://portal.tuitionhighway.com/"
                target="_blank"
                className="bg-blueBtn py-1.5 px-6 text-white rounded-full sm:text-base text-sm"
                onClick={() => setIsOpen(false)}
              >
                Portal Login
              </Link>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
