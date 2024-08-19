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
      className="cursor-pointer mx-1 lg:min-h-[260px] sm:min-h-[240px] min-[450px]:min-h-[200px] min-h-[220px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col justify-between gap-4 lg:max-w-[300px] max-w-[400px] md:p-0 sm:p-3 p-0">
        <div className="flex flex-col gap-3">
          <div className="flex items-center lg:gap-4 gap-2 min-h-16">
            <div
              className={`${item.bg} w-12 h-12 rounded-full flex-shrink-0 flex justify-center items-center`}
            >
              <img src={item.img} alt="" className="w-5 object-contain" />
            </div>
            <div>
              <h3 className="text-headingColor md:text-[21px] text-xl">
                {item.title}
              </h3>
            </div>
          </div>
        </div>
        <div className="text-headingColor md:text-base text-sm md:min-h-28 min-h-[70px] font-medium">
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
              <div className="relative inline-block min-[680px]:py-1 py-1 min-[680px]:px-2 px-2 border-2 border-orangeHeading min-[877px]:text-sm min-[840px]:text-xs sm:text-xs min-[420px]:text-sm text-xs  custom-border">
                Read More
              </div>
              <div
                className="relative inline-block min-[680px]:py-1 py-1 min-[680px]:px-2 px-2 border-2 border-orangeHeading min-[877px]:text-sm min-[840px]:text-xs sm:text-xs min-[420px]:text-sm text-xs  custom-border"
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