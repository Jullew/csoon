import React from "react";

const Body = () => {
  return (
    <div className="flex flex-col  gap-2">
      <span className="z-10 text-xl dark:text-white lg:text-2xl">
        Do zobaczenia wkrótce! 👋
      </span>
      <h1 className="text-2xl lg:text-4xl font-semibold ">
        Tutaj powstaje coś niezwykłego!
      </h1>
      <h2 className="text-5xl lg:text-6xl font-semibold lg:leading-[65px] mt-10">
        Zapraszam
        <br />
        <span className="text-orange-500">20 maja 2024</span>.
      </h2>
    </div>
  );
};

export default Body;
