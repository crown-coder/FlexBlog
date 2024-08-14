import React, { useState } from "react";
import "./FeaturedCard.css";

const FeaturedCard = ({ blogImage, blogTitle, blogBody, isEven }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  // Defining the maximum number of Characters before cut
  const maxCharacters = 200;
  return (
    <div className={isEven ? "Flex__FeaturedCard Even" : "Flex__FeaturedCard"}>
      <img src={blogImage} alt={blogTitle} />
      <div className="Flex__BlogContent">
        <h4>"{blogTitle}"</h4>
        <p>
          {isReadMore ? blogBody : `${blogBody.slice(0, maxCharacters)}...`}
        </p>
        <button className=".pacifico-regular" onClick={toggleReadMore}>
          {isReadMore ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedCard;
