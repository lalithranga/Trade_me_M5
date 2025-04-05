import Card from "../component/card";
import Header from "../component/Header";
import ProductCard from "../component/ProductCard";


function LandingPage() {
  return (
    <div>
      <Header />
      <Card />
      <h1 className="text-[33px] font-semibold text-gray-800 leading-snug lg:ml-[150px] py-6">Cool Auction</h1>
      <ProductCard />
      

     
    </div>
  );
}

export default LandingPage;