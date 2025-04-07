import Card from "../component/card";
import Header from "../component/Header";
import ProductCard from "../component/ProductCard";
import TrendingCategories from "../component/TrandingRedCard";


function LandingPage() {
  return (
    <div>
      <Header />
      <Card />
  
      <ProductCard />
      <TrendingCategories />
      <ProductCard />
      

     
    </div>
  );
}

export default LandingPage;