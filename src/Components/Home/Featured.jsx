import React from "react";
import { featuredBlogs } from "../../Constant/Constant";
import FeaturedCard from "./FeaturedCard";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="Flex_FeaturedBlog">
      <h3 className="pacifico-regular">Featured Blogs</h3>
      <div className="Flex_FeaturedCards">
        {featuredBlogs.map((item, index) => (
          <FeaturedCard
            key={item.id}
            blogImage={item.image}
            blogTitle={item.title}
            blogBody={item.body}
            isEven={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
