import React from "react";
import professional from "../../assets/img/professional.png";
import onlineLearning from "../../assets/img/onlineLearning.png";
import goal from "../../assets/img/goal.png";
import virtualClass from "../../assets/img/virtualClass.png";

const Choose = () => {
  const choose = [
    {
      title: "Hand picked Expert Tutors",
      icon: professional,
    },
    {
      title: "Personalized Learning",
      icon: onlineLearning,
    },
    {
      title: "Free Trial Classes",
      icon: goal,
    },
    {
      title: "Impressive Track Record",
      icon: virtualClass,
    },
  ];

  return (
    <div className="relative py-20 px-6 max-w-full overflow-x-hidden bg-chooseBg">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-20">
        <div className="flex flex-col gap-6 items-center text-chooseText ">
          <h3 className="lg:text-5xl sm:text-4xl text-4xl font-bold tracking-wide text-center">
            Why Choose Tuition Highway?
          </h3>
          <p className="lg:text-2xl sm:text-lg text-base text-center max-w-4xl mx-auto">
            4 Compelling Reasons to Join Tuition Highway
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8 lg:items-start md:grid md:grid-cols-2 md:gap-8 grid grid-cols-1 gap-8">
          {choose.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 justify-center items-center"
            >
              <div>
                <img src={item.icon} alt="" className="h-16 " />
              </div>
              <div>
                <h3 className="text-chooseText text-xl">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Choose;
