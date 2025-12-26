import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col mb-6">
              <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
                The
              </span>
              <span className="font-serif text-2xl font-semibold tracking-wide text-foreground">
                Church Street
              </span>
              <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
                Gourmet
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              A culinary gem nestled in the heart of Galle Fort, offering an exquisite blend of 
              local and international flavors in a heritage colonial setting.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Our Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Reservations", path: "/reservation" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">Contact</h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <span>Church Street, Galle Fort,<br />Galle, Sri Lanka</span>
              </a>
              <a
                href="tel:+94912234567"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>+94 91 223 4567</span>
              </a>
              <a
                href="mailto:info@churchstreetgourmet.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <span>info@churchstreetgourmet.com</span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">Opening Hours</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-primary" />
                <div className="text-sm">
                  <p className="text-foreground mb-1">Monday – Saturday</p>
                  <p className="text-muted-foreground">8:00 AM – 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0 text-primary opacity-0" />
                <div className="text-sm">
                  <p className="text-foreground mb-1">Sunday</p>
                  <p className="text-muted-foreground">9:00 AM – 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Church Street Gourmet. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Located in the historic Galle Fort, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
