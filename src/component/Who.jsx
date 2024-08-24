import React from "react";
import Test from "./Test";
import box from "../../assets/image/line.png";

const Who = () => {
  return (
    <div className="min-h-[100dvh] lg:h-[100dvh] snap-center flex flex-1 items-center max-w-[1400px]  flex-wrap ">
      {/* image */}
      <div className="basis-full md:basis-1/2 relative h-[300px]  lg:h-full md:w-full flex items-center">
        <Test />
      </div>

      {/* Text */}
      <div className="basis-full md:basis-1/2 flex flex-col gap-4 text-center md:text-left px-5 md:px-[50px]">
        <h1 className="text-5xl lg:text-7xl font-semibold">
          Think outside the square space
        </h1>

        <div className="items-center gap-2 inline-flex mx-auto md:mx-0">
          <img src={box} className="h-1" />
          <h3 className="text-lg lg:text-2xl font-medium text-[#da4ea2]">
            What We Are
          </h3>
        </div>

        {/* description */}
        <p className="text-sm lg:text-base font-normal w-[300px] md:w-full mx-auto lg:mx-0 leading-[1.6]">
          A creative group of designers with a passion for the arts.
        </p>
        <button className="p-3 rounded w-max px-5 text-white font-medium bg-[#da4ea2] mx-auto md:mx-0">
          See our works
        </button>
      </div>
    </div>
  );
};

export default Who;
