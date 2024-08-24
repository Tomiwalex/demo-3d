import React from "react";
import MapChart from "./Map";

const Contacts = () => {
  return (
    <div className="min-h-[100dvh] md:h-[100dvh]  snap-center flex flex-1 items-center flex-wrap">
      <div className="basis-full md:basis-1/2 flex flex-col items-center p-5 ">
        <form action="" className="w-full max-w-[400px] font-medium">
          <h3 className="text-xl md:text-3xl lg:text5xl text-left font-medium text-[#f1f1f1]">
            Contact Us
          </h3>
          <input
            type="text"
            className="p-3 my-3 w-full rounded bg-white block"
            placeholder="Name"
          />
          <input
            type="email"
            className="p-3 my-3 w-full rounded bg-white block"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="p-3 my-3 w-full rounded bg-white block"
            placeholder="write your message"
            id=""
          ></textarea>

          <button className="p-3 mt-5 rounded w-full px-5 text-white font-medium bg-[#da4ea2]">
            Submit
          </button>
        </form>
      </div>

      <div className="lg:flex-1 basis-full md:basis-1/2 h-full w-full">
        <MapChart />
      </div>
    </div>
  );
};

export default Contacts;
