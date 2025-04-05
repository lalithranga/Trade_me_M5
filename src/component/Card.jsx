import "@fontsource/inter";

function Card() {
  return (
    <div className="bg-[#f7f6f4] flex flex-row justify-center items-center top-1 grid-cols-1 md:grid-cols-3 gap-10 w-full">
    
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-sm p-6 my-3 mx-5 flex flex-col justify-between h-[320px] w-[520px]">
          <div>
            <h3 className="text-indigo-600 font-semibold text-sm mb-2">Trending</h3>
            <h2 className="text-2xl font-semibold text-gray-800 leading-snug">
              Shop last minute Xmas gifts!
            </h2>
          </div>
          <button className="mt-6 bg-indigo-600 text-white font-medium px-4 py-2 rounded hover:bg-indigo-700 transition text-sm w-fit">
            Shop now
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#5850ec] rounded-xl shadow-sm p-6 text-white my-3 mx-5 flex flex-col justify-between h-[320px] w-[520px]">
          <div>
            <h3 className="font-semibold text-lg mb-2">Property</h3>
            <h2 className="text-2xl font-semibold leading-snug">
              You choose, we celebrate
            </h2>
          </div>
          <button className="mt-6 bg-white text-[#5850ec] font-semibold px-4 py-2 rounded hover:bg-gray-200 transition text-sm w-fit">
            Nominate Now
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#5850ec] rounded-xl shadow-sm p-6 text-white my-3 mx-5 flex flex-col justify-between h-[320px] w-[520px]">
          <div>
            <h3 className="font-semibold text-sm mb-2">Property</h3>
            <h2 className="text-2xl font-semibold leading-snug">
              Sold data is here
            </h2>
          </div>
          <button className="mt-6 bg-white text-[#5850ec] font-semibold px-4 py-2 rounded hover:bg-gray-200 transition text-sm w-fit">
            Search now
          </button>
        </div>
        
    
    </div>
  );
}

export default Card;
