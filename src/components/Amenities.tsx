import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Wifi, Car, Dumbbell, Coffee, Shield } from "lucide-react";
import diningImage from "@/assets/dining-area.jpg";

const Amenities = () => {
  const amenities = [
    {
      icon: Utensils,
      title: "Fine Dining",
      description: "Exquisite cuisine crafted by our world-class chefs"
    },
    {
      icon: Wifi,
      title: "Free WiFi",
      description: "High-speed internet access throughout the property"
    },
    {
      icon: Car,
      title: "Valet Parking",
      description: "Complimentary secure parking with valet service"
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art equipment and personal training"
    },
    {
      icon: Coffee,
      title: "24/7 Room Service",
      description: "Around-the-clock dining and beverage service"
    },
    {
      icon: Shield,
      title: "Concierge",
      description: "Personal assistance and local experience guidance"
    }
  ];

  return (
    <section className="py-20 px-4 bg-luxury-sand">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-luxury-bronze mb-4">
            World-Class Amenities
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Discover a comprehensive range of services and facilities designed 
            to enhance every moment of your stay.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="font-serif text-3xl font-semibold text-luxury-bronze mb-6">
              Exceptional Dining Experience
            </h3>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Indulge in culinary excellence at our signature restaurant, where our 
              renowned chefs create innovative dishes using the finest local and 
              international ingredients.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              From intimate dinners to business lunches, our elegant dining spaces 
              provide the perfect ambiance for any occasion.
            </p>
          </div>
          <div className="animate-slide-in-right">
            <img 
              src={diningImage} 
              alt="Elegant dining area at Banff Lodge"
              className="w-full rounded-2xl luxury-shadow"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => {
            const IconComponent = amenity.icon;
            return (
              <Card 
                key={amenity.title} 
                className="text-center p-6 hover:scale-105 luxury-transition bg-white/80 backdrop-blur-sm animate-scale-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-luxury-bronze" />
                  </div>
                  <h4 className="font-semibold text-xl text-luxury-bronze mb-2">
                    {amenity.title}
                  </h4>
                  <p className="text-foreground/70 leading-relaxed">
                    {amenity.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;