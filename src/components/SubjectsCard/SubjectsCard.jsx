import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SubjectsCard = ({ item, demoRef }) => {
  const [isHovered, setIsHovered] = useState(false);

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
    <div
      className="cursor-pointer min-h-72"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-6 w-[300px] md:p-0 p-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 min-h-16">
            <div
              className={`${item.bg} w-12 h-12 rounded-full flex-shrink-0 flex justify-center items-center`}
            >
              <img src={item.img} alt="" className="w-5 object-contain" />
            </div>
            <div>
              <h3 className="text-headingColor md:text-[22px] text-xl">
                {item.title}
              </h3>
            </div>
          </div>
        </div>

        <div className="text-headingColor text-base min-h-28 font-medium">
          {item.description}
        </div>

        {/* Conditional rendering with animation */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative inline-block py-1 px-2 border-2 border-orangeHeading text-sm overflow-hidden custom-border">
                Read More
              </div>
              <div
                className="py-1 px-2 border-2 border-orangeHeading text-sm"
                onClick={() => handleNavClick("Demo")}
              >
                Book A Free Demo
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SubjectsCard;
