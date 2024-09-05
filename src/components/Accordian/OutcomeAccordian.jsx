import React, { useState, useRef, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function OutcomeAccordian({ question, answer, isOpen, onClick }) {
  const contentRef = useRef(null);
  const accordianRef = useRef(null);
  const quesRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      contentRef.current.style.height = contentRef.current.scrollHeight + "px";
    } else {
      contentRef.current.style.height = "0px";
    }
  }, [isOpen]);

  return (
    <div className="sm:px-8 px-2 py-6 mb-2 max-w-full " ref={accordianRef}>
      <button
        className="flex items-start sm:gap-10 gap-5 w-full text-left focus:outline-none"
        onClick={onClick}
      >
        <div className="flex-shrink-0">
          <ArrowRightIcon color="#F46322" className="w-8" />
          {/* <img
            src={arrowRight}
            alt=""
            className="w-12 object-contain flex-shrink-0"
          /> */}
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center gap-10 w-full">
            <h4
              className="sm:text-2xl min-[396px]:text-xl text-lg text-headingColor "
              ref={quesRef}
            >
              {question}
            </h4>
            <span className="">
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:size-8 size-6"
                  strokeWidth={2}
                  stroke="#E55D20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="sm:size-8 size-6"
                  strokeWidth={2}
                  stroke="#E55D20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          </div>
          <div
            ref={contentRef}
            className="overflow-hidden transition-all duration-500 ease-in-out pr-10"
            style={{ height: "0px" }}
          >
            <p className="mt-5 text-headingColor lg:text-base text-sm">
              {answer}
            </p>
          </div>
        </div>
      </button>
    </div>
  );
}

export default OutcomeAccordian;
