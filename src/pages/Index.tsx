import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingFunnel from "@/components/BookingFunnel";
import BentoFeatures from "@/components/BentoFeatures";
import GalleryInfo from "@/components/GalleryInfo";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BookingFunnel />
        <BentoFeatures />
        <GalleryInfo />
        <SocialProof />
        <FAQ />
        <InstagramFeed />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
