import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Speaker,
  Lightbulb,
  Mic,
  Monitor,
  CheckCircle,
  ShieldCheck,
  Star,
  Phone,
  Zap,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


/* ─── Data ─────────────────────────────────────────────── */

const services = [
  {
    icon: Speaker,
    name: "Beschallungsanlagen",
    desc: "Von kompakten PA-Systemen für 50 Gäste bis hin zu leistungsstarken Line-Arrays für Großveranstaltungen mit mehreren hundert Personen.",
    features: ["Subwoofer inklusive", "Drahtlose Übertragung", "Profi-Mischpult"],
    wide: true,
  },
  {
    icon: Lightbulb,
    name: "Licht & Atmosphäre",
    desc: "Stimmungsvolle Beleuchtungskonzepte mit LED-Scheinwerfern, Moving Heads, Lasern und Uplights.",
    features: ["DMX-Steuerung", "RGB-Farbwahl", "Effektgeräte"],
    wide: false,
  },
  {
    icon: Mic,
    name: "Mikrofone & Sprache",
    desc: "Kabellose Headsets, Handmikrofone und Ansteckmikrofone für Reden, Moderationen und Live-Musik.",
    features: ["Diversity-Empfänger", "Feedback-Unterdrückung", "bis zu 8 Kanäle"],
    wide: false,
  },
  {
    icon: Monitor,
    name: "Bild & Präsentation",
    desc: "Beamer, LED-Wände und Monitore für Präsentationen, Diashows und Live-Feeds.",
    features: ["Full-HD & 4K", "Große Leinwände", "HDMI & Wireless"],
    wide: true,
  },
];

const packages = [
  {
    name: "Starter",
    ideal: "bis 50 Gäste",
    items: ["PA-Aktivbox (2×)", "Bluetooth-Mischpult", "2× Funkmikrofon", "Grundbeleuchtung"],
  },
  {
    name: "Classic",
    ideal: "bis 120 Gäste",
    items: [
      "PA-System mit Subwoofer",
      "Profi-Mischpult 12-Kanal",
      "4× Funkmikrofon",
      "Moving Heads (4×)",
      "LED-Uplights (8×)",
    ],
  },
  {
    name: "Premium",
    ideal: "bis 300 Gäste",
    items: [
      "Line-Array-System",
      "Digital-Mischpult 24-Kanal",
      "8× Funk-Equipment",
      "Vollständiges Lichtset",
      "Bühnenbeleuchtung",
      "Beamer & Leinwand",
    ],
  },
];

const faqs = [
  {
    q: "Ist ein Techniker vor Ort dabei?",
    a: "Ja – unser Techniker liefert die Anlage, baut alles auf, nimmt den Soundcheck vor und steht während der Veranstaltung auf Wunsch bereit. So läuft alles reibungslos.",
  },
  {
    q: "Kann ich die Technik auch nur mieten ohne Techniker?",
    a: "Grundsätzlich ja. Für kleinere Systeme (z. B. das Starter-Paket) bieten wir auch reinen Equipment-Verleih an. Wir führen vorher eine kurze Einweisung durch, damit du sicher bist.",
  },
  {
    q: "Welche Stromversorgung wird benötigt?",
    a: "Für das Starter- und Classic-Paket reichen normale 230V-Schuko-Steckdosen. Das Premium-Paket erfordert ggf. einen 32A-CEE-Anschluss oder ein Aggregat – wir klären das bei der Planung.",
  },
  {
    q: "Funktioniert die Technik auch in Zelten oder im Freien?",
    a: "Ja. Unsere Geräte sind für den Outdooreinsatz geeignet. Bei Regen sorgen wir mit Abdeckungen und Schutzgehäusen für den Schutz der Anlage. Optimal kombinierbar mit unserer Zeltvermietung.",
  },
  {
    q: "Wie früh muss ich buchen?",
    a: "Für Wochenenden in der Hauptsaison empfehlen wir 3–4 Wochen Vorlauf. Kurzfristige Anfragen sind aber immer willkommen – ruf uns einfach an.",
  },
];

const steps = [
  {
    num: "01",
    title: "Beratung & Konzept",
    desc: "Wir besprechen dein Event, den Veranstaltungsort und deine Vorstellungen. Du bekommst ein maßgeschneidertes Technik-Konzept.",
  },
  {
    num: "02",
    title: "Angebot & Buchung",
    desc: "Transparentes Festpreisangebot ohne versteckte Kosten. Buchung formlos per E-Mail oder Telefon.",
  },
  {
    num: "03",
    title: "Aufbau & Soundcheck",
    desc: "Unser Techniker baut rechtzeitig auf, macht den Soundcheck und kalibriert Licht und Ton.",
  },
  {
    num: "04",
    title: "Event & Abbau",
    desc: "Genieß dein Event. Nach der Veranstaltung kümmern wir uns um den kompletten Abbau.",
  },
];

/* ─── Component ─────────────────────────────────────────── */

const Veranstaltungstechnik = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title =
      "Veranstaltungstechnik mieten Esslingen | Ton, Licht & Technik | Feststube";

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

    setMeta(
      "description",
      "Veranstaltungstechnik mieten Esslingen ✔ PA-Anlage, Licht & Mikrofone ✔ inkl. Techniker vor Ort ✔ für Hochzeit, Firmenfeier & Geburtstag. Jetzt Angebot anfragen!"
    );
    setMeta(
      "keywords",
      "Veranstaltungstechnik mieten Esslingen, PA Anlage mieten Esslingen, Ton Licht mieten Stuttgart, Mikrofon mieten Esslingen, Bühnentechnik mieten, Lautsprecher mieten Esslingen, Feststube Veranstaltungstechnik, DJ Technik mieten"
    );
    setMeta("robots", "index, follow");
    setMeta("author", "Feststube Esslingen");
    setMeta("geo.region", "DE-BW");
    setMeta("geo.placename", "Esslingen am Neckar");
    setMeta("geo.position", "48.7394;9.3091");

    setProp("og:title", "Veranstaltungstechnik Esslingen | Feststube");
    setProp(
      "og:description",
      "PA-Anlage, Licht & Mikrofone mieten ✔ inkl. Techniker ✔ Hochzeit, Firmenfeier & mehr. Jetzt anfragen!"
    );
    setProp("og:type", "website");
    setProp("og:locale", "de_DE");
    setProp("og:site_name", "Feststube – Veranstaltungstechnik Esslingen");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Veranstaltungstechnik Esslingen | Feststube");
    setMeta(
      "twitter:description",
      "PA-Anlage, Licht & Mikrofone mieten inkl. Techniker in Esslingen. Jetzt unverbindliches Angebot anfragen!"
    );

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://feststube.de/veranstaltungstechnik"
    );

    // JSON-LD
    const existingLd = document.getElementById("ld-json");
    if (existingLd) existingLd.remove();

    const script = document.createElement("script");
    script.id = "ld-json";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Veranstaltungstechnik mieten Esslingen",
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://feststube.de/#business",
            "name": "Feststube – Veranstaltungstechnik Esslingen",
            "telephone": "+4917612345678",
            "email": "info@feststube.de",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Esslingen am Neckar",
              "addressRegion": "Baden-Württemberg",
              "postalCode": "73728",
              "addressCountry": "DE",
            },
          },
          "description":
            "Professionelle Veranstaltungstechnik mieten in Esslingen: PA-Anlage, Lichtanlagen und Mikrofone inkl. Aufbau und optionalem Techniker.",
          "areaServed": [
            { "@type": "City", "name": "Esslingen am Neckar" },
            { "@type": "City", "name": "Stuttgart" },
            { "@type": "City", "name": "Göppingen" },
          ],
          "serviceType": "Veranstaltungstechnik",
          "url": "https://feststube.de/veranstaltungstechnik",
        },
        {
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.a,
            },
          })),
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      document.getElementById("ld-json")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* ─── Hero ─────────────────────────────────────── */}
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 bg-background overflow-hidden">
          <motion.div
            aria-hidden
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
          />

          <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6"
              >
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </span>
                5,0 · Professionell & zuverlässig
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4"
              >
                Veranstaltungs&shy;technik mieten in{" "}
                <span className="text-primary">Esslingen</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8"
              >
                PA-Anlage, Licht & Mikrofone für Hochzeiten, Firmenfeiern und mehr –
                inkl. Aufbau und Techniker vor Ort.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center md:items-start gap-4"
              >
                <a href="mailto:info@feststube.de">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-primary/30"
                  >
                    Angebot anfragen
                  </Button>
                </a>
                <a href="tel:+4917612345678">
                  <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg font-bold">
                    <Phone className="w-5 h-5 mr-2" />
                    Anrufen
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start mt-8 text-sm text-muted-foreground"
              >
                {["Techniker vor Ort", "Aufbau & Abbau inkl.", "3 Pakete", "Festpreis"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="absolute -bottom-4 -left-4 z-10 bg-background rounded-2xl border border-border shadow-xl px-5 py-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Speaker className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Profi-Equipment</p>
                    <p className="text-sm font-bold text-foreground">Yamaha · JBL · Shure</p>
                  </div>
                </motion.div>
                <img
                  src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
                  alt="Professionelle Veranstaltungstechnik – PA-Anlage und Licht bei einem Event"
                  className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/4]"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── Leistungen / Bento ───────────────────────── */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="container max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-3"
            >
              Unsere Leistungen
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
            >
              Alles, was dein Event klanglich und visuell perfekt macht.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((s, i) => (
                <motion.article
                  key={s.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className={`group rounded-2xl border border-border/50 bg-card p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-default${
                    s.wide ? " md:col-span-2" : ""
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {s.desc}
                  </p>
                  <ul className="flex flex-col gap-1.5 mt-auto">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Pakete ───────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-3"
            >
              Technik-Pakete
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
            >
              Fertige Pakete für jeden Bedarf – oder wir stellen individuell zusammen.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className={`rounded-2xl border p-7 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300 ${
                    i === 1
                      ? "border-primary/40 bg-primary/5 relative"
                      : "border-border/50 bg-card"
                  }`}
                >
                  {i === 1 && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold rounded-full px-4 py-1">
                      Beliebteste Wahl
                    </span>
                  )}
                  <div>
                    <h3 className="text-xl font-extrabold text-foreground mb-1">
                      {pkg.name}
                    </h3>
                    <span className="text-sm text-primary font-semibold">{pkg.ideal}</span>
                  </div>
                  <ul className="flex flex-col gap-2 flex-1">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="mailto:info@feststube.de" className="mt-auto">
                    <Button
                      className={`w-full rounded-full font-semibold ${
                        i === 1
                          ? "bg-primary text-primary-foreground hover:bg-primary/80"
                          : "variant-outline"
                      }`}
                      variant={i === 1 ? "default" : "outline"}
                    >
                      Angebot anfragen
                    </Button>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Warum wir ────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="container max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12"
            >
              Warum Feststube Veranstaltungstechnik?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: Zap,
                  title: "Sofort einsatzbereit",
                  desc: "Alle Geräte sind geprüft, geladen und konfiguriert. Kein langes Einrichten – wir liefern betriebsbereit.",
                },
                {
                  icon: Settings,
                  title: "Professioneller Service",
                  desc: "Unser erfahrener Techniker übernimmt Aufbau, Soundcheck und steht während der Veranstaltung bereit.",
                },
                {
                  icon: ShieldCheck,
                  title: "Geprüfte Markengeräte",
                  desc: "Wir setzen ausschließlich auf Markengeräte (Yamaha, JBL, Shure u.a.) für zuverlässigen Klang.",
                },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl border border-border/50 bg-card p-7 flex flex-col hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Ablauf ───────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12"
            >
              So einfach geht's
            </motion.h2>
            <div className="flex flex-col gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 bg-card rounded-2xl border border-border/50 p-6"
                >
                  <span className="text-3xl font-black text-primary/20 leading-none shrink-0 w-10 text-right">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-muted/50">
          <div className="container max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-12"
            >
              Häufige Fragen
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`}>
                    <AccordionTrigger className="text-left text-foreground font-semibold">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* ─── CTA Banner ───────────────────────────────── */}
        <section className="py-20 md:py-28 bg-primary/5 border-y border-primary/10">
          <div className="container max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-foreground mb-4"
            >
              Perfekter Klang & perfektes Licht für dein Event
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8 max-w-xl mx-auto"
            >
              Schreib uns oder ruf an – innerhalb von 24 Stunden hast du ein
              unverbindliches Angebot für deine Veranstaltungstechnik in Esslingen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a href="mailto:info@feststube.de">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-primary/30"
                >
                  Angebot per E-Mail
                </Button>
              </a>
              <a href="tel:+4917612345678">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-10 py-6 text-lg font-bold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Direkt anrufen
                </Button>
              </a>
            </motion.div>
            <p className="mt-6 text-sm text-muted-foreground">
              Kombiniere Technik mit unserem{" "}
              <Link to="/zeltvermietung" className="text-primary hover:underline font-medium">
                Zeltvermietung
              </Link>
              -Service oder der{" "}
              <Link to="/" className="text-primary hover:underline font-medium">
                Fotobox
              </Link>{" "}
              – für ein rundes Event-Paket aus einer Hand.
            </p>
          </div>
        </section>

        {/* Regional city links – SEO */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-3">
              Veranstaltungstechnik im Umkreis von Denkendorf
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Wir liefern professionelle Event-Technik in einem Radius von 50 km – zuverlässig in alle Städte und Gemeinden rund um Esslingen.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { name: "Stuttgart", slug: "stuttgart" },
                { name: "Göppingen", slug: "goeppingen" },
                { name: "Kirchheim unter Teck", slug: "kirchheim" },
                { name: "Nürtingen", slug: "nuertingen" },
                { name: "Ostfildern", slug: "ostfildern" },
                { name: "Filderstadt", slug: "filderstadt" },
                { name: "Leinfelden-Echterdingen", slug: "leinfelden-echterdingen" },
                { name: "Plochingen", slug: "plochingen" },
                { name: "Wendlingen", slug: "wendlingen" },
                { name: "Wernau", slug: "wernau" },
                { name: "Köngen", slug: "koegen" },
                { name: "Denkendorf", slug: "denkendorf" },
                { name: "Waiblingen", slug: "waiblingen" },
                { name: "Schorndorf", slug: "schorndorf" },
                { name: "Sindelfingen", slug: "sindelfingen" },
                { name: "Böblingen", slug: "boeblingen" },
                { name: "Reutlingen", slug: "reutlingen" },
                { name: "Metzingen", slug: "metzingen" },
                { name: "Tübingen", slug: "tuebingen" },
                { name: "Geislingen", slug: "geislingen" },
                { name: "Ludwigsburg", slug: "ludwigsburg" },
                { name: "Heilbronn", slug: "heilbronn" },
                { name: "Backnang", slug: "backnang" },
                { name: "Schwäbisch Gmünd", slug: "schwaebisch-gmuend" },
              ].map((c) => (
                <Link
                  key={c.slug}
                  to={`/veranstaltungstechnik/${c.slug}`}
                  className="px-4 py-2 rounded-full border border-border/60 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Veranstaltungstechnik {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
    </div>
  );
};

export default Veranstaltungstechnik;
