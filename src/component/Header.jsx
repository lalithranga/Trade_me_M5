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
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="flex flex-col h-[500px]">
        {/* Blue panel with welcome message */}
        <div className="flex flex-col mt-3 h-[230px] w-full bg-gradient-to-r from-blue-900 to-blue-400 md:h-[250px] lg:h-[260px] xl:h-[300px] 2xl:h-[340px] relative">
          {/* Wrapped content inside a centered container */}
          <div className="mx-auto max-w-screen-xl w-full px-4">
            {/* Heading */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <h1 className="text-[36px] font-black font-['Barlow_Condensed'] mt-3 text-[#E7B2DA] leading-none md:text-[40px] lg:text-[65px] xl:text-[75px] 2xl:text-[85px]">
                KIA ORA! READY TO
              </h1>
              <h1 className="text-[36px] font-['Barlow_Condensed'] text-[#E7B2DA] xl:ml-2 mt-3 leading-none font-bold md:text-[40px] lg:text-[65px] xl:text-[75px] 2xl:text-[85px]">
                FIND YOUR WAY!
              </h1>
            </div>

            {/* Search bar */}
            <div className="relative flex flex-row mt-8 w-full md:w-[600px]">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search all of text me"
                  className="bg-white h-[50px] rounded-lg pl-10 pr-[80px] text-[20px] md:text-[22px] w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mr-6"
                />
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <IoIosSearch size={26} 
                  className=""
                  />
                </div>

                {/* Search button */}
                <div className="absolute right-[4px] top-1/2 transform -translate-y-1/2">
                  <Link
                    to="/search"
                    className="bg-[#279be9] w-[100px] h-[45px] rounded-lg flex items-center justify-center px-3 text-[17px]"
                  >
                    {/* Icon for small screens */}
                    <IoIosSearch
                      size={26}
                      className="text-white block md:hidden ml-3"
                    />

                    {/* Text for md and above */}
                    <span className="text-white font-semibold hidden md:block text-[18px] ">
                      Search
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* end container */}
        </div>

        {/* Navigation Bar (Visible only on xl and larger screens) */}
        <div className="hidden xl:flex top-[260px] z-50 -mt-12 mx-auto max-w-screen-xl">
          <div className="flex w-full lg:w-[2000px] md:w-[1400px] h-[60px] 2xl:h-[80px] rounded-lg outline outline-[10px] outline-gray-100">
            <div className="flex-1 bg-red-600 flex justify-center items-center text-white font-bold text-2xl xl:text-3xl">
              Marketplace
            </div>
            <div className="flex-1 bg-orange-500 flex justify-center items-center text-white font-bold text-2xl xl:text-3xl">
              Jobs
            </div>
            <div className="flex-1 bg-gray-600 flex justify-center items-center text-white font-bold text-2xl xl:text-3xl">
              Motors
            </div>
            <div className="flex-1 bg-green-600 flex justify-center items-center text-white font-bold text-2xl xl:text-3xl">
              Property
            </div>
            <div className="flex-1 bg-gray-800 flex justify-center items-center text-white font-bold text-2xl xl:text-3xl">
              Services
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-2 gap-3 p-4 bg-[#f6f5f4] lg:ml-[150px]">
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
            <FaCar className="text-[#6d7e98] mr-2" />
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

export default Header;
