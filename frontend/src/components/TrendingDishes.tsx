import { useState } from "react";
import { Plus, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import DishDetailModal from "./DishDetailModal";
import { useCart } from "@/contexts/CartContext";
import pizzaImage from "@/assets/pizza.jpg";
import burgerImage from "@/assets/burger.jpg";
import pokeBowlImage from "@/assets/poke-bowl.jpg";
import noodlesImage from "@/assets/noodles.jpg";
import tacosImage from "@/assets/tacos.jpg";
import dessertImage from "@/assets/dessert.jpg";

const dishes = [
  {
    id: "1",
    name: "Margherita Pizza",
    restaurant: "Italian Corner",
    price: 12.99,
    image: pizzaImage,
    rating: 4.8,
  },
  {
    id: "2",
    name: "Classic Burger",
    restaurant: "Burger House",
    price: 9.99,
    image: burgerImage,
    rating: 4.7,
  },
  {
    id: "3",
    name: "Salmon Poke Bowl",
    restaurant: "Fresh Bowl",
    price: 14.99,
    image: pokeBowlImage,
    rating: 4.9,
  },
  {
    id: "4",
    name: "Pad Thai Noodles",
    restaurant: "Thai Express",
    price: 11.99,
    image: noodlesImage,
    rating: 4.6,
  },
  {
    id: "5",
    name: "Chicken Tacos",
    restaurant: "Taco Fiesta",
    price: 8.99,
    image: tacosImage,
    rating: 4.8,
  },
  {
    id: "6",
    name: "Chocolate Cake",
    restaurant: "Sweet Treats",
    price: 6.99,
    image: dessertImage,
    rating: 4.9,
  },
];

const TrendingDishes = () => {
  const [selectedDish, setSelectedDish] = useState<any>(null);
  const { addToCart } = useCart();

  return (
    <>
      <DishDetailModal
        dish={selectedDish}
        isOpen={!!selectedDish}
        onClose={() => setSelectedDish(null)}
      />
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Trending Dishes
          </h2>
          <p className="text-xl text-muted-foreground">
            Most ordered dishes this week
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, index) => (
            <Card
              key={dish.id}
              className="card-hover overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedDish(dish)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 right-4 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-lg font-bold mb-1">{dish.name}</h3>
                    <p className="text-sm text-muted-foreground">{dish.restaurant}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">${dish.price}</div>
                    <div className="text-sm text-muted-foreground">⭐ {dish.rating}</div>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 gradient-primary text-primary-foreground group-hover:shadow-lg transition-shadow"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(dish);
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
    </>
  );
};

export default TrendingDishes;
