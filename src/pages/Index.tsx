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
import ServicesTeaser from "@/components/ServicesTeaser";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import AccessibilityWidget from "@/components/AccessibilityWidget";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  useEffect(() => {
    // Primary title – keyword first for SEO
    document.title = "Fotobox mieten Esslingen | ab 249 € | Feststube – Foto Box Verleih";

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("property", prop);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Core SEO meta tags
    setMeta("description", "Fotobox mieten Esslingen ✔ ab 249 € ✔ kostenloser Aufbau ✔ DSLR Studio-Qualität ✔ Sofort-Druck. Perfekt für Hochzeit, Geburtstag & Firmenfeier. Jetzt Termin prüfen!");
    setMeta("keywords", "Fotobox mieten Esslingen, Foto Box Verleih Esslingen, Fotobox Hochzeit Esslingen, Photobooth mieten Esslingen, Fotobox Geburtstag Esslingen, Fotobox Firmenfeier Esslingen, Fotobox Stuttgart, Fotobox Göppingen, Feststube Esslingen");
    setMeta("robots", "index, follow");
    setMeta("author", "Feststube Esslingen");

    // Geo meta tags (Local SEO)
    setMeta("geo.region", "DE-BW");
    setMeta("geo.placename", "Esslingen am Neckar");
    setMeta("geo.position", "48.7394;9.3091");
    setMeta("ICBM", "48.7394, 9.3091");

    // Open Graph
    setProp("og:title", "Fotobox mieten Esslingen | ab 249 € | Feststube");
    setProp("og:description", "Fotobox mieten in Esslingen ✔ ab 249 € ✔ kostenloser Aufbau ✔ DSLR Studio-Qualität. Jetzt Termin prüfen!");
    setProp("og:type", "website");
    setProp("og:locale", "de_DE");
    setProp("og:site_name", "Feststube – Fotobox Esslingen");

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Fotobox mieten Esslingen | ab 249 € | Feststube");
    setMeta("twitter:description", "Fotobox mieten in Esslingen ab 249 €. Kostenloser Aufbau, DSLR-Qualität, Sofort-Druck. Jetzt Termin sichern!");

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://feststube.de/");

    // JSON-LD Structured Data – LocalBusiness + Service
    const existingLd = document.getElementById("ld-json");
    if (existingLd) existingLd.remove();

    const script = document.createElement("script");
    script.id = "ld-json";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "LocalBusiness",
          "@id": "https://feststube.de/#business",
          "name": "Feststube – Fotobox Esslingen",
          "description": "Premium Fotobox mieten in Esslingen und Umgebung. DSLR-Qualität, Sofort-Druck, kostenloser Aufbau ab 249 €.",
          "url": "https://feststube.de",
          "telephone": "+4917612345678",
          "email": "info@feststube.de",
          "priceRange": "€€",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Esslingen am Neckar",
            "addressRegion": "Baden-Württemberg",
            "postalCode": "73728",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 48.7394,
            "longitude": 9.3091
          },
          "areaServed": [
            { "@type": "City", "name": "Esslingen am Neckar" },
            { "@type": "City", "name": "Stuttgart" },
            { "@type": "City", "name": "Göppingen" },
            { "@type": "City", "name": "Ulm" }
          ],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "08:00",
            "closes": "22:00"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          "sameAs": [
            "https://www.instagram.com/feststubestuttgart/"
          ]
        },
        {
          "@type": "Service",
          "name": "Fotobox mieten Esslingen",
          "provider": { "@id": "https://feststube.de/#business" },
          "areaServed": { "@type": "City", "name": "Esslingen am Neckar" },
          "offers": {
            "@type": "Offer",
            "priceCurrency": "EUR",
            "price": "249",
            "priceSpecification": {
              "@type": "PriceSpecification",
              "minPrice": "249",
              "priceCurrency": "EUR"
            }
          }
        }
      ]
    });
    document.head.appendChild(script);

    return () => {
      document.getElementById("ld-json")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
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
        <ServicesTeaser />
      </main>
      <Footer />
      <WhatsAppFAB />
      <AccessibilityWidget />
    </div>
  );
};

export default Index;
