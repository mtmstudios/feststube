import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { veranstaltungstechnikCityData } from "@/data/veranstaltungstechnikCityData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import {
  MapPin,
  Star,
  CheckCircle,
  Music,
  Lightbulb,
  Mic2,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Music,
    title: "PA-Anlagen & Sound",
    desc: "Professionelle Beschallungsanlagen für Indoor und Outdoor – von kleiner Lautsprecher-Box bis zur großen PA-Anlage.",
  },
  {
    icon: Lightbulb,
    title: "Licht & LED",
    desc: "Stimmungsvolles LED-Ambiente, Moving Heads, Partylichter und Uplighting für jede Eventgröße.",
  },
  {
    icon: Mic2,
    title: "Komplettservice",
    desc: "Aufbau, Soundcheck, technische Betreuung und Abbau – wir kümmern uns um die gesamte Technik.",
  },
];

const faq = [
  {
    q: "Welche Technik liefert ihr für Events?",
    a: "Wir bieten PA-Anlagen (Lautsprecher, Subwoofer, Mixer), LED-Beleuchtung, Mikrofone, DJ-Equipment, Beamer und Leinwand sowie optionale Bühnentechnik.",
  },
  {
    q: "Stellt ihr auch Techniker für den Abend?",
    a: "Ja! Bei unserem Premium-Paket ist ein erfahrener Techniker dabei, der die komplette Beschallung und Beleuchtung für euch betreut.",
  },
  {
    q: "Was kostet die Veranstaltungstechnik?",
    a: "Unsere Pakete starten ab 399€ für kleinere Events. Für individuelle Anforderungen erstellen wir gerne ein maßgeschneidertes Angebot.",
  },
  {
    q: "Könnt ihr auch kurzfristig liefern?",
    a: "Wir versuchen auch kurzfristige Anfragen zu ermöglichen – schreibt uns einfach an und wir schauen, was machbar ist.",
  },
  {
    q: "Welche Veranstaltungsgrößen könnt ihr abdecken?",
    a: "Von der Gartenparty mit 20 Personen bis zur Firmenfeier mit 500+ Gästen – wir skalieren die Technik nach euren Anforderungen.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-4 flex items-center justify-between gap-4 text-sm font-semibold text-foreground hover:text-primary transition-colors"
      >
        {q}
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>
      )}
    </div>
  );
};

const VeranstaltungstechnikCityPage = () => {
  const { city } = useParams<{ city: string }>();
  const data = city ? veranstaltungstechnikCityData[city] : undefined;

  useEffect(() => {
    if (!data) return;

    document.title = data.metaTitle;

    const setMeta = (name: string, content: string, prop?: boolean) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", data.metaDescription);
    setMeta("og:title", data.metaTitle, true);
    setMeta("og:description", data.metaDescription, true);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://feststube.de/veranstaltungstechnik/${data.slug}`;

    const ldJson = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Veranstaltungstechnik ${data.name}`,
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
      serviceType: "Veranstaltungstechnik",
    };

    let script = document.getElementById("ld-json-tech-city");
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json-tech-city";
      (script as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ldJson);

    window.scrollTo(0, 0);

    return () => {
      document.getElementById("ld-json-tech-city")?.remove();
    };
  }, [data]);

  if (!data) return <Navigate to="/veranstaltungstechnik" replace />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-20 md:pt-40 md:pb-32 bg-background">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                <MapPin className="w-3.5 h-3.5" />
                Veranstaltungstechnik · {data.name}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
                {data.heroH1}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
                {data.heroSubtext}
              </p>
              <a href="mailto:info@feststube.de">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-primary/25"
                >
                  Jetzt Angebot anfragen
                </Button>
              </a>
              <p className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Transparente Pakete · Inkl. Aufbau & Betreuung
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 flex flex-col gap-6">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-4">
                    <div className="bg-primary/10 rounded-xl p-2.5 shrink-0">
                      <f.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{f.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-14 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { label: "Pakete", value: "3" },
                { label: "Events betreut", value: "150+" },
                { label: "Technik-Profis", value: "4" },
                { label: "Servicegebiet", value: "50 km" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local SEO Block */}
        <section className="py-20 md:py-28">
          <div className="container max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Lokal für {data.name}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                {data.seoHeadline}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-10">
                {data.seoBody}
              </p>
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-muted/50 rounded-2xl border border-border/50 p-6 md:p-8"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4 italic">
                „{data.testimonialText}"
              </p>
              <footer className="text-sm font-semibold text-muted-foreground">
                – {data.testimonialAuthor}
              </footer>
            </motion.blockquote>
          </div>
        </section>

        {/* What's included */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10">
              Was ist bei jeder Buchung dabei?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Professionelle PA-Anlage",
                "LED-Beleuchtungssystem",
                "Mikrofone & Kabel",
                "Aufbau und Abbau inklusive",
                "Soundcheck vor dem Event",
                "Technischer Support auf Wunsch",
                "DJ-Equipment optional buchbar",
                "Faire Festpreise ohne Überraschungen",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28">
          <div className="container max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
              Häufige Fragen zur Veranstaltungstechnik in {data.name}
            </h2>
            <div className="bg-muted/30 rounded-2xl px-6">
              {faq.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary/5 border-y border-border/50">
          <div className="container max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Veranstaltungstechnik in {data.name} gesucht?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schreibt uns eine kurze Anfrage – wir melden uns innerhalb von 24 Stunden mit einem
              individuellen Angebot für euer Event.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@feststube.de">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 font-bold shadow-lg shadow-primary/25"
                >
                  Angebot anfordern
                </Button>
              </a>
              <Link to="/veranstaltungstechnik">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 font-semibold"
                >
                  Mehr zur Veranstaltungstechnik
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
};

export default VeranstaltungstechnikCityPage;
