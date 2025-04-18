import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

function TopHeader() {
  return (
    <>
      {/* Top Info Bar */}
      <section className="hidden lg:block bg-[#f6f5f4] h-[68px] w-full">
        <div className="flex justify-between items-center h-full mx-auto max-w-screen-xl text-gray-600 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
          {/* Left Side Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              "Trade Me",
              "Trade Me Insurance",
              "Holiday Houses",
              "FindSomeone",
              "MotorWeb",
              "homes.co.nz",
            ].map((item, index) => (
              <a key={index} href="#" className="text-[18px]">
                {item}
              </a>
            ))}
          </nav>

          {/* Right Side Auth Links */}
          <div className="flex space-x-6 mt-2 lg:mt-0">
            <a href="#" className="font-bold text-[18px]">Register</a>
            <a href="#" className="font-bold text-[18px]">Log in</a>
          </div>
        </div>
      </section>

      {/* Logo + Icon Links */}
      <header className="flex flex-row bg-white mt-2 relative h-[40px] md:h-[50px] lg:h-[50px] xl:h-[58px] 2xl:h-[60px] w-full mx-auto max-w-screen-xl justify-between items-center px-4 md:px-0">
        
        {/* Logo */}
        <div className="w-[200px] h-[30px]">
          <img
            src="/trademe-logo.png"
            alt="Trade Me logo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Icon Links */}
        <nav className="flex items-center space-x-6">

          {/* Watchlist */}
          <div className="flex flex-col items-center lg:flex-row lg:space-x-2">
            <img
              src="/Group.png"
              alt="Watchlist"
              className="w-[14px] md:w-[14px] lg:w-[16px]"
            />
            <span className="text-[14px] md:text-[14px] lg:text-[16px] font-inter text-[#9D9996]">
              Watchlist
            </span>
          </div>

          {/* Favourites */}
          <div className="flex flex-col items-center lg:flex-row lg:space-x-2">
            <AiOutlineHeart className="text-[14px] md:text-[14px] lg:text-[16px]" />
            <span className="text-[14px] md:text-[14px] lg:text-[16px] font-inter text-[#9D9996]">
              Favourites
            </span>
          </div>

          {/* 2XL only icons */}
          <div className="hidden 2xl:flex items-center space-x-6 mr-4">
            {/* Start a Listing */}
            <div className="flex flex-col items-center lg:flex-row lg:space-x-2">
              <BiPencil className="text-[14px] md:text-[14px] lg:text-[16px]" />
              <span className="text-[14px] md:text-[14px] lg:text-[16px] font-inter text-[#9D9996]">
                Start a Listing
              </span>
            </div>

            {/* My Trade Me */}
            <div className="flex flex-col items-center lg:flex-row lg:space-x-2">
              <FaUserCircle className="text-[14px] md:text-[14px] lg:text-[16px]" />
              <span className="text-[14px] md:text-[14px] lg:text-[16px] font-inter text-[#9D9996]">
                My Trade Me
              </span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default TopHeader;
