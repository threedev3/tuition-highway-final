import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComp = ({ firstString, secondString }) => {
  return (
    <h3 className="xl:text-[42px] xl:leading-tight lg:text-4xl lg:leading-tight md:text-[40px] md:leading-10 min-[540px]:text-3xl min-[346px]:text-2xl text-[22px] font-bold tracking-wide text-center gap-3">
      {firstString}{" "}
      <span className="sm:inline block">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `<span style="color: #34ACD4; font-weight: 900; font-family: Montserrat-bold; display: inline" >${secondString}</span>`
              )
              .pauseFor(1000)
              .start();
          }}
          options={{
            autoStart: true,
            loop: true,
            deleteSpeed: 20,
            delay: 50,
          }}
        />
      </span>
    </h3>
  );
};

export default TypewriterComp;
