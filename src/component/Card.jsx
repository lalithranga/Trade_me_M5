import React from 'react';
import "@fontsource/inter";

function Card() {
  return (
    <div className="bg-[#f7f6f4] w-full px-4 py-1 lg:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-screen-xl">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-sm p-6 my-2 flex flex-col justify-between h-[320px] w-full">
          <div>
            <h3 className="text-indigo-600 font-bold text-lg md:text-xl lg:text-2xl mb-2">
              Trending
            </h3>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 leading-snug">
              Shop last minute Xmas gifts!
            </h2>
          </div>
          <button className="mt-6 bg-indigo-600 text-white font-semibold px-5 py-3 rounded hover:bg-indigo-700 transition text-base md:text-lg w-full md:w-[200px]">
            Shop now
          </button>
        </div>
        
        {/* Card 2 */}
        <div className="bg-[#5850ec] rounded-xl shadow-sm p-6 text-white my-2 flex flex-col justify-between h-[320px] w-full">
          <div>
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Property</h3>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
              You choose, we celebrate
            </h2>
          </div>
          <button className="mt-6 bg-white text-[#5850ec] font-semibold px-5 py-3 rounded hover:bg-gray-200 transition text-base md:text-lg w-full md:w-[200px]">
            Nominate Now
          </button>
        </div>
        
        {/* Card 3 */}
        <div className="bg-[#5850ec] rounded-xl shadow-sm p-6 text-white my-2 flex flex-col justify-between h-[320px] w-full">
          <div>
            <h3 className="font-bold text-lg md:text-xl lg:text-2xl mb-2">Property</h3>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold leading-snug">
              Sold data is here
            </h2>
          </div>
          <button className="mt-6 bg-white text-[#5850ec] font-semibold px-5 py-3 rounded hover:bg-gray-200 transition text-base md:text-lg w-full md:w-[200px]">
            Search now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;