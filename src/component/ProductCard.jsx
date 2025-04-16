import React, { useState, useEffect } from "react";
import "@fontsource/inter";

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auctionItem");

        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="w-full px-4 py-6 lg:px-6 font-inter">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cool Auction</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {products.map((product) => (
    <div className="flex flex-col w-full h-full bg-white rounded shadow " key={product._id}>
      <div className="relative aspect-square w-full mb-4 h-[35=0px]">
        <img
          src={product.image || "/default-image.jpg"}
          alt={product.title}
          className="w-full h-full mt-3 object-cover rounded "
        />
        <div className="absolute top-0 right-0">
          <img
            src="/watchlist.png"
            alt="watchlist"
            className="w-[60px] h-[60px] object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <div className="flex justify-between text-sm text-[#9D9996] mb-1">
            <span>{product.location}</span>
            <span>
              Listed: <span className="text-red-600">{product.listedDate}</span>
            </span>
          </div>
          <h3 className="font-bold text-[16px] mb-2 text-[#000000]">{product.title}</h3>
          
        </div>

        <div className="font-bold  mt-4 pb-7 text-[#000000]">${(product.price).toFixed(2)}</div>
      </div>
    </div>
  ))}
</div>

         
        )}
      </div>
    </div>
  );
}

export default ProductCard;
