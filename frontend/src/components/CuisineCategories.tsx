import { Card } from "@/components/ui/card";
import { Pizza, Beef, Salad, Coffee, IceCream, Cookie } from "lucide-react";

const categories = [
  { id: 1, name: "Pizza", icon: Pizza, color: "text-red-500" },
  { id: 2, name: "Burgers", icon: Beef, color: "text-orange-500" },
  { id: 3, name: "Healthy", icon: Salad, color: "text-green-500" },
  { id: 4, name: "Coffee", icon: Coffee, color: "text-amber-700" },
  { id: 5, name: "Desserts", icon: IceCream, color: "text-pink-500" },
  { id: 6, name: "Bakery", icon: Cookie, color: "text-yellow-600" },
];

const CuisineCategories = () => {
  return (
    <section id="cuisines" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Browse by Cuisine
          </h2>
          <p className="text-xl text-muted-foreground">
            What are you craving today?
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.id}
                className="card-hover cursor-pointer p-6 text-center group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={`p-4 rounded-full bg-muted group-hover:scale-110 transition-transform ${category.color}`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CuisineCategories;
