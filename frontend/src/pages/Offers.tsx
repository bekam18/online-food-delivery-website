import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tag, Clock, TrendingUp } from "lucide-react";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "50% Off First Order",
      description: "Get 50% off on your first order. Valid for new users only.",
      code: "FIRST50",
      discount: "50% OFF",
      validUntil: "Dec 31, 2025",
      category: "New User",
    },
    {
      id: 2,
      title: "Free Delivery",
      description: "Enjoy free delivery on orders above $20. No code needed.",
      code: "AUTO",
      discount: "FREE DELIVERY",
      validUntil: "Dec 31, 2025",
      category: "Delivery",
    },
    {
      id: 3,
      title: "Weekend Special",
      description: "Get 30% off on all orders during weekends.",
      code: "WEEKEND30",
      discount: "30% OFF",
      validUntil: "Every Weekend",
      category: "Special",
    },
    {
      id: 4,
      title: "Student Discount",
      description: "Students get 25% off on all orders with valid ID.",
      code: "STUDENT25",
      discount: "25% OFF",
      validUntil: "Ongoing",
      category: "Student",
    },
    {
      id: 5,
      title: "Lunch Deal",
      description: "Order lunch between 12-3 PM and save 20%.",
      code: "LUNCH20",
      discount: "20% OFF",
      validUntil: "Daily 12-3 PM",
      category: "Time Limited",
    },
    {
      id: 6,
      title: "Family Pack",
      description: "Order for 4+ people and get 35% off.",
      code: "FAM35",
      discount: "35% OFF",
      validUntil: "Dec 31, 2025",
      category: "Group",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="gradient-primary py-20 px-4">
          <div className="container mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-primary-foreground border-0">
              <Tag className="w-4 h-4 mr-1" />
              Special Deals
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Amazing Offers Just for You
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Save big on your favorite meals with our exclusive deals and promotions
            </p>
          </div>
        </section>

        {/* Offers Grid */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((offer) => (
                <div
                  key={offer.id}
                  className="bg-card rounded-lg border border-border p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="secondary">{offer.category}</Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{offer.discount}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-muted-foreground mb-4">{offer.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Valid until: {offer.validUntil}</span>
                  </div>
                  
                  <div className="flex items-center justify-between gap-4">
                    <div className="bg-muted px-4 py-2 rounded-md font-mono font-bold">
                      {offer.code}
                    </div>
                    <Button variant="outline" size="sm">
                      Copy Code
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-accent/10">
          <div className="container mx-auto text-center">
            <TrendingUp className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl font-bold mb-4">Don't Miss Out!</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              New offers are added regularly. Order now and start saving on delicious meals.
            </p>
            <Button size="lg" className="gradient-primary text-primary-foreground">
              Order Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Offers;
