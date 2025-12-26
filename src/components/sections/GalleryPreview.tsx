import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import inside1 from "@/assets/inside-3.jpg";
import inside2 from "@/assets/inside-4.jpg";
import inside3 from "@/assets/inside-5.jpg";
import food2 from "@/assets/food-2.jpg";

const images = [
  { src: inside1, alt: "Rustic dining area with vintage wheel decoration" },
  { src: food2, alt: "Fresh wrap with colorful vegetables" },
  { src: inside2, alt: "Outdoor dining under colonial arches" },
  { src: inside3, alt: "Lush courtyard garden view" },
];

const GalleryPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
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
            Captured Moments
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
            Our Gallery
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-sm aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-foreground font-serif text-lg">View</span>
              </div>
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
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-primary hover:text-foreground transition-colors font-sans text-sm tracking-widest uppercase"
          >
            View Full Gallery
            <span className="text-lg">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
