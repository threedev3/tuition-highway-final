import React, { useState } from "react";
import mainLogo from "../../assets/img/mainLogo.png";
import {
  Bars3Icon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import CustomButton from "../CustomButton/CustomButton";

const Navbar = ({ demoRef }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const navigation = [
    "Home",
    "About",
    {
      name: "What we Teach",
      dropdown: [
        { name: "British Curriculum", dropdown: ["IGCSE/A-Level Courses"] },
        "American Curriculum",
        "International Baccalaureate",
        "French Curriculum",
        "Indian CBSE",
        "FBISE",
        "Online Homeschooling",
        "SAT",
        "IELTS",
        "Coding",
      ],
    },
    "Testimonials",
    "Join as a Tutor",
  ];

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
    <div className="bg-white p-4 max-w-full shadow-md sticky top-0 z-50">
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

          <button className="">
            <Bars3Icon className="block h-8 w-8 " aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
