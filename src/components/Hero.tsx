import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-lodge.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Banff Lodge Bulawayo exterior at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 overlay-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Banff Lodge
          <span className="block text-luxury-gold font-medium text-3xl md:text-4xl mt-2">
            Bulawayo
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-luxury-cream font-light leading-relaxed animate-fade-in delay-300">
          Experience unparalleled luxury and elegance in the heart of Zimbabwe. 
          Where exceptional service meets sophisticated comfort.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <Button 
            size="lg" 
            className="bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-bronze font-semibold px-8 py-4 text-lg luxury-transition"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book Your Stay
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-luxury-bronze font-semibold px-8 py-4 text-lg luxury-transition"
            onClick={() => document.getElementById('rooms')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Rooms
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;