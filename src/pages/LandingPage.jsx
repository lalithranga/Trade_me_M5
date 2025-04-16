import Card from "../component/card";
import Header from "../component/Header";
import ProductCard from "../component/ProductCard";
import TopHeader from "../component/TopHeader";
import Footer from "../component/Footer";
import CategoryCard from "../component/categoryCard";

function LandingPage() {
  return (
    <div>
      <TopHeader />
      <Header />
      <Card />
      <ProductCard />
      <CategoryCard />
      <ProductCard />
      <Footer />
    </div>
  );
}

export default LandingPage;
