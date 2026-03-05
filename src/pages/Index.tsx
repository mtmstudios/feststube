import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import KeyFacts from "@/components/KeyFacts";
import BookingFunnel from "@/components/BookingFunnel";
import BentoFeatures from "@/components/BentoFeatures";
import ProcessSteps from "@/components/ProcessSteps";
import GalleryInfo from "@/components/GalleryInfo";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import InstagramFeed from "@/components/InstagramFeed";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  useEffect(() => {
    document.title = "Fotobox mieten Esslingen | Premium Qualität ab 249€ | Feststube";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "📸 Miete die perfekte Fotobox für deine Hochzeit oder Feier in Esslingen! ✔️ Studio-Qualität ✔️ Sofort-Druck ✔️ Kostenloser Aufbau. Jetzt Termin prüfen!");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <KeyFacts />
        <BookingFunnel />
        <BentoFeatures />
        <ProcessSteps />
        <GalleryInfo />
        <SocialProof />
        <FAQ />
        <InstagramFeed />
        <ServiceAreas />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
