import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import MenuPreview from "@/components/sections/MenuPreview";
import GalleryPreview from "@/components/sections/GalleryPreview";
import ReservationCTA from "@/components/sections/ReservationCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Church Street Gourmet | Fine Dining in Galle Fort, Sri Lanka</title>
        <meta
          name="description"
          content="Experience exceptional dining at Church Street Gourmet in the historic Galle Fort. Authentic Sri Lankan cuisine and international flavors in a stunning colonial heritage setting."
        />
        <meta name="keywords" content="Galle Fort restaurant, Sri Lankan cuisine, fine dining Galle, Church Street Gourmet, heritage dining" />
        <link rel="canonical" href="https://churchstreetgourmet.com" />
      </Helmet>
      <Layout>
        <HeroSection />
        <AboutPreview />
        <MenuPreview />
        <GalleryPreview />
        <ReservationCTA />
      </Layout>
    </>
  );
};

export default Index;
