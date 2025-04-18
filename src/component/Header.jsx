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

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <header className="flex flex-col h-[500px]">
        {/* Welcome Banner */}
        <section className="flex flex-col mt-3 h-[230px] w-full bg-gradient-to-r from-blue-900 to-blue-400 md:h-[250px] lg:h-[260px] xl:h-[300px] 2xl:h-[340px] relative">
          <div className="mx-auto max-w-screen-xl w-full px-4 md:px-0">
            {/* Heading */}
            <div className="flex flex-col md:flex-row items-start md:items-center">
              <h1 className="text-[36px] font-black font-['Barlow_Condensed'] mt-3 text-[#E7B2DA] leading-none md:text-[40px] lg:text-[65px] xl:text-[75px] 2xl:text-[85px]">
                KIA ORA! READY TO
              </h1>
              <h1 className="text-[36px] font-['Barlow_Condensed'] text-[#E7B2DA] mt-3 leading-none font-bold md:ml-[15px] xl:ml-2 md:text-[40px] lg:text-[65px] xl:text-[75px] 2xl:text-[85px]">
                FIND YOUR WAY! 
              </h1>
            </div>

            {/* Search Bar */}
            <div className="relative flex flex-row mt-8 w-full md:w-[600px]">
              <div className="relative w-full">
                <input
                  onChange={(e) => setSearchText(e.target.value)}
                  type="text"
                  value={searchText}
                  placeholder="Search all of Trade Me"
                  className="bg-white h-[50px] rounded-lg pl-10 pr-[80px] text-[20px] md:text-[22px] w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <IoIosSearch size={26} />
                </div>

                <div className="absolute right-[4px] top-1/2 transform -translate-y-1/2">
                  <Link
                    to="/search"
                    className="bg-[#279be9] w-[100px] h-[45px] rounded-lg flex items-center justify-center text-[17px]"
                    onClick={() =>
                      localStorage.setItem("searchText", searchText)
                    }
                  >
                    <IoIosSearch
                      size={26}
                      className="text-white block md:hidden"
                    />
                    <span className="text-white font-semibold hidden md:block text-[18px]">
                      Search
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Navigation Bar */}
        <nav className="hidden xl:flex top-[260px] z-50 -mt-12 mx-auto max-w-screen-xl">
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
        </nav>

        {/* Categories Grid for Smaller Screens */}
        <section className="grid grid-cols-2 gap-3 p-4 bg-[#f6f5f4] lg:ml-[150px] xl:hidden">
          <CategoryItem icon={<FaShoppingBag className="text-red-500 mr-2" />} label="Marketplace" textColor="text-red-500" />
          <CategoryItem icon={<FaBriefcase className="text-orange-500 mr-2" />} label="Jobs" textColor="text-orange-500" />
          <CategoryItem icon={<FaCar className="text-[#6d7e98] mr-2" />} label="Motors" textColor="text-[#6d7e98]" />
          <CategoryItem icon={<FaHome className="text-green-600 mr-2" />} label="Property" textColor="text-green-600" />
          <CategoryItem icon={<FaTools className="text-gray-600 mr-2" />} label="Services" textColor="text-gray-600" />
          <div className="flex items-center justify-start w-[170px] h-[50px] border rounded-md px-3 md:w-[300px] bg-[#ffffff] border-[#e0e0e0]">
            <span className="text-blue-600 font-medium">Browse all</span>
            <IoIosArrowForward className="text-blue-600 ml-12" />
          </div>
        </section>
      </header>
    </>
  );
}

// Reusable category component
function CategoryItem({ icon, label, textColor }) {
  return (
    <div className="flex items-center justify-start w-[170px] h-[50px] border rounded-md px-3 md:w-[300px] bg-[#ffffff] border-[#e0e0e0]">
      {icon}
      <span className={`${textColor} font-medium`}>{label}</span>
    </div>
  );
}

export default Header;
