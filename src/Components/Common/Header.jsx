import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigations from "./Navigations";
import Button from "./Button";
import Hamburger from "./Hamburger";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <Link to="/">
        <h1 className="pacifico-regular">
          Flex<span>Blog</span>
        </h1>
      </Link>
      <Navigations isMenuOpen={isMenuOpen} />
      <Button color="#002147" text="Sign Up" />
      <Hamburger toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
