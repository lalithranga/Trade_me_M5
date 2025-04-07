import React from "react";
import { IoMdListBox } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

function TopHeader() {
  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-[#f6f5f4] h-[68px] w-full">
        <div className="flex justify-between items-center h-full mx-auto max-w-screen-xl text-gray-600 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          
          {/* Left Side Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              "Trade Me",
              "Trade Me Insurance",
              "Holiday Houses",
              "FindSomeone",
              "MotorWeb",
              "homes.co.nz",
            ].map((item, index) => (
              <span key={index} className="text-[18px]">
                {item}
              </span>
            ))}
          </div>

          {/* Right Side Auth Links */}
          <div className="flex space-x-6 mt-2 lg:mt-0">
            <span className="font-bold text-[18px]">Register</span>
            <span className="font-bold text-[18px]">Log in</span>
          </div>
        </div>
      </div>

      {/* Logo + Icon Links */}
      <div className="flex flex-row bg-white mt-2 relative h-[40px] md:h-[50px] lg:h-[50px] xl:h-[58pxpx] 2xl:h-[60px] w-full mx-auto max-w-screen-xl justify-between items-center px-4 md:px-8">
        
        {/* Logo */}
        <div className="w-[190px] h-[30px] md:w-[250px] md:h-[40px] lg:w-[300px] lg:h-[50px] xl:w-[200px] xl:h-[60px] 2xl:h-[60px]">
          <img
            src="/image.jpg"
            alt="logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Icon Links */}
        <div className="flex items-center space-x-6">
          
          {/* Watchlist */}
          <div className="flex flex-col items-center lg:flex-row lg:space-x-2">
            <IoMdListBox className="text-[22px]" />
            <span className="text-[22px] font-inter text-[#9D9996]">Watchlist</span>
          </div>

          {/* Favourites */}
          <div className="flex flex-col items-center lg:flex-row lg:space-x-2">
            <AiOutlineHeart className="text-[22px]" />
            <span className="text-[22px] font-inter text-[#9D9996]">Favourites</span>
          </div>

          {/* 2XL only icons */}
          <div className="hidden 2xl:flex items-center space-x-6 mr-4">
            {/* Start a Listing */}
            <div className="flex flex-col items-center lg:flex-row lg:space-x-2">
              <BiPencil className="text-[22px]" />
              <span className="text-[22px] font-inter text-[#9D9996]">Start a Listing</span>
            </div>

            {/* My Trade Me */}
            <div className="flex flex-col items-center lg:flex-row lg:space-x-2">
              <FaUserCircle className="text-[22px]" />
              <span className="text-[22px] font-inter text-[#9D9996]">My Trade Me</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default TopHeader;
