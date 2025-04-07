import React from 'react';
import "@fontsource/inter";

function ProductCard() {
  return (
    <div className="bg-[#f7f6f4] w-full px-4 py-6 lg:px-6">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cool Auction</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col w-full">
            <div className="relative bg-gray-200 aspect-square w-full mb-4">
              <div className="absolute top-0 right-0">
                <div className="bg-yellow-500 text-sm font-bold p-1 transform -skew-y-6">
                  02
                </div>
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Auckland</span>
              <span>Listed: <span className="text-red-600">Fri, 15 Nov</span></span>
            </div>
            <h3 className="font-bold text-lg mb-2">Cabin</h3>
            <div className="text-sm text-gray-500 mb-1">Reserve not met</div>
            <div className="font-bold text-lg">$5,000</div>
          </div>
          
          {/* Card 2 */}
          <div className="flex flex-col w-full">
            <div className="relative bg-gray-200 aspect-square w-full mb-4">
              <div className="absolute top-0 right-0">
                <div className="bg-yellow-500 text-sm font-bold p-1 transform -skew-y-6">
                  02
                </div>
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Auckland</span>
              <span>Closes: <span className="text-red-600">1hr 19 mins</span></span>
            </div>
            <h3 className="font-bold text-lg mb-2">Mini lathe S1 Reserve</h3>
            <div className="text-sm text-gray-500 mb-1">Reserve met</div>
            <div className="font-bold text-lg">$453.00</div>
          </div>
          
          {/* Card 3 */}
          <div className="flex flex-col w-full">
            <div className="relative bg-gray-200 aspect-square w-full mb-4">
              <div className="absolute top-0 right-0">
                <div className="bg-yellow-500 text-sm font-bold p-1 transform -skew-y-6">
                  02
                </div>
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Gisbourne</span>
              <span>Listed: <span className="text-red-600">Tue, 28 May</span></span>
            </div>
            <h3 className="font-bold text-lg mb-2">Acton Estate</h3>
            <div className="font-bold text-lg">Enquiries over $5,000,000</div>
          </div>
          
          {/* Card 4 */}
          <div className="flex flex-col w-full">
            <div className="relative bg-gray-200 aspect-square w-full mb-4">
              <div className="absolute top-0 right-0">
                <div className="bg-yellow-500 text-sm font-bold p-1 transform -skew-y-6">
                  02
                </div>
              </div>
            </div>
            
            <div className="flex justify-between text-sm text-gray-500 mb-1">
              <span>Franklin</span>
              <span>Listed: <span className="text-red-600">Tue, 28 May</span></span>
            </div>
            <h3 className="font-bold text-lg mb-2">Fancy House</h3>
            <div className="font-bold text-lg">Price by negotiation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;