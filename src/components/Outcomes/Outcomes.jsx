import React, { useState } from "react";
import Accordian from "../Accordian/Accordian";
import OutcomeAccordian from "../Accordian/OutcomeAccordian";

const Outcomes = ({ demoRef }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const outcomes = [
    {
      title: "Learning Outcomes",
      answer:
        "ipsum dolor sit amet consectetur. Sed dignissim sit aenean orci. Mollis nunc massa molestie ut eget egestas. Ipsum platea leo euismod mauris diam nunc quis. Ac eros a arcu amet viverra elementum elit.",
    },
    {
      title: "Enrollment  Process",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Sed dignissim sit aenean orci. Mollis nunc massa molestie ut eget egestas. Ipsum platea leo euismod mauris diam nunc quis. Ac eros a arcu amet viverra elementum elit.",
    },
  ];
  return (
    <div className="relative md:py-12 py-8 px-6 max-w-full bg-subjectsBg ">
      <div className="max-w-[1400px] mx-auto ">
        <div className="max-w-full ">
          {outcomes.map((item, index) => (
            <OutcomeAccordian
              key={index}
              question={item.title}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleAccordionClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outcomes;
