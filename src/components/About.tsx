const About = () => {
  return (
    <section className="py-20 px-4 bg-luxury-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-luxury-bronze mb-6">
              Welcome to 
              <span className="block text-luxury-gold">Exceptional Hospitality</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Nestled in the vibrant city of Bulawayo, Banff Lodge stands as a beacon of 
              luxury and sophistication. Our commitment to excellence ensures every guest 
              experiences the finest in African hospitality.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              From our elegantly appointed rooms to our world-class amenities, every detail 
              has been carefully crafted to provide an unforgettable stay that combines 
              modern comfort with authentic Zimbabwean charm.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-bronze">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-bronze">50+</div>
                <div className="text-sm text-muted-foreground">Luxury Rooms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-luxury-bronze">100%</div>
                <div className="text-sm text-muted-foreground">Guest Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="bg-white p-8 rounded-2xl card-shadow">
              <h3 className="font-serif text-2xl font-semibold text-luxury-bronze mb-4">
                Our Promise
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  <span>24/7 concierge service</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  <span>Gourmet dining experiences</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  <span>Luxurious spa treatments</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  <span>Personalized guest experiences</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  <span>Prime location in Bulawayo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;