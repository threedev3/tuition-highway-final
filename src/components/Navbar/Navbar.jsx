import React, { useEffect, useState } from "react";
import mainLogo from "../../assets/img/mainLogo.png";
import { Bars3Icon } from "@heroicons/react/24/outline";
import CustomButton from "../CustomButton/CustomButton";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

const Navbar = ({ demoRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    "Main Pages": false,
    "What We Teach": false,
    "Subjects Offering": false,
  });

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
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
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

  // Combined navigation data
  const navigationData = {
    "Main Pages": [
      { title: "Home", to: "/" },
      { title: "About Us", to: "/about" },
      { title: "Testimonials", to: "/testimonials" },
      { title: "Join As a Tutor", to: "/joinastutor" },
      { title: "Taking a Demo", to: "/takingdemo" },
      { title: "Blogs", to: "/blogs" },
      { title: "Privacy Policy", to: "/privacypolicy" },
    ],
    "What We Teach": [
      { title: "British Curriculum", to: "/british-curriculum" },
      { title: "American Curriculum", to: "/american-curriculum" },
      { title: "International Baccalaureate", to: "/ib" },
      { title: "Online / Homeschooling", to: "/online-home" },
      { title: "Indian CBSE", to: "/indian-cbse" },
      { title: "French Curriculum", to: "/french-curriculum" },
    ],
    "Subjects Offering": [
      { title: "Mathematics", to: "/maths" },
      { title: "Chemistry", to: "/chemistry" },
      { title: "Biology", to: "/bio" },
      { title: "Physics", to: "/physics" },
      { title: "Economics", to: "/economics" },
      { title: "Accounts", to: "/accounts" },
      { title: "Business Studies", to: "/business" },
      { title: "English", to: "/english" },
      { title: "Sociology", to: "/sociology" },
      { title: "Psychology", to: "/psychology" },
      { title: "Business Law", to: "/business-law" },
      { title: "Computer Science", to: "/computer-science" },
    ],
  };

  return (
    <div
      id="navbar"
      className="bg-white p-4 max-w-full shadow-md sticky top-0 z-20"
    >
      <div className="">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          <div className="w-[164px] cursor-pointer">
            <img
              src={mainLogo}
              alt="Logo"
              className="object-cover"
              onClick={scrollToTop}
            />
          </div>

          <div className="md:flex md:justify-between md:items-center md:gap-16">
            <div className="md:block hidden">
              <div className="flex gap-4 items-center">
                <div onClick={() => handleNavClick("Demo")}>
                  <CustomButton text="Book A Free Trial" />
                </div>
                <button className="bg-blueBtn py-1.5 px-6 text-white rounded-full sm:text-base text-sm">
                  Portal Login
                </button>
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
        className="fixed inset-0 z-30 bg-white px-6 py-6 overflow-y-auto"
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
          <div className="flex flex-col gap-3 h-full">
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
                          className="text-headingColor font-semibold text-base "
                          onClick={() => setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Accordion layout for smaller screens */}
            <div className="md:hidden">
              {Object.entries(navigationData).map(([section, items]) => (
                <div
                  key={section}
                  className="border-b-2 border-b-headingColor pt-6 pb-3"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => toggleSection(section)}
                  >
                    <h3 className="text-xl text-headingColor capitalize">
                      {section}
                    </h3>
                    {expandedSections[section] ? (
                      <ChevronUpIcon className="w-6 h-6 text-headingColor" />
                    ) : (
                      <ChevronDownIcon className="w-6 h-6 text-headingColor" />
                    )}
                  </div>
                  <Transition
                    show={expandedSections[section]}
                    enter="transition-max-height duration-500 ease-in-out"
                    enterFrom="max-h-0"
                    enterTo="max-h-screen"
                    leave="transition-max-height duration-500 ease-in-out"
                    leaveFrom="max-h-screen"
                    leaveTo="max-h-0"
                    className="overflow-hidden"
                  >
                    <ul className="space-y-6 pt-3">
                      {items.map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.to}
                            className="text-headingColor font-semibold text-base"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Transition>
                  {/* {expandedSections[section] && (
                    <ul className="space-y-6 pt-3">
                      {items.map((item) => (
                        <li key={item.title}>
                          <Link
                            to={item.to}
                            className="text-headingColor font-semibold text-base"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
