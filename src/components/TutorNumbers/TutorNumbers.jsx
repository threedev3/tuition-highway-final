import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useInView, animate } from "framer-motion";

const TutorNumbers = () => {
  const numbers = [
    {
      title: "Parent",
      spanTitle: "Satisfaction",
      count: 95,
      suffix: "%",
    },
    {
      title: "A+ & A",
      spanTitle: "Grades",
      count: 75,
      suffix: "%",
    },
    {
      title: "Faculty",
      spanTitle: "Pool",
      count: 500,
      suffix: "+",
    },
    {
      title: "Countries",
      spanTitle: "Covered",
      count: 15,
      suffix: "+",
    },
  ];

  return (
    <div className="py-12 px-6 max-w-full relative bg-gradient-to-r from-startgrad to-endGrad">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-12 justify-center items-center">
        {/* <h3 className="text-white xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl text-center">
          Our Tutors by the Numbers
        </h3> */}

        <div className="lg:grid lg:grid-cols-4 lg:gap-32 md:grid md:grid-cols-2 md:gap-32 grid grid-cols-1 gap-6">
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
              <div
                ref={ref}
                key={index}
                className="p-3 flex flex-col justify-center items-center gap-4"
              >
                <p className="text-white sm:text-2xl text-xl font-semibold text-center sm:min-h-20 min-h-16">
                  {item.title} <span className="block">{item.spanTitle}</span>
                </p>
                <motion.h3 className="text-white sm:text-3xl text-2xl text-center">
                  {displayValue} {item.suffix}
                </motion.h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TutorNumbers;
