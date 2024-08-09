import React, { useRef, useState } from "react";
import Accordian from "../Accordian/Accordian";
import faqImg from "../../assets/img/faqimg.png";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqHead = useRef(null);

  const handleAccordionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Can I use the modem/router I already have?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Sed dignissim sit aenean orci. Mollis nunc massa molestie ut eget egestas. Ipsum platea leo euismod mauris diam nunc quis. Ac eros a arcu amet viverra elementum elit.",
    },
    {
      question: "Will speeds go up and down?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Sed dignissim sit aenean orci. Mollis nunc massa molestie ut eget egestas. Ipsum platea leo euismod mauris diam nunc quis. Ac eros a arcu amet viverra elementum elit.",
    },
    {
      question: "When will my service go live?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Sed dignissim sit aenean orci. Mollis nunc massa molestie ut eget egestas. Ipsum platea leo euismod mauris diam nunc quis. Ac eros a arcu amet viverra elementum elit.",
    },
    {
      question: "I already have broadband, how do I switch?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Sed dignissim sit aenean orci. Mollis nunc massa molestie ut eget egestas. Ipsum platea leo euismod mauris diam nunc quis. Ac eros a arcu amet viverra elementum elit.",
    },
  ];

  return (
    <div className="sm:py-20 py-12 px-6 max-w-full ">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center gap-12">
        <div className="flex flex-col gap-6 items-center text-headingColor">
          <h3 className="xl:text-[46px] xl:leading-tight md:text-4xl sm:text-3xl text-3xl font-bold tracking-wide text-center">
            Frequently Asked Question
          </h3>
        </div>

        <div className="lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-12 flex flex-col items-center gap-5">
          <div className="max-w-2xl flex-1">
            {faqs.map((faq, index) => (
              <Accordian
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>

          <div className="lg:block flex justify-center  w-auto">
            <img src={faqImg} alt="" className="w-[450px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
