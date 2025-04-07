import Card from "../component/card";
import Header from "../component/Header";
import ProductCard from "../component/ProductCard";
import TopHeader from "../component/TopHeader";

function LandingPage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Card />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default LandingPage;
