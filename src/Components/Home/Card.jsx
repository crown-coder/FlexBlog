import React from "react";
import "./Card.css";
const Card = ({ title, infor }) => {
  return (
    <div className="Flex__Card">
      <h4>{title}</h4>
      <p>{infor}</p>
    </div>
  );
};

export default Card;
