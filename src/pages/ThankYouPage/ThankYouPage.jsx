import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import ThankYou from "../../components/ThankYou/ThankYou";

const ThankYouPage = () => {
  return (
    <div>
      <SubHeroSection
        title="We've Received Your Message!"
        description="Our team will be reviewing your inquiry and will respond promptly. In the meantime, feel free to explore our website."
        btnText="Back To Home"
      />
      <ThankYou />
    </div>
  );
};

export default ThankYouPage;
