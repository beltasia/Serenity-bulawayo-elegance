import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import luxuryRoomImage from "@/assets/luxury-room.jpg";

const Rooms = () => {
  const roomTypes = [
    {
      name: "Executive Suite",
      image: luxuryRoomImage,
      description: "Spacious suite with separate living area, premium amenities, and stunning city views.",
      features: ["King-size bed", "Living area", "City view", "Mini bar", "24/7 room service"],
      price: "From $180/night"
    },
    {
      name: "Deluxe Room",
      image: luxuryRoomImage,
      description: "Elegantly designed room with modern amenities and comfortable seating area.",
      features: ["Queen-size bed", "Work desk", "Garden view", "Coffee station", "Free WiFi"],
      price: "From $120/night"
    },
    {
      name: "Premium Room",
      image: luxuryRoomImage,
      description: "Contemporary comfort with luxury finishes and thoughtful design elements.",
      features: ["Double bed", "Sitting area", "Pool view", "Air conditioning", "Satellite TV"],
      price: "From $95/night"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-luxury-bronze mb-4">
            Luxury Accommodations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our collection of elegantly appointed rooms and suites, 
            each designed to provide the ultimate in comfort and style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomTypes.map((room, index) => (
            <Card key={room.name} className="overflow-hidden luxury-shadow hover:scale-105 luxury-transition animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={room.image} 
                  alt={`${room.name} at Banff Lodge`}
                  className="w-full h-full object-cover hover:scale-110 luxury-transition"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-luxury-bronze mb-2">
                  {room.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {room.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {room.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-luxury-bronze">
                    {room.price}
                  </span>
                  <Button 
                    variant="outline" 
                    className="border-luxury-bronze text-luxury-bronze hover:bg-luxury-bronze hover:text-white"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rooms;