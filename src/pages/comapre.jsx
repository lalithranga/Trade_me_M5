import React, { useEffect, useState } from "react";
import axios from "axios";
import { clearCart, removeFromCart } from "../utils.jsx/compareCart";
import { useNavigate } from "react-router-dom";

function Compare() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || { title: [] };
    // Use all items in cart for comparison
    const titles = cart.title || [];

    if (titles.length > 0) {
      Promise.all(
        titles.map(title =>
          axios.get(`http://localhost:3000/api/items/${encodeURIComponent(title)}`)
        )
      )
        .then(responses => {
          setItems(responses.map(response => response.data));
        })
        .catch(error => {
          console.error("Error fetching item details:", error);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-lg text-gray-600">Loading...</p>
    </div>
  );

  if (!items.length) return (
    <div className="flex justify-center items-center h-64">
      <p className="text-lg text-gray-600">No items found in the cart to compare.</p>
    </div>
  );

  return (
  
<div >
<div className="bg-red-600 text-white text-sm font-semibold py-2 px-4">
    <div>
  <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2">
    <div className="flex space-x-4">
      <button className="hover:underline">Browse Marketplace</button>
      <button className="hover:underline">Stores</button>
      <button className="hover:underline">Detail</button>
      <button className="hover:underline">Book a courier</button>
    </div>
    <button className=" text-white font-semibold px-4 py-1 rounded hover:bg-gray-100">
      List an item
    </button>
  </div>
  </div>

</div>
<div className="max-w-screen-xl mx-auto px-4 py-6"> 


      <div className="flex items-center justify-between mb-4">
        


        <h1 className="text-xl font-semibold">Compare listings</h1>
        <div className="flex space-x-2">
          <button className="flex items-center text-blue-500 hover:text-blue-700" onClick={() => navigate("/search")}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to search
          </button>
          <button className="text-blue-500 hover:text-blue-700" onClick={() =>{ clearCart();
          navigate("/search");  // Clear the cart and navigate to the compare page
          
        
        }}>
        
            Remove all</button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/2 p-2">
            <div className="border rounded-lg bg-white overflow-hidden relative">
              {/* Close button */}
              <button
  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-100"
  onClick={() => {
    removeFromCart(item.title);
    const updatedItems = items.filter(i => i.title !== item.title);
    setItems(updatedItems);

    if (updatedItems.length === 0) {
      navigate("/search/compare");
    }
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>

              
              {/* Product image */}
              <div className="h-64 bg-gray-100 flex items-center justify-center">
                <img 
                  src={item.image || "/api/placeholder/400/320"} 
                  alt={item.title} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              {/* Item details */}
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{item.location || "Auckland City, Auckland"}</p>
                <h2 className="text-lg font-medium mb-2">{item.title || "Coffee Table wooden"}</h2>
                
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p>Closes: {item.closing_time || "11 hrs"}</p>
                </div>
                
                <div className="text-sm mb-3 flex justify-between">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>{item.views || "177"} Views</span>
                  </div>
                  
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>{item.watchlisted || "15"} others watchlisted</span>
                  </div>
                  
                  <button className="text-blue-500 hover:text-blue-700 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    Share
                  </button>
                </div>
                
                {/* Buy now section */}
                <div className="mb-4">
                  <div className="text-center mb-2">
                    <span className="text-xs text-gray-500">Buy now</span>
                    <p className="text-xl font-bold">${item.price || "79.90"}</p>
                  </div>
                  
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded flex items-center justify-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Buy Now
                  </button>
                  
                  <button className="w-full text-blue-500 hover:text-blue-700 py-2">
                    Add to Cart
                  </button>
                </div>
                
                {/* Current bid section */}
                <div className="border-t pt-4">
                  <div className="mb-2">
                    <span className="text-xs text-gray-500">Current bid</span>
                    <p className="text-xl font-bold">${item.current_bid || "79.90"}</p>
                    <p className="text-xs text-gray-500">Reserve met</p>
                  </div>
                  
                  <div className="mb-3">
                    <p className="text-sm">Your bid: <span className="font-medium">${item.your_bid || "45.00"}</span></p>
                    <p className="text-xs text-blue-500">Bid history (3)</p>
                  </div>
                  
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded">
                    Place bid
                  </button>
                </div>
                
                {/* Quick overview */}
                <div className="border-t mt-4 pt-4">
                  <h3 className="font-medium mb-2">Quick Overview</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-500">Condition:</span> {item.condition || "Used"}
                    </div>
                    <div>
                      <span className="text-gray-500">Colour:</span> {item.color || "White"}
                    </div>
                  </div>
                </div>
                {/* Seller Information */}
<div className="border-t mt-4 pt-4 px-4 pb-6">
  <div className="border rounded-lg p-4 text-center">
    <img 
      src="https://www.the-sun.com/wp-content/uploads/sites/6/2023/03/OP-OMF-FAKE-CAR-DEALER-.jpg?strip=all&quality=100&w=1920&h=1080&crop=1" 
      alt="Seller logo" 
      className="w-16 h-16 mx-auto rounded-full object-cover mb-2"
    />
    <h4 className="font-semibold">Ashley</h4>
    <div className="flex justify-center mt-1 mb-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.19c.969 0 1.371 1.24.588 1.81l-3.396 2.465a1 1 0 00-.364 1.118l1.286 3.965c.3.921-.755 1.688-1.538 1.118l-3.396-2.465a1 1 0 00-1.175 0l-3.396 2.465c-.783.57-1.838-.197-1.538-1.118l1.286-3.965a1 1 0 00-.364-1.118L2.045 9.392c-.783-.57-.38-1.81.588-1.81h4.19a1 1 0 00.95-.69l1.286-3.965z" />
        </svg>
      ))}
    </div>
    <p className="text-sm text-gray-600 mb-2">(75287)</p>
    <div className="flex justify-center space-x-2 mb-2">
      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Address verified</span>
      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">In trade</span>
    </div>
    <p className="text-sm text-gray-600 mb-1">99.4% positive feedback</p>
    <p className="text-sm text-gray-600">Seller located in</p>
    <p className="text-sm text-gray-600 mb-3">Auckland City, Auckland</p>
    <button className="w-full border border-blue-500 text-blue-500 hover:bg-blue-50 py-2 rounded font-medium">
      Visit Shop
    </button>
  </div>
</div>

              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Compare;