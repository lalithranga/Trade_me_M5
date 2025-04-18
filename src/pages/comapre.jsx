import React, { useEffect, useState } from "react";
import axios from "axios";
import { clearCart, removeFromCart } from "../utils.jsx/compareCart";
import { Link, useNavigate } from "react-router-dom";
import "@fontsource/inter";

function Compare() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || { title: [] };
    const titles = cart.title || [];

    if (titles.length > 0) {
      Promise.all(
        titles.map((title) =>
          axios.get(
            `http://localhost:3000/api/items/${encodeURIComponent(title)}`
          )
        )
      )
        .then((responses) => {
          setItems(responses.map((response) => response.data));
        })
        .catch((error) => {
          console.error("Error fetching item details:", error);
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!items.length && !loading) {
      navigate("/search");
    }
  }, [items, loading, navigate]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64 font-inter">
        <p style={{ color: "#76716D" }} className="text-lg">
          Loading...
        </p>
      </div>
    );

  return (
    <div className="font-inter">
      <div className="bg-red-600 text-white text-sm font-semibold py-2 px-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2">
          <div className="flex space-x-4">
            <button className="hover:underline">Browse Marketplace</button>
            <button className="hover:underline">Stores</button>
            <button className="hover:underline">Detail</button>
            <button className="hover:underline">Book a courier</button>
          </div>
          <button className="text-white font-semibold px-4 py-1 rounded hover:underline">
            List an item
          </button>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-[#000000]">
            Compare listings
          </h1>
          <div className="flex space-x-2">
            <button
              className="flex items-center mx-[30px]"
              style={{ color: "#3E74CB" }}
              onClick={() => navigate("/search")}
            >
              <img
                src="/back search.png"
                alt="Remove"
                className="w-[40pxpx] h-[40px] hover:text-blue-500 mx-1"
              />
              Back to search
            </button>
            <button
              style={{ color: "#3E74CB" }}
              onClick={() => {
                clearCart();
                navigate("/search");
              }}
            >
              Remove all
            </button>
          </div>
        </div>

        <div className="flex flex-wrap">
          {items.map((item, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/2 p-2">
              <div className=" bg-white overflow-hidden relative">
                <button
                  className="absolute top-2 right-2 rounded-full "
                  onClick={() => {
                    removeFromCart(item.title);
                    const updatedItems = items.filter(
                      (i) => i.title !== item.title
                    );
                    setItems(updatedItems);

                    if (updatedItems.length === 0) {
                      navigate("/search/compare");
                    }
                  }}
                >
                  <img
                    src="/remove.png"
                    alt="Remove"
                    className="w-[40pxpx] h-[40px]  hover:text-blue-500"
                  />
                </button>

                <div className="h-[500px] flex items-center justify-center">
                  <img
                    src={item.image || "/api/placeholder/400/320"}
                    alt={item.title}
                    className="max-h-full max-w-full object-cover "
                  />
                </div>

                <div className="p-4" style={{ color: "#76716D" }}>
                  <p className="text-sm mb-1">
                    {item.location || "Auckland City, Auckland"}
                  </p>
                  <h2 className="text-lg font-medium mb-2 text-black">
                    {item.title || "Coffee Table wooden"}
                  </h2>

                  <div className="flex items-center text-sm mb-3">
                    <img
                      src="/view1.png"
                      alt="Remove"
                      className="w-[20px] h-[20px] hover:text-blue-500"
                    />

                    <p>Closes: {item.closing_time || "11 hrs"}</p>
                  </div>

                  <div className="text-sm mb-3 flex justify-between">
                    <div className="flex items-center">
                      <img
                        src="eye.png"
                        alt="eye"
                        className="w-[20px] h-[20px] hover:text-blue-500"
                      />

                      <span>{item.views || "177"} Views</span>
                    </div>

                    <div className="flex items-center">
                      <img
                        src="Group.png"
                        alt="watchlist"
                        className="w-[15px] h-[15px] hover:text-blue-500"
                      />
                     
                      <span>{item.watchlisted || "15"} others watchlisted</span>
                    </div>

                    <button
                      className="flex items-center"
                      style={{ color: "#3E74CB" }}
                    >
                      <img
                        src="/share.png"
                        alt="share"
                        className="w-[20px] h-[20px] hover:text-blue-500"
                      />
                      Share
                    </button>
                  </div>

                  <div className="mb-4">
                    <div className="text-center mb-2">
                      <span className="text-xs">Buy now</span>
                      <p className="text-xl font-bold">
                        ${item.price || "79.90"}
                      </p>
                    </div>
                    <Link to="/search/payment">
                      <button
                        className="w-full py-2 rounded flex items-center justify-center mb-2"
                        style={{ backgroundColor: "#3E74CB", color: "white" }}
                      >
                        Buy Now
                      </button>
                    </Link>
                    <button
                      style={{ color: "#3E74CB" }}
                      className="w-full py-2"
                    >
                      Add to Cart
                    </button>
                  </div>

                  <div className="border-t pt-4">
                    <div className="mb-2">
                      <span className="text-xs">Current bid</span>
                      <p className="text-xl font-bold">
                        ${item.current_bid || "79.90"}
                      </p>
                      <p className="text-xs">Reserve met</p>
                    </div>

                    <div className="mb-3">
                      <p className="text-sm">
                        Your bid:{" "}
                        <span className="font-medium">
                          ${item.your_bid || "45.00"}
                        </span>
                      </p>
                      <p className="text-xs" style={{ color: "#3E74CB" }}>
                        Bid history (3)
                      </p>
                    </div>

                    <button
                      className="w-full py-2 rounded"
                      style={{ backgroundColor: "#3E74CB", color: "white" }}
                    >
                      Place bid
                    </button>
                  </div>

                  <div className="border-t mt-4 pt-4">
                    <h3 className="font-medium mb-2">Quick Overview</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Condition:</span>{" "}
                        {item.condition || "Used"}
                      </div>
                      <div>
                        <span className="text-gray-500">Colour:</span>{" "}
                        {item.color || "White"}
                      </div>
                    </div>
                  </div>

                  <div className="border-t mt-4 pt-4 px-4 pb-6">
                    <div className="border rounded-lg p-4 text-center">
                      <img
                        src="/api/placeholder/400/320"
                        alt="Seller profile"
                        className="w-16 h-16 mx-auto rounded-full object-cover mb-2"
                      />
                      <h4 className="font-semibold">Ashley</h4>
                      <div className="flex justify-center mt-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.965a1 1 0 00.95.69h4.19c.969 0 1.371 1.24.588 1.81l-3.396 2.465a1 1 0 00-.364 1.118l1.286 3.965c.3.921-.755 1.688-1.538 1.118l-3.396-2.465a1 1 0 00-1.175 0l-3.396 2.465c-.783.57-1.838-.197-1.538-1.118l1.286-3.965a1 1 0 00-.364-1.118L2.045 9.392c-.783-.57-.38-1.81.588-1.81h4.19a1 1 0 00.95-.69l1.286-3.965z" />
                          </svg>
                        ))}
                      </div>
                      <p className="text-sm mb-2">(75287)</p>
                      <div className="flex justify-center space-x-2 mb-2">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                          Address verified
                        </span>
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                          In trade
                        </span>
                      </div>
                      <p className="text-sm mb-1">99.4% positive feedback</p>
                      <p className="text-sm">Seller located in</p>
                      <p className="text-sm mb-3">Auckland City, Auckland</p>
                      <button
                        className="w-full border py-2 rounded font-medium"
                        style={{
                          borderColor: "#3E74CB",
                          color: "#3E74CB",
                        }}
                      >
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
