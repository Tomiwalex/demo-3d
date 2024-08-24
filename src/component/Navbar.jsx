import React from "react";
import logo from "../../assets/image/logo.png";
import searchIcon from "../../assets/image/search.png";

const Navbar = () => {
  return (
    <div className="flex px-5 items-center gap-5 gap-x-10 py-3 justify-between md:justify-normal">
      <img src={logo} alt="coderiger" className="h-[50px]" />

      <div className="hidden md:flex gap-5 flex-1">
        {["Home", "Studio", "Works", "Contacts"].map((item, index) => (
          <span className="text-[#f6f6f6] cursor-pointer" key={index}>
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <img src={searchIcon} alt="search" className="w-5" />
        <button className="p-3 rounded text-white px-5 font-medium bg-[#da4ea2]">
          Hire Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
