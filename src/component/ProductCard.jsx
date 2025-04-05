import React from 'react';
import "@fontsource/inter";

function ProductCard() {
  return (
    <div className="bg-[#f7f6f4] px-4 py-6 lg:px-[150px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card 1 */}
        <div className="bg-white rounded shadow-sm overflow-hidden h-[450px] w-full">
          <div className="relative">
            <div className="bg-gray-200 h-[300px] w-full"></div>
            <div className="absolute top-0 right-0">
              <div className="bg-yellow-500 text-sm font-bold p-1 rotate-0 transform -skew-y-6">
                02
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Auckland</span>
              <span>Listed: <span className="text-red-600">Fri, 15 Nov</span></span>
            </div>
            <h3 className="font-bold text-lg mb-4">Cabin</h3>
            <div className="text-sm text-gray-500 mb-1">Reserve not met</div>
            <div className="font-bold text-lg">$5,000</div>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="bg-white rounded shadow-sm overflow-hidden h-[450px] w-full">
          <div className="relative">
            <div className="bg-gray-200 h-[300px] w-full"></div>
            <div className="absolute top-0 right-0">
              <div className="bg-yellow-500 text-sm font-bold p-1 rotate-0 transform -skew-y-6">
                02
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Auckland</span>
              <span>Closes: <span className="text-red-600">1hr 19 mins</span></span>
            </div>
            <h3 className="font-bold text-lg mb-4">Mini lathe S1 Reserve</h3>
            <div className="text-sm text-gray-500 mb-1">Reserve met</div>
            <div className="font-bold text-lg">$453.00</div>
          </div>
        </div>
        
        {/* Card 3 */}
        <div className="bg-white rounded shadow-sm overflow-hidden h-[450px] w-full">
          <div className="relative">
            <div className="bg-gray-200 h-[300px] w-full"></div>
            <div className="absolute top-0 right-0">
              <div className="bg-yellow-500 text-sm font-bold p-1 rotate-0 transform -skew-y-6">
                02
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Gisbourne</span>
              <span>Listed: <span className="text-red-600">Tue, 28 May</span></span>
            </div>
            <h3 className="font-bold text-lg mb-4">Acton Estate</h3>
            <div className="font-bold text-lg">Enquiries over $5,000,000</div>
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="bg-white rounded shadow-sm overflow-hidden h-[450px] w-full">
          <div className="relative">
            <div className="bg-gray-200 h-[300px] w-full"></div>
            <div className="absolute top-0 right-0">
              <div className="bg-yellow-500 text-sm font-bold p-1 rotate-0 transform -skew-y-6">
                02
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Franklin</span>
              <span>Listed: <span className="text-red-600">Tue, 28 May</span></span>
            </div>
            <h3 className="font-bold text-lg mb-4">Fancy House</h3>
            <div className="font-bold text-lg">Price by negotiation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;