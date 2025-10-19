import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CuisineCategories from "@/components/CuisineCategories";
import FeaturedRestaurants from "@/components/FeaturedRestaurants";
import TrendingDishes from "@/components/TrendingDishes";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <CuisineCategories />
        <FeaturedRestaurants />
        <TrendingDishes />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
