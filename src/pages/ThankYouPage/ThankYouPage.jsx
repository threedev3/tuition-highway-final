import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ThankYou from "../../components/ThankYou/ThankYou";

const ThankYouPage = () => {
  return (
    <div>
      <SubHeroSection
        title="Thank You"
        description="We appreciate you reaching out to us & we will get in touch shortly"
        btnText="Back To Home"
      />
      <ThankYou />
    </div>
  );
};

export default ThankYouPage;
