import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import insideImage from "@/assets/inside-1.jpg";
import foodImage from "@/assets/food-1.jpg";

const AboutPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <img
                src={insideImage}
                alt="Church Street Gourmet interior with colonial architecture"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 hidden md:block">
                <img
                  src={foodImage}
                  alt="Delicious curry dishes at Church Street Gourmet"
                  className="w-48 h-48 lg:w-64 lg:h-64 object-cover rounded-sm shadow-xl border-4 border-background"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
              Heritage Meets<br />Culinary Excellence
            </h2>
            <div className="section-divider !mx-0 mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              Set within a beautifully restored colonial building in the heart of Galle Fort, 
              Church Street Gourmet offers a unique dining experience that celebrates Sri Lanka's 
              rich cultural heritage alongside world-class cuisine.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our chefs craft each dish with passion, using the freshest local ingredients 
              to create flavors that honor tradition while embracing innovation. From aromatic 
              curries to international favorites, every meal tells a story.
            </p>
            <Link to="/about">
              <Button variant="outline">
                Discover More
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
