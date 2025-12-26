import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const menuCategories = [
  {
    name: "Breakfast",
    description: "Start your day with our freshly prepared morning delights",
    items: ["Hoppers & Eggs", "Full English", "Tropical Fruit Bowl", "Fresh Pastries"],
  },
  {
    name: "Sri Lankan",
    description: "Authentic flavors from our island paradise",
    items: ["Prawn Curry", "Lamb Kottu", "Fish Ambul Thiyal", "Rice & Curry"],
  },
  {
    name: "International",
    description: "Global cuisine crafted with local ingredients",
    items: ["Grilled Seafood", "Pasta Selection", "Gourmet Burgers", "Fresh Salads"],
  },
  {
    name: "Beverages",
    description: "Refreshing drinks and specialty cocktails",
    items: ["Fresh Juices", "Ceylon Tea", "Craft Cocktails", "Fine Wines"],
  },
];

const MenuPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
            Our Offerings
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
            Explore Our Menu
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background p-8 rounded-sm border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="text-foreground/80 text-sm flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/menu">
            <Button variant="heroFilled" size="lg">
              View Full Menu
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuPreview;
