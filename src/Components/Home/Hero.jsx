import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="Flex__Hero">
      <HeroLeft />
      <HeroRight />
    </div>
  );
};

export default Hero;
