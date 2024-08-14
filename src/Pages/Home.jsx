import React from "react";
import Header from "../Components/Common/Header";
import Footer from "../Components/Common/Footer";
import Hero from "../Components/Home/Hero";
import Featured from "../Components/Home/Featured";

const Home = () => {
  return (
    <div className="Flex__Home">
      <Header />
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
