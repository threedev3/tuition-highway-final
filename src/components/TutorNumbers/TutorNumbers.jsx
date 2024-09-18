// import React, { useEffect, useState } from "react";
// import { motion, useMotionValue, useInView, animate } from "framer-motion";
// import { numbers } from "../../data/data";

// const TutorNumbers = () => {
//   return (
//     <div className="sm:py-12 py-6 px-6 max-w-full relative bg-gradient-to-r from-startgrad to-endGrad">
//       <div className="max-w-[1400px] mx-auto flex flex-col gap-12 justify-center items-center">
//         <div className="sm:grid sm:grid-cols-4 lg:gap-32 md:gap-16 grid grid-cols-2 gap-4">
//           {numbers.map((item, index) => {
//             const motionValue = useMotionValue(0);
//             const [displayValue, setDisplayValue] = useState(0);

//             // Hook to track if the element is in view
//             const ref = React.useRef(null);
//             const isInView = useInView(ref, { once: true });

//             useEffect(() => {
//               if (isInView) {
//                 const animation = animate(motionValue, item.count, {
//                   duration: 2,
//                   onUpdate: (latest) => {
//                     setDisplayValue(Math.round(latest));
//                   },
//                 });

//                 return () => animation.stop();
//               }
//             }, [isInView, motionValue, item.count]);

//             return (
//               <div
//                 ref={ref}
//                 key={index}
//                 className="p-3 flex flex-col justify-center items-center gap-2 "
//               >
//                 <motion.h3 className="text-white md:text-3xl sm:text-2xl text-xl text-center">
//                   {displayValue}
//                   {item.suffix}
//                 </motion.h3>
//                 <p className="text-white md:text-xl sm:text-xl text-lg font-semibold text-center sm:min-h-20 min-h-16">
//                   {item.title} <span className="block">{item.spanTitle}</span>
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TutorNumbers;

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useInView, animate } from "framer-motion";
import { numbers } from "../../data/data";

const TutorNumbers = () => {
  return (
    <div className="relative sm:py-12 py-8 sm:px-12 px-6 max-w-full bg-gradient-to-r from-startgrad to-endGrad">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 justify-center items-stretch">
        <div className="sm:grid sm:grid-cols-4 lg:gap-32 md:gap-16 grid grid-cols-2 gap-4 place-content-between">
          {numbers.map((item, index) => {
            const motionValue = useMotionValue(0);
            const [displayValue, setDisplayValue] = useState(0);

            // Hook to track if the element is in view
            const ref = React.useRef(null);
            const isInView = useInView(ref, { once: true });

            useEffect(() => {
              if (isInView) {
                const animation = animate(motionValue, item.count, {
                  duration: 2,
                  onUpdate: (latest) => {
                    setDisplayValue(Math.round(latest));
                  },
                });

                return () => animation.stop();
              }
            }, [isInView, motionValue, item.count]);

            return (
              <motion.div
                ref={ref}
                key={index}
                className="p-3 flex flex-col justify-center items-center gap-2 "
              >
                {/* Decorative Border */}
                {/* <div className="absolute inset-0 rounded-xl opacity-60"></div> */}

                {/* Main Content */}
                <motion.h3 className="text-white xl:text-6xl lg:text-5xl md:text-5xl sm:text-5xl text-4xl font-extrabold text-center z-10">
                  {displayValue}
                  <span className="text-2xl">{item.suffix}</span>
                </motion.h3>
                <p className="text-white md:text-xl text-lg font-semibold text-center z-10">
                  {item.title} <span className="block">{item.spanTitle}</span>
                </p>

                {/* Decorative Pattern */}
                {/* <div className="absolute bottom-1 right-1 w-12 h-12 bg-white/10 rounded-full"></div> */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TutorNumbers;
