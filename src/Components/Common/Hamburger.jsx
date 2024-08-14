import React from "react";

const Hamburger = ({ toggleMenu }) => {
  return (
    <div className="Flex__Hamburger" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default Hamburger;
