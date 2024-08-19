import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComp = ({ firstString, secondString }) => {
  return (
    <h3 className="lg:text-[46px] sm:text-4xl text-3xl font-bold tracking-wide text-center gap-3">
      {firstString}{" "}
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
    </h3>
  );
};

export default TypewriterComp;
