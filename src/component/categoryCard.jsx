import "@fontsource/inter";
export default function TrendingCategories() {
    return (
      <div className="w-full mx-auto my-8 max-w-screen-xl font-inter">
        <div className="mb-4">
          <h2 className="text-lg font-medium text-gray-500">Trending</h2>
          <h1 className="text-2xl font-bold text-black">Categories</h1>
        </div>
        
        <div className="w-full  py-1 flex flex-row gap-4">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="bg-[#c24639] rounded-lg p-6 h-32 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white">55,519+ Dresses</h3>
              <p className="text-sm text-white/80">Marketplace / Clothing & Fashion / Women / Dresses</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="bg-[#5d6b8a] rounded-lg p-6 h-32 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white">55,519+ Dresses</h3>
              <p className="text-sm text-white/80">Motors / Cars</p>
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="bg-[#c24639] rounded-lg p-6 h-32 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white">18,967+ Shoes</h3>
              <p className="text-sm text-white/80">Marketplace / Clothing & Fashion / Men / Shoes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }