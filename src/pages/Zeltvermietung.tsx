import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Tent,
  CheckCircle,
  Truck,
  Users,
  Ruler,
  ShieldCheck,
  Star,
  Phone,
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

const tents = [
  {
    name: "Pagodenzelt 5 × 5 m",
    guests: "bis 30 Personen",
    desc: "Elegantes Pagodenzelt mit hochwertiger PVC-Plane und Stahlrahmen. Ideal für Gartenfeste, Jubiläen und kleine Hochzeiten.",
    features: ["Seitenwände optional", "Beleuchtung buchbar", "Windstabil bis 80 km/h"],
  },
  {
    name: "Partyzelt 6 × 12 m",
    guests: "bis 80 Personen",
    desc: "Geräumiges Partyzelt für mittlere Veranstaltungen. Hohe Firsthöhe sorgt für ein luftiges Raumgefühl.",
    features: ["Panorama-Seitenwände", "Estrichboden möglich", "Heizung buchbar"],
  },
  {
    name: "Eventzelt 10 × 20 m",
    guests: "bis 200 Personen",
    desc: "Repräsentatives Großraumzelt für Firmenevents, Hochzeiten und Stadtfeste. Komplett konfigurierbar.",
    features: ["Bodenbelag inklusive", "Stromanschluss intern", "Vollständig verkleidbar"],
  },
  {
    name: "Stretch-Zelt (individuell)",
    guests: "flexibel",
    desc: "Modernes Stretch-Zelt in verschiedenen Formen – perfekt für kreative Raumkonzepte im Außenbereich.",
    features: ["Wasserdicht", "Ganzjährig nutzbar", "Individuelle Formen"],
  },
];

const steps = [
  {
    num: "01",
    title: "Anfrage & Beratung",
    desc: "Schildere uns dein Event, die Gästeanzahl und den Veranstaltungsort. Wir empfehlen das passende Zelt.",
  },
  {
    num: "02",
    title: "Angebot & Buchung",
    desc: "Du erhältst ein transparentes Festpreisangebot ohne versteckte Kosten. Buchung per E-Mail oder Telefon.",
  },
  {
    num: "03",
    title: "Aufbau & Übergabe",
    desc: "Unser Team liefert das Zelt pünktlich, baut es professionell auf und erklärt alles Wichtige.",
  },
  {
    num: "04",
    title: "Feiern & Abbau",
    desc: "Genieß dein Event. Nach der Veranstaltung kümmern wir uns um den kompletten Abbau.",
  },
];

const faqs = [
  {
    q: "Wie weit im Voraus muss ich das Zelt buchen?",
    a: "Für Hauptsaison (Mai–September) empfehlen wir mindestens 4–6 Wochen im Voraus zu buchen. In der Nebensaison ist oft auch kurzfristig noch etwas möglich – ruf uns einfach an.",
  },
  {
    q: "Ist der Aufbau im Preis enthalten?",
    a: "Ja. Lieferung, professioneller Aufbau und Abbau sind im Mietpreis für den Bereich Esslingen, Stuttgart und Umgebung (bis ca. 50 km) inklusive. Bei größeren Entfernungen sprechen wir eine Anfahrtspauschale ab.",
  },
  {
    q: "Welche Untergrundvoraussetzungen gibt es?",
    a: "Die Zelte können auf Rasen, Schotter, Pflaster oder befestigten Flächen aufgestellt werden. Wir besprechen die genauen Bedingungen vorab und bringen das passende Verankerungsmaterial mit.",
  },
  {
    q: "Kann ich das Zelt auch im Winter mieten?",
    a: "Absolut. Unsere Zelte sind ganzjährig einsetzbar. Für Winterveranstaltungen bieten wir Zubehör wie Heizung und zusätzliche Seitenwände an, damit eure Gäste immer angenehm warm sitzen.",
  },
  {
    q: "Wie lange darf ich das Zelt behalten?",
    a: "Die Standardmiete beträgt bis zu 3 Tage (Aufbau, Event, Abbau). Für längere Veranstaltungen – z. B. mehrtägige Stadtfeste – bieten wir günstige Wochenpauschalen an.",
  },
];

/* ─── Component ─────────────────────────────────────────── */

const Zeltvermietung = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    document.title =
      "Zeltvermietung Esslingen | Partyzelt & Eventplanen mieten | Feststube";

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
      "Zeltvermietung Esslingen ✔ Pagodenzelt, Partyzelt & Eventplan mieten ✔ Aufbau inklusive ✔ bis 200 Gäste ✔ Hochzeit, Geburtstag & Firmenfeier. Jetzt Angebot anfragen!"
    );
    setMeta(
      "keywords",
      "Zeltvermietung Esslingen, Partyzelt mieten Esslingen, Pagodenzelt mieten, Eventplan Esslingen, Zelt mieten Stuttgart, Zelt mieten Göppingen, Hochzeitszelt mieten, Feststube Zeltvermietung"
    );
    setMeta("robots", "index, follow");
    setMeta("author", "Feststube Esslingen");
    setMeta("geo.region", "DE-BW");
    setMeta("geo.placename", "Esslingen am Neckar");
    setMeta("geo.position", "48.7394;9.3091");

    setProp("og:title", "Zeltvermietung Esslingen | Feststube");
    setProp(
      "og:description",
      "Pagodenzelt, Partyzelt & Eventplan mieten ✔ Aufbau inklusive ✔ bis 200 Gäste. Jetzt anfragen!"
    );
    setProp("og:type", "website");
    setProp("og:locale", "de_DE");
    setProp("og:site_name", "Feststube – Zeltvermietung Esslingen");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", "Zeltvermietung Esslingen | Feststube");
    setMeta(
      "twitter:description",
      "Zeltvermietung in Esslingen: Pagodenzelt, Partyzelt & Eventplan mieten inkl. Aufbau. Jetzt Angebot anfragen!"
    );

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://feststube.de/zeltvermietung");

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
          "name": "Zeltvermietung Esslingen",
          "provider": {
            "@type": "LocalBusiness",
            "@id": "https://feststube.de/#business",
            "name": "Feststube – Zeltvermietung Esslingen",
            "telephone": "+4915901610537",
            "email": "feststube@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Esslingen am Neckar",
              "addressRegion": "Baden-Württemberg",
              "postalCode": "73728",
              "addressCountry": "DE",
            },
          },
          "description":
            "Zeltvermietung in Esslingen und Umgebung: Pagodenzelt, Partyzelt und Eventplan mieten – inkl. professionellem Aufbau und Abbau.",
          "areaServed": [
            { "@type": "City", "name": "Esslingen am Neckar" },
            { "@type": "City", "name": "Stuttgart" },
            { "@type": "City", "name": "Göppingen" },
          ],
          "serviceType": "Zeltvermietung",
          "url": "https://feststube.de/zeltvermietung",
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
                5,0 · Hunderte zufriedene Events
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4"
              >
                Zeltvermietung in{" "}
                <span className="text-primary">Esslingen</span>
                {" "}&amp; Umgebung
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8"
              >
                Pagodenzelt, Partyzelt oder großes Eventzelt – wir liefern, bauen auf und
                kümmern uns um alles. Du feierst einfach.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center md:items-start gap-4"
              >
                <a href="mailto:feststube@gmail.com">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-primary/30"
                  >
                    Angebot anfragen
                  </Button>
                </a>
                <a href="tel:+4915901610537">
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
                {["Aufbau & Abbau inkl.", "bis 200 Gäste", "Ganzjährig", "Festpreis"].map((item) => (
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
                    <Tent className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Professioneller Aufbau</p>
                    <p className="text-sm font-bold text-foreground">in Esslingen & Umgebung</p>
                  </div>
                </motion.div>
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
                  alt="Festliches Partyzelt bei einer Veranstaltung in Esslingen"
                  className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/4]"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ─── Zelt-Typen ───────────────────────────────── */}
        <section className="py-20 md:py-28 bg-muted/40">
          <div className="container max-w-5xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-3"
            >
              Unsere Zeltmodelle
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-muted-foreground text-center mb-12 max-w-xl mx-auto"
            >
              Von der intimen Gartenparty bis zur Großveranstaltung – für jedes Event die
              passende Lösung.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tents.map((tent, i) => (
                <motion.article
                  key={tent.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className="rounded-2xl border border-border/50 bg-card p-7 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{tent.name}</h3>
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                        <Users className="w-3.5 h-3.5" />
                        {tent.guests}
                      </span>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Tent className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tent.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {tent.features.map((f) => (
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

        {/* ─── Bento Features ───────────────────────────── */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-extrabold text-foreground text-center mb-3"
            >
              Warum Feststube Zeltvermietung?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-muted-foreground text-center mb-12"
            >
              Wir machen dein Outdoor-Event stressfrei und unvergesslich.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  icon: Truck,
                  title: "Lieferung & Aufbau",
                  desc: "Pünktliche Lieferung, professioneller Aufbau und Abbau nach der Feier – alles aus einer Hand.",
                  wide: true,
                },
                {
                  icon: Ruler,
                  title: "Individuelle Größen",
                  desc: "Von 15 bis über 200 m² – wir finden immer das passende Zelt.",
                  wide: false,
                },
                {
                  icon: ShieldCheck,
                  title: "Qualität & Sicherheit",
                  desc: "Geprüfte, stabile Zelte aus hochwertigem PVC – TÜV-konform und wetterfest.",
                  wide: false,
                },
                {
                  icon: CheckCircle,
                  title: "Rundum-Sorglos-Paket",
                  desc: "Auf Wunsch inklusive Beleuchtung, Heizung, Bodenbelag und mehr. Wir kümmern uns um alles.",
                  wide: true,
                },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                  className={`group rounded-2xl border border-border/50 bg-card p-7 hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-default${
                    f.wide ? " md:col-span-2" : ""
                  }`}
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
        <section className="py-20 md:py-28 bg-muted/40">
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
                    <h3 className="text-base font-bold text-foreground mb-1">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-background">
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
              Bereit für dein Outdoor-Event?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8 max-w-xl mx-auto"
            >
              Schreib uns oder ruf an – wir erstellen dir innerhalb von 24 Stunden ein
              unverbindliches Angebot für deine Zeltvermietung in Esslingen.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <a href="mailto:feststube@gmail.com">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-primary/30"
                >
                  Angebot per E-Mail
                </Button>
              </a>
              <a href="tel:+4915901610537">
                <Button size="lg" variant="outline" className="rounded-full px-10 py-6 text-lg font-bold">
                  <Phone className="w-5 h-5 mr-2" />
                  Direkt anrufen
                </Button>
              </a>
            </motion.div>
            <p className="mt-6 text-sm text-muted-foreground">
              Oder kombiniere dein Zelt mit unserer{" "}
              <Link to="/" className="text-primary hover:underline font-medium">
                Fotobox
              </Link>{" "}
              oder{" "}
              <Link to="/veranstaltungstechnik" className="text-primary hover:underline font-medium">
                Veranstaltungstechnik
              </Link>{" "}
              – für ein komplettes Event-Paket.
            </p>
          </div>
        </section>

        {/* Regional city links – SEO */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-3">
              Zeltvermietung im Umkreis von Denkendorf
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
              Wir liefern Zelte in einem Radius von 50 km – für alle Städte und Gemeinden rund um Esslingen.
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
                  to={`/zeltvermietung/${c.slug}`}
                  className="px-4 py-2 rounded-full border border-border/60 text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  Zeltvermietung {c.name}
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

export default Zeltvermietung;
