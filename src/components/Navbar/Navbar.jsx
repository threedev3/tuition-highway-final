import React, { useState } from "react";
import mainLogo from "../../assets/img/mainLogo.png";
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import CustomButton from "../CustomButton/CustomButton";
import { Transition } from "@headlessui/react";

const Navbar = ({ demoRef }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div className="bg-white p-4 max-w-full shadow-md sticky top-0 z-20">
      <div className="flex justify-between items-center max-w-[1400px] mx-auto">
        <div className="w-[164px] cursor-pointer">
          <img src={mainLogo} alt="" className="object-cover" />
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
            <Bars3Icon className="block h-8 w-8 " aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* <Transition
        show={isOpen}
        enter="transition duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition duration-200 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div
            ref={ref}
            className="h-screen w-full block flex-grow lg:flex lg:items-center lg:w-auto z-50"
          >
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Link 1
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                Link 2
              </a>
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
              >
                Link 3
              </a>
            </div>
          </div>
        )}
      </Transition> */}
    </div>
  );
};

export default Navbar;
