import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Mail, Calendar, Users, MessageSquare } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import insideImage from "@/assets/inside-2.jpg";
import outsideImage from "@/assets/outside-1.jpg";

const openingHours = [
  { day: "Monday", hours: "8:00 AM – 10:00 PM" },
  { day: "Tuesday", hours: "8:00 AM – 10:00 PM" },
  { day: "Wednesday", hours: "8:00 AM – 10:00 PM" },
  { day: "Thursday", hours: "8:00 AM – 10:00 PM" },
  { day: "Friday", hours: "8:00 AM – 11:00 PM" },
  { day: "Saturday", hours: "8:00 AM – 11:00 PM" },
  { day: "Sunday", hours: "9:00 AM – 9:00 PM" },
];

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to a backend
    toast.success("Reservation request submitted! We'll contact you shortly to confirm.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      occasion: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Reservations | Church Street Gourmet - Book Your Table</title>
        <meta
          name="description"
          content="Make a reservation at Church Street Gourmet in Galle Fort. Book your table online or call us for a memorable dining experience."
        />
      </Helmet>
      <Layout>
        <PageHeader
          title="Reservations"
          subtitle="Reserve your table for an unforgettable dining experience"
          backgroundImage={outsideImage}
        />

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Reservation Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
                  Book Online
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6">
                  Make a Reservation
                </h2>
                <div className="section-divider !mx-0 mb-8" />

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder="Your name"
                        className="bg-card border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="your@email.com"
                        className="bg-card border-border"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                        placeholder="+94 XX XXX XXXX"
                        className="bg-card border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests *</Label>
                      <Select onValueChange={(value) => handleChange("guests", value)}>
                        <SelectTrigger className="bg-card border-border">
                          <SelectValue placeholder="Select guests" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                            <SelectItem key={num} value={String(num)}>
                              {num} {num === 1 ? "Guest" : "Guests"}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="date">Preferred Date *</Label>
                      <Input
                        id="date"
                        type="date"
                        value={formData.date}
                        onChange={(e) => handleChange("date", e.target.value)}
                        required
                        className="bg-card border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Select onValueChange={(value) => handleChange("time", value)}>
                        <SelectTrigger className="bg-card border-border">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM"].map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="occasion">Special Occasion (Optional)</Label>
                    <Select onValueChange={(value) => handleChange("occasion", value)}>
                      <SelectTrigger className="bg-card border-border">
                        <SelectValue placeholder="Select occasion" />
                      </SelectTrigger>
                      <SelectContent>
                        {["Birthday", "Anniversary", "Business Dinner", "Romantic Dinner", "Family Gathering", "Other"].map((occasion) => (
                          <SelectItem key={occasion} value={occasion}>
                            {occasion}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Special Requests (Optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Any dietary requirements, seating preferences, or special requests..."
                      rows={4}
                      className="bg-card border-border resize-none"
                    />
                  </div>

                  <Button type="submit" variant="heroFilled" size="lg" className="w-full">
                    Request Reservation
                  </Button>

                  <p className="text-muted-foreground text-sm text-center">
                    For groups larger than 8, please call us directly at{" "}
                    <a href="tel:+94912234567" className="text-primary hover:underline">
                      +94 91 223 4567
                    </a>
                  </p>
                </form>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
                  Contact & Hours
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="section-divider !mx-0 mb-8" />

                <div className="space-y-8">
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
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline mt-2 inline-block"
                      >
                        Get Directions →
                      </a>
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

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:reservations@churchstreetgourmet.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        reservations@churchstreetgourmet.com
                      </a>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-lg text-foreground mb-3">Opening Hours</h4>
                      <div className="space-y-2">
                        {openingHours.map((item) => (
                          <div key={item.day} className="flex justify-between text-sm">
                            <span className="text-foreground/80">{item.day}</span>
                            <span className="text-muted-foreground">{item.hours}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="mt-12">
                  <img
                    src={insideImage}
                    alt="Church Street Gourmet dining interior"
                    className="w-full h-64 object-cover rounded-sm shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-96 bg-card">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.8847760392147!2d80.2159!3d6.0268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDEnMzYuNSJOIDgwwrAxMic1Ny4yIkU!5e0!3m2!1sen!2slk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Church Street Gourmet Location"
            className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          />
        </section>
      </Layout>
    </>
  );
};

export default Reservation;
