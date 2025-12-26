import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import insideImage from "@/assets/inside-1.jpg";
import food1 from "@/assets/food-1.jpg";

interface MenuItem {
  name: string;
  description: string;
  price: string;
  dietary?: string[];
}

interface MenuCategory {
  id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    description: "Start your day with our freshly prepared morning delights, served until 11:00 AM",
    items: [
      { name: "Sri Lankan Hoppers", description: "Traditional bowl-shaped pancakes with eggs, sambol, and coconut milk gravy", price: "Rs. 850", dietary: ["V option"] },
      { name: "Full English Breakfast", description: "Eggs, bacon, sausages, grilled tomatoes, mushrooms, baked beans, and toast", price: "Rs. 1,450" },
      { name: "Tropical Fruit Bowl", description: "Seasonal fresh fruits with Greek yogurt, honey, and house-made granola", price: "Rs. 750", dietary: ["V", "GF"] },
      { name: "Eggs Benedict", description: "Poached eggs on English muffin with smoked salmon and hollandaise sauce", price: "Rs. 1,250" },
      { name: "Fresh Pastry Selection", description: "Croissants, pain au chocolat, and Danish pastries with butter and preserves", price: "Rs. 650", dietary: ["V"] },
    ],
  },
  {
    id: "sri-lankan",
    name: "Sri Lankan Specialties",
    description: "Authentic flavors from our island paradise, crafted with traditional recipes",
    items: [
      { name: "Prawn Curry", description: "Fresh prawns in rich coconut gravy with aromatic spices, served with basmati rice", price: "Rs. 2,450" },
      { name: "Lamb Kottu Roti", description: "Shredded roti stir-fried with tender lamb, vegetables, and spices", price: "Rs. 1,850" },
      { name: "Fish Ambul Thiyal", description: "Traditional sour fish curry with goraka and spices, a southern delicacy", price: "Rs. 1,650", dietary: ["GF"] },
      { name: "Rice & Curry Feast", description: "Selection of curries, sambols, papadum, and steamed rice", price: "Rs. 1,450", dietary: ["V option", "GF"] },
      { name: "Crab Curry", description: "Fresh lagoon crab in fiery coconut curry, seasonal availability", price: "Rs. 3,250" },
      { name: "Vegetable Lamprais", description: "Dutch-influenced rice and curry baked in banana leaf", price: "Rs. 1,350", dietary: ["V"] },
    ],
  },
  {
    id: "international",
    name: "International Cuisine",
    description: "Global flavors crafted with the finest local ingredients",
    items: [
      { name: "Grilled Sea Bass", description: "Fresh catch with herb butter, roasted vegetables, and lemon caper sauce", price: "Rs. 2,850", dietary: ["GF"] },
      { name: "Beef Tenderloin", description: "Prime cut with truffle mash, seasonal vegetables, and red wine jus", price: "Rs. 3,450", dietary: ["GF"] },
      { name: "Pasta Primavera", description: "Fresh pasta with seasonal vegetables in garlic olive oil or cream sauce", price: "Rs. 1,450", dietary: ["V"] },
      { name: "Gourmet Chicken Burger", description: "Grilled chicken breast, avocado, bacon, and chipotle aioli on brioche", price: "Rs. 1,350" },
      { name: "Mediterranean Salad", description: "Mixed greens, feta, olives, cherry tomatoes, and herb vinaigrette", price: "Rs. 950", dietary: ["V", "GF"] },
      { name: "Seafood Platter", description: "Grilled prawns, calamari, fish fillet, and crab cakes with dipping sauces", price: "Rs. 4,250" },
    ],
  },
  {
    id: "desserts",
    name: "Desserts",
    description: "Sweet endings to complete your dining experience",
    items: [
      { name: "Wattalappam", description: "Traditional Sri Lankan coconut custard with jaggery and cardamom", price: "Rs. 550", dietary: ["V", "GF"] },
      { name: "Chocolate Fondant", description: "Warm chocolate cake with molten center, served with vanilla ice cream", price: "Rs. 750", dietary: ["V"] },
      { name: "Tropical Fruit Crumble", description: "Seasonal fruits with oat crumble and coconut cream", price: "Rs. 650", dietary: ["V"] },
      { name: "Ceylon Tea Panna Cotta", description: "Creamy panna cotta infused with premium Ceylon tea", price: "Rs. 600", dietary: ["V", "GF"] },
    ],
  },
  {
    id: "beverages",
    name: "Beverages",
    description: "Refreshing drinks, specialty coffees, and craft cocktails",
    items: [
      { name: "Fresh Tropical Juices", description: "Papaya, mango, watermelon, or mixed fruit", price: "Rs. 450" },
      { name: "King Coconut", description: "Fresh young coconut, nature's perfect refreshment", price: "Rs. 350" },
      { name: "Ceylon Tea Selection", description: "Premium single-estate teas from Sri Lanka's finest gardens", price: "Rs. 400" },
      { name: "Espresso & Coffee", description: "Locally roasted beans, available as espresso, latte, or cappuccino", price: "Rs. 450" },
      { name: "Signature Cocktails", description: "House-crafted cocktails featuring local spirits and tropical flavors", price: "Rs. 950" },
      { name: "Fine Wines", description: "Curated selection of international wines by glass or bottle", price: "from Rs. 850" },
    ],
  },
];

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu | Church Street Gourmet - Galle Fort Restaurant</title>
        <meta
          name="description"
          content="Explore our diverse menu featuring authentic Sri Lankan cuisine and international dishes at Church Street Gourmet in Galle Fort."
        />
      </Helmet>
      <Layout>
        <PageHeader
          title="Our Menu"
          subtitle="A celebration of flavors, from traditional Sri Lankan delicacies to international favorites"
          backgroundImage={food1}
        />

        {/* Menu Navigation */}
        <nav className="sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
              {menuData.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="px-4 py-2 text-sm tracking-widest uppercase font-sans text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-sm transition-colors whitespace-nowrap"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Dietary Legend */}
        <section className="py-8 bg-card border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-medium">V</span>
                Vegetarian
              </span>
              <span className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-medium">GF</span>
                Gluten Free
              </span>
              <span className="text-muted-foreground/60">Please inform your server of any food allergies</span>
            </div>
          </div>
        </section>

        {/* Menu Sections */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            {menuData.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                id={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-20 scroll-mt-32"
              >
                <div className="text-center mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-light tracking-wide text-foreground mb-3">
                    {category.name}
                  </h2>
                  <p className="text-muted-foreground max-w-xl mx-auto">
                    {category.description}
                  </p>
                  <div className="section-divider mt-6" />
                </div>

                <div className="space-y-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: itemIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex justify-between items-start gap-4 pb-6 border-b border-border/50"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-serif text-xl text-foreground">
                            {item.name}
                          </h3>
                          {item.dietary && (
                            <div className="flex gap-1">
                              {item.dietary.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-serif text-lg text-primary whitespace-nowrap">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Menu;
