import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingFunnel from "@/components/BookingFunnel";
import BentoFeatures from "@/components/BentoFeatures";
import SocialProof from "@/components/SocialProof";
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
        <SocialProof />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default Index;
