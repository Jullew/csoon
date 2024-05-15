import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const LeftSide = () => {
  return (
    <div className="w-[100vw] lg:w-1/2 py-10 p-6 min-h-[100vh] h-[100%] flex justify-between flex-col lg:px-20">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default LeftSide;
