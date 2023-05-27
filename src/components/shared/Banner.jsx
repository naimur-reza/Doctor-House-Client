import React from "react";
import bgImg from "../../assets/images/Home/bgImage.png";
import Button from "./Button";
import cap1 from "../../assets/images/Home/Vector/cap1.png";
import cap2 from "../../assets/images/Home/Vector/cap2.png";
import cap3 from "../../assets/images/Home/Vector/cap3.png";
import circ from "../../assets/images/Home/Vector/circle.png";
const Banner = () => {
  return (
    <>
      <div className=" bg-[#07332F] relative">
        <div className="lg:flex items-center my-container min-h-[calc(100vh-58px)]">
          <div className="space-y-5">
            <h1 className="text-5xl font-semibold text-white">
              Your Best Medical Help Center
            </h1>
            <p className="tracking-wide text-gray-200">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Suscipit, a.
            </p>
            <Button>All Services</Button>
          </div>
          <img className="z-10" src={bgImg} alt="" />
        </div>
        <img className="absolute bottom-12 right-1/2" src={cap1} alt="" />
        <img className="absolute bottom-1/2 right-1/2" src={cap2} alt="" />
        <img className="absolute -top-[58px]" src={cap3} alt="" />
        <img className="absolute top-[0]  right-36" src={circ} alt="" />
      </div>
    </>
  );
};

export default Banner;
