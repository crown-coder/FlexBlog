import React from "react";
import Business from "../../Assets/Business.png";
import Education from "../../Assets/Education.png";
import Technology from "../../Assets/Technology.png";
import Wild from "../../Assets/Wild.png";

import "./HeroRight.css";

const HeroRight = () => {
  return (
    <div className="Flex__HeroRight">
      <div className="image__container">
        <img src={Technology} alt="Technology" />
        <img src={Wild} alt="Wild life" />
      </div>
      <div className="image__container">
        <img src={Education} alt="Education" />
        <img src={Business} alt="Business" />
      </div>
    </div>
  );
};

export default HeroRight;
