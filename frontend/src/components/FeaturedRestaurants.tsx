import { useNavigate } from "react-router-dom";
import { Star, Clock, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const restaurants = [
  {
    id: "italian-corner",
    name: "Italian Corner",
    cuisine: "Italian",
    rating: 4.8,
    deliveryTime: "25-35 min",
    priceRange: "$$",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    discount: "20% OFF",
  },
  {
    id: "burger-house",
    name: "Burger House",
    cuisine: "American",
    rating: 4.6,
    deliveryTime: "20-30 min",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop",
    discount: "Free Delivery",
  },
  {
    id: 3,
    name: "Sushi Master",
    cuisine: "Japanese",
    rating: 4.9,
    deliveryTime: "30-40 min",
    priceRange: "$$$",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop",
    discount: "15% OFF",
  },
  {
    id: 4,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.7,
    deliveryTime: "20-25 min",
    priceRange: "$",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=600&fit=crop",
    discount: "Buy 1 Get 1",
  },
];

const FeaturedRestaurants = () => {
  const navigate = useNavigate();

  return (
    <section id="restaurants" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Restaurants
          </h2>
          <p className="text-xl text-muted-foreground">
            Top-rated restaurants near you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {restaurants.map((restaurant, index) => (
            <Card
              key={restaurant.id}
              className="card-hover cursor-pointer overflow-hidden border-2"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(`/restaurant/${restaurant.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <Badge className="absolute top-4 right-4 gradient-primary text-primary-foreground font-semibold">
                  {restaurant.discount}
                </Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
                <p className="text-muted-foreground mb-3">{restaurant.cuisine}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-semibold">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{restaurant.deliveryTime}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <DollarSign className="h-4 w-4" />
                    <span>{restaurant.priceRange}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRestaurants;
