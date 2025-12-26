import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import PageHeader from "@/components/sections/PageHeader";
import outsideImage from "@/assets/outside-1.jpg";
import insideImage from "@/assets/inside-1.jpg";
import inside5 from "@/assets/inside-5.jpg";
import food1 from "@/assets/food-1.jpg";

const values = [
  {
    title: "Heritage",
    description: "We celebrate the rich history of Galle Fort, preserving its colonial architecture while creating new memories.",
  },
  {
    title: "Quality",
    description: "Only the finest local ingredients make it to our kitchen, sourced from trusted farmers and fishermen.",
  },
  {
    title: "Hospitality",
    description: "Every guest is family. We take pride in offering warm, attentive service that makes you feel at home.",
  },
  {
    title: "Sustainability",
    description: "We're committed to eco-friendly practices, supporting local communities and minimizing our environmental footprint.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Church Street Gourmet - Heritage Dining in Galle Fort</title>
        <meta
          name="description"
          content="Learn about Church Street Gourmet's story, our commitment to heritage, quality cuisine, and the historic colonial setting in Galle Fort, Sri Lanka."
        />
      </Helmet>
      <Layout>
        <PageHeader
          title="About Us"
          subtitle="Where heritage meets culinary excellence in the heart of Galle Fort"
          backgroundImage={outsideImage}
        />

        {/* Our Story */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
                  Our Story
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
                  A Culinary Journey<br />Through Time
                </h2>
                <div className="section-divider !mx-0 mb-8" />
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Nestled within the ancient walls of Galle Fort, a UNESCO World Heritage Site, 
                    Church Street Gourmet occupies a beautifully restored Dutch colonial building 
                    that dates back to the 18th century. Our restaurant is a testament to the 
                    enduring legacy of this historic port city.
                  </p>
                  <p>
                    What began as a passion project has evolved into a beloved dining destination 
                    for both locals and travelers seeking an authentic experience. Our founders 
                    envisioned a space where the charm of old Ceylon meets contemporary culinary 
                    excellence.
                  </p>
                  <p>
                    Today, we continue to honor that vision by serving dishes that celebrate 
                    Sri Lanka's diverse culinary heritage while embracing global influences. 
                    Every meal at Church Street Gourmet is an invitation to taste history.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src={insideImage}
                  alt="Historic interior of Church Street Gourmet"
                  className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-sm hidden md:block">
                  <span className="font-serif text-4xl text-primary-foreground">Est.</span>
                  <span className="block font-serif text-5xl text-primary-foreground">2018</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Setting */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <img
                  src={inside5}
                  alt="Lush courtyard garden at Church Street Gourmet"
                  className="w-full h-[500px] object-cover rounded-sm shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
                  The Setting
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
                  Colonial Elegance<br />Reimagined
                </h2>
                <div className="section-divider !mx-0 mb-8" />
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Our venue features soaring colonial arches, original wooden shutters in 
                    weathered teal, and an enchanting inner courtyard filled with tropical 
                    greenery. The interplay of natural light and historic architecture creates 
                    an atmosphere that is both intimate and grand.
                  </p>
                  <p>
                    Each dining space offers a unique experience – from the breezy veranda 
                    perfect for morning coffee to the atmospheric interior ideal for romantic 
                    dinners. Antique furnishings, local artwork, and carefully curated décor 
                    transport you to a bygone era.
                  </p>
                  <p>
                    Whether you're seeking a quiet table for two or planning a celebration, 
                    our versatile spaces accommodate every occasion with grace and style.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
                What We Believe
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
                Our Values
              </h2>
              <div className="section-divider" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-8"
                >
                  <h3 className="font-serif text-2xl text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Cuisine */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${food1})` }}
          />
          <div className="absolute inset-0 bg-background/90" />
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-primary text-sm tracking-[0.3em] uppercase font-sans mb-4 block">
                The Cuisine
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light tracking-wide text-foreground mb-6">
                A Feast for the Senses
              </h2>
              <div className="section-divider mb-10" />
              <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Our kitchen is led by passionate chefs who draw inspiration from Sri Lanka's 
                  rich culinary tapestry while incorporating techniques and flavors from around 
                  the world. We source the freshest seafood from local fishermen, aromatic spices 
                  from highland estates, and organic produce from nearby farms.
                </p>
                <p>
                  From the fragrant complexity of our signature curries to the elegant simplicity 
                  of our grilled seafood, every dish is crafted with care and presented with artistry. 
                  We believe that great food tells a story – and at Church Street Gourmet, 
                  every plate narrates a tale of tradition, innovation, and love.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
