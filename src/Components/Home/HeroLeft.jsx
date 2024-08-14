import React from "react";
import Button from "../Common/Button";
import Statistics from "./Statistics";

const HeroLeft = () => {
  return (
    <div className="Flex__HeroLeft">
      <h2>Welcome to FlexBlog</h2>
      <div className="line"></div>
      <p className="motto">"Your Ultimate Destination for inspiration" </p>
      <p>
        Dive into a world of captivating stories, insightful articles, and
        inspiring content. Discover the latest trends, tips, and ideas to ignite
        your creativity and fuel your passion for blogging. Join our community
        of bloggers and readers today and unleash your potential witl FlexBlog{" "}
      </p>
      <Button color="#ff6f61" text="Explore Now" />
      <Statistics />
    </div>
  );
};

export default HeroLeft;
