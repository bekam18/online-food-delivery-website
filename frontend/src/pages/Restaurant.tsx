import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DishDetailModal from "@/components/DishDetailModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, DollarSign, MapPin, ArrowLeft, Heart, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import pizzaImage from "@/assets/pizza.jpg";
import burgerImage from "@/assets/burger.jpg";
import pokeBowlImage from "@/assets/poke-bowl.jpg";
import noodlesImage from "@/assets/noodles.jpg";
import tacosImage from "@/assets/tacos.jpg";
import dessertImage from "@/assets/dessert.jpg";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
}

interface RestaurantData {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  priceRange: string;
  address: string;
  description: string;
  menu: MenuItem[];
}

// Mock restaurant data
const restaurantData: Record<string, RestaurantData> = {
  "italian-corner": {
    id: "italian-corner",
    name: "Italian Corner",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    priceRange: "$$",
    address: "123 Main St, Downtown",
    description: "Authentic Italian cuisine with fresh ingredients and traditional recipes",
    menu: [
      { id: "1", name: "Margherita Pizza", price: 12.99, image: pizzaImage, rating: 4.8, category: "Pizza" },
      { id: "2", name: "Pepperoni Pizza", price: 14.99, image: pizzaImage, rating: 4.7, category: "Pizza" },
      { id: "3", name: "Pasta Carbonara", price: 13.99, image: noodlesImage, rating: 4.9, category: "Pasta" },
      { id: "4", name: "Lasagna", price: 15.99, image: pizzaImage, rating: 4.8, category: "Pasta" },
      { id: "5", name: "Tiramisu", price: 6.99, image: dessertImage, rating: 4.9, category: "Desserts" },
    ],
  },
  "burger-house": {
    id: "burger-house",
    name: "Burger House",
    cuisine: "American",
    rating: 4.6,
    deliveryTime: "20-30 min",
    priceRange: "$",
    address: "456 Oak Ave, Midtown",
    description: "Juicy burgers and crispy fries made to perfection",
    menu: [
      { id: "6", name: "Classic Burger", price: 9.99, image: burgerImage, rating: 4.7, category: "Burgers" },
      { id: "7", name: "Cheeseburger", price: 10.99, image: burgerImage, rating: 4.6, category: "Burgers" },
      { id: "8", name: "Bacon Burger", price: 12.99, image: burgerImage, rating: 4.8, category: "Burgers" },
      { id: "9", name: "Veggie Burger", price: 9.99, image: burgerImage, rating: 4.5, category: "Burgers" },
      { id: "10", name: "Fries", price: 3.99, image: burgerImage, rating: 4.6, category: "Sides" },
    ],
  },
};

const Restaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedDish, setSelectedDish] = useState<any>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const restaurant = id ? restaurantData[id] : null;

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Restaurant not found</h1>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  const categories = ["All", ...Array.from(new Set(restaurant.menu.map((item) => item.category)))];
  const filteredMenu: MenuItem[] = selectedCategory === "All" 
    ? restaurant.menu 
    : restaurant.menu.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Restaurant Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-12">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1 space-y-4">
                <h1 className="text-4xl font-bold">{restaurant.name}</h1>
                <p className="text-xl text-muted-foreground">{restaurant.description}</p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="font-semibold">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-5 w-5 text-muted-foreground" />
                    <span>{restaurant.priceRange}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>{restaurant.address}</span>
                  </div>
                </div>

                <Badge className="gradient-primary text-primary-foreground">
                  {restaurant.cuisine}
                </Badge>
              </div>

              <Button variant="outline" size="icon" className="rounded-full">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Menu Categories */}
        <section className="py-8 bg-background sticky top-16 z-40 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Items */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMenu.map((dish) => (
                <Card
                  key={dish.id}
                  className="card-hover cursor-pointer overflow-hidden"
                  onClick={() => setSelectedDish({ ...dish, restaurant: restaurant.name })}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold">{dish.name}</h3>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Star className="h-3 w-3 fill-primary text-primary" />
                          <span>{dish.rating}</span>
                        </div>
                      </div>
                      <div className="text-xl font-bold text-primary">${dish.price}</div>
                    </div>
                    <Button
                      className="w-full mt-2 gradient-primary text-primary-foreground"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: dish.id,
                          name: dish.name,
                          price: dish.price,
                          restaurant: restaurant.name,
                          image: dish.image,
                        });
                      }}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      
      <DishDetailModal
        dish={selectedDish}
        isOpen={!!selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    </div>
  );
};

export default Restaurant;
