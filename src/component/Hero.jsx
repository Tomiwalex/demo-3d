import React from "react";
import Navbar from "./Navbar";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Hero = () => {
  return (
    <div className="h-[100dvh] snap-center scroll-smooth max-w-[1400px] mx-auto flex flex-col">
      <Navbar />

      <div className="flex flex-1 items-center flex-wrap ">
        {/* Text */}
        <div className="basis-full md:basis-1/2 2xl:basis-1/3 flex flex-col justify-center gap-2 items-center md:items-start px-5 mt-10 lg:mt-0">
          <h1 className="text-5xl text-center md:text-left leading-[1.2] md:text-6xl lg:text-7xl font-semibold lg:max-w-[500px]">
            Think. Make. Solve.
          </h1>

          <div className="flex items-center gap-2">
            <img src="./image/line.png" className="h-1" />
            <h3 className="text-lg lg:text-2xl font-medium text-[#da4ea2]">
              What We Do
            </h3>
          </div>

          {/* description */}
          <p className="text-sm lg:text-base font-normal text-center md:text-left w-[300px] lg:w-[400px] text-[#f1f1f1]">
            We enjoy creating delightful, human-centered digital experiences
          </p>
          <button className="p-3 rounded w-max px-5 text-white font-medium bg-[#da4ea2] mt-3">
            Learn More
          </button>
        </div>
        {/* image */}
        <div className="basis-full md:basis-1/2 2xl:basis-2/3 relative lg:h-full">
          <Canvas className="w-full aspect-square lg:w-unset lg:aspect-[unset]">
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={5} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach={"material"}
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Canvas>
          <img
            src="./image/moon.png"
            alt=""
            className="w-[90%] lg:max-w-[450px] aspect-square object-contain absolute top-0 bottom-0 m-auto left-0 right-0 bounce"
          />
        </div>{" "}
      </div>
    </div>
  );
};

export default Hero;
