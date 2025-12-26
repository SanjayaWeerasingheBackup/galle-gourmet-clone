import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone } from "lucide-react";
import outsideImage from "@/assets/outside-2.jpg";

const openingHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 10:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 11:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 9:00 PM" },
];

const ReservationCTA = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${outsideImage})` }}
      />
      <div className="absolute inset-0 bg-background/85" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
              Visit Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground mb-8">
              Make a Reservation
            </h2>
            <div className="section-divider !mx-0 mb-10" />

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">Address</h4>
                  <p className="text-muted-foreground">
                    Church Street, Galle Fort<br />
                    Galle, Sri Lanka
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-2">Opening Hours</h4>
                  <div className="space-y-1">
                    {openingHours.map((item) => (
                      <div key={item.day} className="flex justify-between gap-8 text-sm">
                        <span className="text-foreground/80">{item.day}</span>
                        <span className="text-muted-foreground">{item.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-foreground mb-1">Phone</h4>
                  <a
                    href="tel:+94912234567"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +94 91 223 4567
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card p-10 lg:p-12 rounded-sm border border-border"
          >
            <h3 className="font-serif text-3xl text-foreground mb-4">
              Reserve Your Table
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Experience the perfect blend of heritage ambiance and exceptional cuisine. 
              Book your table today for an unforgettable dining experience in the heart 
              of Galle Fort.
            </p>
            <div className="flex flex-col gap-4">
              <Link to="/reservation">
                <Button variant="heroFilled" size="lg" className="w-full">
                  Book Online
                </Button>
              </Link>
              <a href="tel:+94912234567">
                <Button variant="outline" size="lg" className="w-full">
                  Call to Reserve
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReservationCTA;
