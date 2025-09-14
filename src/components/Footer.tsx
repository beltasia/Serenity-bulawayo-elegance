import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-bronze text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4 text-luxury-gold">
              Banff Lodge
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Experience unparalleled luxury and elegance in the heart of Bulawayo, Zimbabwe. 
              Where exceptional service meets sophisticated comfort.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-bronze luxury-transition"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-bronze luxury-transition"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-luxury-gold hover:text-luxury-bronze luxury-transition"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-luxury-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white/80 hover:text-white luxury-transition">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white luxury-transition">About</a></li>
              <li><a href="#rooms" className="text-white/80 hover:text-white luxury-transition">Rooms</a></li>
              <li><a href="#amenities" className="text-white/80 hover:text-white luxury-transition">Amenities</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white luxury-transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-luxury-gold">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-0.5 text-luxury-gold" />
                <span className="text-white/80 text-sm">
                  123 Fife Street<br />
                  Bulawayo, Zimbabwe
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-luxury-gold" />
                <span className="text-white/80 text-sm">+263 29 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-luxury-gold" />
                <span className="text-white/80 text-sm">info@banfflodge.co.zw</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Banff Lodge Bulawayo. All rights reserved. | 
            <span className="hover:text-white luxury-transition cursor-pointer"> Privacy Policy</span> | 
            <span className="hover:text-white luxury-transition cursor-pointer"> Terms of Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;