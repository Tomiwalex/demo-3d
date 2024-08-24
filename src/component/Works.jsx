import React from "react";

const Works = () => {
  return (
    <div className="w-[100dvw] overflow-hidden h-[100dvh] snap-center flex flex-1 items-center max-w-[1400px] mx-auto px-5 md:px-[50px]">
      <div className="basis-full lg:basis-1/2">
        {["Web development", "Mobile development", "Design", "Branding"].map(
          (item, index) => (
            <span
              className={`text-transparent text-clip cursor-pointer block  my-2 text-[clamp(2rem,5vw,4.5rem)]  relative after:absolute after:top-0 after:left-0  text-nowrap w-0 hover:w-full bg-clip-text bg-[white] transition-all  duration-[700ms]  ease-in-out  `}
              key={index}
            >
              {item}
            </span>
          )
        )}
      </div>

      <div className="basis-full lg:basis-1/2"></div>
    </div>
  );
};

export default Works;
