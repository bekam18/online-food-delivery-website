import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface Dish {
  id: string;
  name: string;
  restaurant: string;
  price: number;
  image: string;
  rating: number;
  description?: string;
  ingredients?: string[];
}

interface DishDetailModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
}

const DishDetailModal = ({ dish, isOpen, onClose }: DishDetailModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!dish) return null;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        restaurant: dish.restaurant,
        image: dish.image,
      });
    }
    setQuantity(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{dish.name}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="relative h-64 rounded-lg overflow-hidden">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground">{dish.restaurant}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-semibold">{dish.rating}</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-primary">
                ${dish.price.toFixed(2)}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground">
                {dish.description ||
                  "A delicious dish prepared with the finest ingredients and expertly crafted to delight your taste buds."}
              </p>
            </div>

            {dish.ingredients && (
              <div>
                <h3 className="font-semibold mb-2">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-4">
                <span className="font-semibold">Quantity:</span>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-xl font-bold w-12 text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button
                onClick={handleAddToCart}
                className="gradient-primary text-primary-foreground px-8"
              >
                Add to Cart - ${(dish.price * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DishDetailModal;
