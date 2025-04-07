import React from 'react';
import "@fontsource/inter";

function TrendingCategories() {
  return (
    <div className="bg-[#f7f6f4] w-full px-4 py-6 lg:px-6">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-2">
          <p className="text-gray-600 text-sm">Trending</p>
          <h2 className="font-bold text-xl text-gray-800">Categories</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Card 1 - Dresses */}
          <div className="bg-[#c1483a] rounded-md p-4 h-32 text-white flex flex-col justify-between">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl">55,519+ Dresses</h3>
            </div>
            <div className="text-xs">
              Marketplace / Clothing & Fashion / Women / Dresses
            </div>
          </div>
          
          {/* Card 2 - Dresses (Motors) */}
          <div className="bg-[#576581] rounded-md p-4 h-32 text-white flex flex-col justify-between">
            <div className="flex justify-between">
              <h3 className="font-bold text-xl">55,519+ Dresses</h3>
            </div>
            <div className="text-xs">
              Motors / Cars
            </div>
          </div>
          
          {/* Card 3 - Shoes */}
          <div className="bg-[#c1483a] rounded-md p-4 h-32 text-white flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-xl">18,967+ Shoes</h3>
              <span className="bg-white text-[#c1483a] px-2 py-1 rounded text-sm font-bold">15</span>
            </div>
            <div className="text-xs">
              Marketplace / Clothing & Fashion / Shoes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCategories;