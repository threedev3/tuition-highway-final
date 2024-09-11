import React from "react";
import SubHeroSection from "../../components/SubHeroSection/SubHeroSection";
import AllFaqs from "../../components/AllFaqs/AllFaqs";

const FaqPage = () => {
  return (
    <div>
      <SubHeroSection
        title="Frequently Asked Questions"
        description="Find quick answers to your queries about services"
        btnText="Back To Home"
      />
      <AllFaqs />
    </div>
  );
};

export default FaqPage;
