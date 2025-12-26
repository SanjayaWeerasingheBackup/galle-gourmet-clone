import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import inside1 from "@/assets/inside-1.jpg";
import inside2 from "@/assets/inside-2.jpg";
import inside3 from "@/assets/inside-3.jpg";
import inside4 from "@/assets/inside-4.jpg";
import inside5 from "@/assets/inside-5.jpg";
import outside1 from "@/assets/outside-1.jpg";
import outside2 from "@/assets/outside-2.jpg";
import hero from "@/assets/hero.jpg";
import food1 from "@/assets/food-1.jpg";
import food2 from "@/assets/food-2.jpg";
import food3 from "@/assets/food-3.jpg";
import food4 from "@/assets/food-4.jpg";
import food5 from "@/assets/food-5.jpg";
import food6 from "@/assets/food-6.jpg";
import food7 from "@/assets/food-7.jpg";
import food8 from "@/assets/food-8.jpg";
import food9 from "@/assets/food-9.jpg";
import food10 from "@/assets/food-10.jpg";
import food11 from "@/assets/food-11.jpg";
import food12 from "@/assets/food-12.jpg";

const galleryImages = [
  { src: hero, alt: "Church Street Gourmet exterior with colonial arches", category: "Exterior" },
  { src: inside1, alt: "Courtyard dining area with lush greenery", category: "Interior" },
  { src: food1, alt: "Traditional Sri Lankan curry dishes", category: "Food" },
  { src: outside1, alt: "Evening ambiance under string lights", category: "Exterior" },
  { src: inside3, alt: "Rustic dining room with vintage decor", category: "Interior" },
  { src: food2, alt: "Fresh gourmet wrap with vegetables", category: "Food" },
  { src: inside4, alt: "Outdoor seating under colonial arches", category: "Interior" },
  { src: outside2, alt: "Street view of the restaurant", category: "Exterior" },
  { src: inside5, alt: "Tropical garden courtyard", category: "Interior" },
  { src: inside2, alt: "Main dining hall with antique wheel decoration", category: "Interior" },
  { src: food3, alt: "Fresh green smoothie with tropical vibes", category: "Food" },
  { src: food4, alt: "Roasted vegetables with aioli dip", category: "Food" },
  { src: food5, alt: "Seafood platter with grilled prawns and calamari", category: "Food" },
  { src: food6, alt: "Grilled chicken with rice and fresh salad", category: "Food" },
  { src: food7, alt: "Seared tuna steak with mango sauce", category: "Food" },
  { src: food8, alt: "Wraps and grilled fish on turquoise table", category: "Food" },
  { src: food9, alt: "Prawn curry with basmati rice", category: "Food" },
  { src: food10, alt: "Penne arrabiata with tacos", category: "Food" },
  { src: food11, alt: "Fresh juices and breakfast spread", category: "Food" },
  { src: food12, alt: "Prawn pasta with parmesan", category: "Food" },
];

const categories = ["All", "Interior", "Exterior", "Food"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery | Church Street Gourmet - Photos of Our Restaurant</title>
        <meta
          name="description"
          content="Browse photos of Church Street Gourmet's beautiful colonial interior, stunning exterior, and delicious cuisine in Galle Fort, Sri Lanka."
        />
      </Helmet>
      <Layout>
        <PageHeader
          title="Gallery"
          subtitle="Captured moments of heritage, ambiance, and culinary artistry"
          backgroundImage={inside1}
        />

        {/* Category Filter */}
        <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 justify-center flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm tracking-widest uppercase font-sans rounded-sm transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.src}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setSelectedImage(image)}
                    className="relative group cursor-pointer overflow-hidden rounded-sm aspect-[4/3]"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-foreground font-serif text-xl">View</span>
                        <p className="text-muted-foreground text-sm mt-2">{image.category}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
                <p className="text-foreground font-serif text-lg">{selectedImage.alt}</p>
                <p className="text-muted-foreground text-sm mt-1">{selectedImage.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Layout>
    </>
  );
};

export default Gallery;
