import { IoIosSearch } from "react-icons/io";
import "@fontsource/inter";
import "@fontsource/barlow-condensed";
import {
  FaShoppingBag,
  FaBriefcase,
  FaCar,
  FaHome,
  FaTools,
} from "react-icons/fa";

import { IoMdListBox } from "react-icons/io"; // Watchlist Icon
import { AiOutlineHeart } from "react-icons/ai"; // Favourites Icon
import { BiPencil } from "react-icons/bi"; // Start a Listing Icon
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col bg-[#ffffff] h-screen">
        {/* Top Navigation Links (Visible only on xl and larger screens) */}
        <div className="hidden 2xl:flex justify-center space-x-28 text-gray-600 font-medium py-2 bg-[#f6f5f4] h-[68px]">
          {/* Left Side Links */}
          <div className="flex space-x-[55px]">
            <span className="text-2xl">Trade Me</span>
            <span className="text-2xl">Trade Me Insurance</span>
            <span className="text-2xl">Holiday Houses</span>
            <span className="text-2xl">FindSomeone</span>
            <span className="text-2xl">MotorWeb</span>
            <span className="text-2xl">homes.co.nz</span>
          </div>

          {/* Right Side Links */}
          <div className="flex space-x-[55px]">
            <span className="font-bold text-2xl">Register</span>
            <span className="font-bold text-2xl">Log in</span>
          </div>
        </div>

        {/* Top bar (Logo and Icon Links) */}
        <div className="flex flex-row h-[40px] bg-[#ffffff] mt-2 relative md:w-full md:justify-between md:items-center p-3 md:h-[50px] lg:h-[60px] xl:h-[70px] 2xl:h-[85px]">
          {/* Logo Section */}
          <div className="w-[190px] h-[30px] ml-3 mt-0 md:w-[250px] md:h-[40px] lg:w-[300px] lg:h-[50px] xl:w-[350px] xl:h-[60px] 2xl:w-[400px] 2xl:h-[70px]">
            <img
              src="/image.jpg"
              alt="logo"
              className="w-full h-full object-cover "
            />
          </div>

          {/* Icon Links (Watchlist, Favourites, etc.) */}
          <div className="flex flex-row justify-end space-x-6 md:mr-10 sm-hidden">
            {/* Always visible */}
            <div className="flex flex-col justify-center items-center ml-10 lg:flex-row lg:space-x-6">
              <div className="text-[15px] md:text-[23px] lg:text-[35px]">
                <IoMdListBox />
              </div>
              <span className="text-sm font-inter text-[#9D9996] md:text-[20px] lg:text-[25px]">
                Watchlist
              </span>
            </div>

            <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-6">
              <div className="text-[15px] md:text-[25px] lg:text-[30px]">
                <AiOutlineHeart />
              </div>
              <span className="text-sm font-inter text-[#9D9996] md:text-[20px] lg:text-[25px]">
                Favourites
              </span>
            </div>

            {/* Only visible on large screens */}
            <div className="hidden 2xl:flex flex-row space-x-6 mr-8">
              <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-6">
                <div className="text-[15px] lg:text-[25px]">
                  <BiPencil />
                </div>
                <span className="text-sm font-inter text-[#9D9996] lg:text-[30px]">
                  Start a Listing
                </span>
              </div>

              <div className="flex flex-col justify-center items-center lg:flex-row lg:space-x-6">
                <div className="text-[15px] lg:text-[25px]">
                  <FaUserCircle />
                </div>
                <span className="text-sm font-inter text-[#9D9996] lg:text-[30px]">
                  My Trade Me
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Blue panel with welcome message */}
        <div className="flex flex-col mt-3 h-[230px] w-full bg-gradient-to-r from-blue-900 to-blue-400 md:h-[250px] lg:h-[260px] xl:h-[300px] 2xl:h-[340px] relative">
          <div className="flex flex-col md:flex-row">
            <h1 className='text-[45px] font-black font-["Barlow_Condensed"] mt-3 text-[#E7B2DA] ml-3 leading-none  md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[110px]'>
              KIA ORA! READY TO
            </h1>
            <h1 className='text-[45px] font-["Barlow_Condensed"] text-[#E7B2DA] ml-3 mt-3 leading-none font-bold md:text-[60px] lg:text-[70px] xl:text-[80px] 2xl:text-[110px]'>
              FIND YOUR WAY!
            </h1>
          </div>
          {/* Search bar section */}
          <div className="relative flex flex-row mt-3">
            <div className="relative flex-row">
              <input
                type="text"
                placeholder="Search all for Trade Me"
                className="bg-white w-[376px] h-[60px] rounded-lg ml-3 mt-4 pl-10 pr-[80px] md:w-[700px] lg:w-[800px] xl:w-[900px] 2xl:w-[1000px] text-[25px] md:text-[25px] "
              />
              <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400">
                <IoIosSearch size={30} />
              </div>
              <div className="absolute right-[4px] top-[46px] transform -translate-y-1/2">
                <div className="bg-[#279be9] w-[70px] h-[55px] rounded-lg flex items-center justify-center">
                  <IoIosSearch size={30} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Bar (Visible only on xl and larger screens) */}
        <div
          className="hidden xl:flex fixed top-[360px] 2xl:top-[475px] left-1/2 transform -translate-x-1/2 
            w-[1250px] 2xl:w-[1450px] 3xl:w-[1650px] h-[60px] 2xl:h-[80px] 
            flex rounded-lg outline outline-[15px] outline-gray-100"
        >
          <div className="flex-1 bg-red-600 flex justify-center items-center text-white font-bold text-3xl">
            Marketplace
          </div>
          <div className="flex-1 bg-orange-500 flex justify-center items-center text-white font-bold text-3xl">
            Jobs
          </div>
          <div className="flex-1 bg-gray-600 flex justify-center items-center text-white font-bold text-3xl">
            Motors
          </div>
          <div className="flex-1 bg-green-600 flex justify-center items-center text-white font-bold text-3xl">
            Property
          </div>
          <div className="flex-1 bg-gray-800 flex justify-center items-center text-white font-bold text-3xl">
            Services
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-2 gap-3 p-4 bg-[#f6f5f4]">
          {/* Marketplace */}
          <div className="flex items-center justify-start w-[170px] h-[50px] border rounded-md px-3 md:w-[300px] xl:hidden bg-[#ffffff] border-[#e0e0e0]">
            <FaShoppingBag className="text-red-500 mr-2" />
            <span className="text-red-500 font-medium">Marketplace</span>
          </div>

          {/* Jobs */}
          <div className="flex items-center justify-start w-[170px] h-[50px] border rounded-md px-3 md:w-[300px] xl:hidden bg-[#ffffff] border-[#e0e0e0]">
            <FaBriefcase className="text-orange-500 mr-2" />
            <span className="text-orange-500 font-medium">Jobs</span>
          </div>

          {/* Motors */}
          <div className="flex items-center justify-start w-[170px] h-[50px] border rounded-md px-3 md:w-[300px] xl:hidden bg-[#ffffff] border-[#e0e0e0]">
            <FaCar className="text-[#6d7e98]  mr-2" />
            <span className="text-[#6d7e98] font-medium">Motors</span>
          </div>

          {/* Property */}
          <div className="flex items-center justify-start w-[170px] h-[50px] border rounded-md px-3 md:w-[300px] xl:hidden bg-[#ffffff] border-[#e0e0e0]">
            <FaHome className="text-green-600 mr-2" />
            <span className="text-green-600 font-medium">Property</span>
          </div>

          {/* Services */}
          <div className="flex items-center justify-start w-[170px] h-[50px] border rounded-md px-3 md:w-[300px] xl:hidden bg-[#ffffff] border-[#e0e0e0]">
            <FaTools className="text-gray-600 mr-2" />
            <span className="text-gray-600 font-medium">Services</span>
          </div>

          {/* Browse All */}
          <div className="flex items-center justify-start w-[170px] h-[50px] border rounded-md px-3 md:w-[300px] xl:hidden bg-[#ffffff] border-[#e0e0e0]">
            <span className="text-blue-600 font-medium">Browse all</span>
            <IoIosArrowForward className="text-blue-600 ml-12" />
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
