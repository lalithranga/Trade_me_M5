import Card from "../component/card";
import Header from "../component/Header";
import ProductCard from "../component/ProductCard";
import TopHeader from "../component/TopHeader";
import Footer from "../component/Footer";

function LandingPage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Card />
      <ProductCard />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default LandingPage;
