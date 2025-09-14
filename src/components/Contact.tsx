import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Fife Street", "Bulawayo, Zimbabwe"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+263 29 123 4567", "+263 77 890 1234"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["reservations@banfflodge.co.zw", "info@banfflodge.co.zw"]
    },
    {
      icon: Clock,
      title: "Reception",
      details: ["24/7 Front Desk", "Check-in: 3:00 PM", "Check-out: 11:00 AM"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-luxury-bronze mb-4">
            Contact & Location
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Located in the heart of Bulawayo, we're here to assist you with 
            reservations and any inquiries you may have.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card 
                key={info.title} 
                className="text-center p-6 hover:scale-105 luxury-transition animate-scale-in"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-luxury-gold/20 rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-luxury-bronze" />
                  </div>
                  <h4 className="font-semibold text-xl text-luxury-bronze mb-3">
                    {info.title}
                  </h4>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-foreground/70 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-luxury-cream rounded-2xl p-8 md:p-12 text-center animate-fade-in-up">
          <h3 className="font-serif text-3xl font-semibold text-luxury-bronze mb-4">
            Ready to Experience Luxury?
          </h3>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Book your stay at Banff Lodge today and discover why we're Bulawayo's 
            premier destination for discerning travelers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-luxury-bronze hover:bg-luxury-bronze/90 text-white font-semibold px-8 py-4 text-lg luxury-transition"
            >
              Make a Reservation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-luxury-bronze text-luxury-bronze hover:bg-luxury-bronze hover:text-white font-semibold px-8 py-4 text-lg luxury-transition"
            >
              Request Information
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;