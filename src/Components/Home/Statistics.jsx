import React from "react";
import Card from "./Card";
import "./Statistics.css";

const Statistics = () => {
  return (
    <div className="Flex__Statistics">
      <h3>Statistics</h3>
      <div className="Flex__Cards">
        <Card title="1000+" infor="Bloggers and Readers" />
        <Card title="25,000+" infor="Blogs and Articles" />
        <Card title="100+" infor="Featured Blog" />
      </div>
    </div>
  );
};

export default Statistics;
