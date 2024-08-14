import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ color, text }) => {
  return (
    <div>
      <button style={{ backgroundColor: color }}>
        <Link to="/signup">{text}</Link>
      </button>
    </div>
  );
};

export default Button;
