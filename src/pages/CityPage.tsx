import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { cityData } from "@/data/cityData";
import Header from "@/components/Header";
import CityHero from "@/components/CityHero";
import BookingFunnel from "@/components/BookingFunnel";
import BentoFeatures from "@/components/BentoFeatures";
import LocalSEOBlock from "@/components/LocalSEOBlock";
import GalleryInfo from "@/components/GalleryInfo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const CityPage = () => {
  const { city } = useParams<{ city: string }>();
  const data = city ? cityData[city] : undefined;

  useEffect(() => {
    if (data) {
      document.title = data.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", data.metaDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = data.metaDescription;
        document.head.appendChild(meta);
      }
    }
    window.scrollTo(0, 0);
  }, [data]);

  if (!data) return <Navigate to="/" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CityHero city={data} />
        <BookingFunnel />
        <BentoFeatures />
        <LocalSEOBlock city={data} />
        <GalleryInfo />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default CityPage;
