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
    if (!data) return;

    document.title = data.metaTitle;

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

    setMeta("description", data.metaDescription);
    setProp("og:title", data.metaTitle);
    setProp("og:description", data.metaDescription);

    // Canonical: prefer /fotobox/:city URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://feststube.de/fotobox/${data.slug}`;

    // JSON-LD Service schema
    const ldJson = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Fotobox mieten ${data.name}`,
      description: data.metaDescription,
      provider: {
        "@type": "LocalBusiness",
        name: "Feststube",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Klingenstraße 6",
          addressLocality: "Denkendorf",
          postalCode: "73770",
          addressCountry: "DE",
        },
        telephone: "+4917612345678",
        email: "info@feststube.de",
      },
      areaServed: data.name,
      serviceType: "Fotobox mieten",
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "249",
      },
    };

    let script = document.getElementById("ld-json-fotobox-city");
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json-fotobox-city";
      (script as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ldJson);

    window.scrollTo(0, 0);

    return () => {
      document.getElementById("ld-json-fotobox-city")?.remove();
    };
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
