import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import {
  Heart,
  CheckCircle,
  Image,
  Music,
  MapPin,
  Hotel,
  Calendar,
  Camera,
  ShieldCheck,
  Star,
  Sparkles,
  Users,
  ChevronDown,
  ArrowRight,
  Mail,
  Utensils,
} from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: CheckCircle,
    title: "RSVP & Zusagen",
    desc: "Gäste sagen direkt digital zu oder ab – keine Rückantwort-Karten, kein Papierchaos. Du siehst alle Antworten in Echtzeit.",
    wide: true,
  },
  {
    icon: Utensils,
    title: "Essensauswahl",
    desc: "Jeder Gast wählt sein Menü online – perfekte Vorbereitung für Caterer und Küche.",
    wide: false,
  },
  {
    icon: Music,
    title: "Songwünsche",
    desc: "Lass deine Gäste Lieblingssongs einreichen und begeistere sie auf der Tanzfläche.",
    wide: false,
  },
  {
    icon: MapPin,
    title: "Location & Anfahrt",
    desc: "Interaktive Karte, Parkplätze und individuelle Wegbeschreibungen direkt auf der Einladung.",
    wide: false,
  },
  {
    icon: Hotel,
    title: "Hotel-Empfehlungen",
    desc: "Komfortabel für Gäste von weiter weg – mit Links zu empfohlenen Hotels in der Nähe.",
    wide: false,
  },
  {
    icon: Calendar,
    title: "Zeitplan / Ablauf",
    desc: "Zeigt euren Hochzeitsablauf übersichtlich – von Standesamt bis Mitternachtssnack.",
    wide: false,
  },
  {
    icon: Camera,
    title: "Foto-Upload durch Gäste",
    desc: "Gäste laden ihre schönsten Momente direkt hoch – eure persönliche Hochzeits-Cloud.",
    wide: false,
  },
  {
    icon: Image,
    title: "Live-Galerie",
    desc: "Alle hochgeladenen Fotos erscheinen in einer moderierten Galerie – in Echtzeit während der Feier.",
    wide: true,
  },
];

const steps = [
  {
    number: "01",
    title: "Infos liefern",
    desc: "Ihr schickt uns eure Hochzeitsdetails, Wünsche, Farben und Inhalte – per E-Mail oder WhatsApp.",
  },
  {
    number: "02",
    title: "Einladung gestalten",
    desc: "Wir bauen eure individuelle digitale Einladungsseite – designed, getextet, fertig für den Versand.",
  },
  {
    number: "03",
    title: "Link versenden",
    desc: "Ihr versendet einfach den Link per WhatsApp, Instagram oder E-Mail an all eure Gäste.",
  },
  {
    number: "04",
    title: "Freude genießen",
    desc: "Gäste melden sich an, laden Fotos hoch und ihr habt alles zentral im Blick – entspannt feiern.",
  },
];

const audiences = [
  { icon: Heart, label: "Brautpaare", desc: "Die perfekte moderne Ergänzung oder Alternative zur klassischen Papiereinladung." },
  { icon: Users, label: "Große Familienfeiern", desc: "Auch für runde Geburtstage, Jubiläen und Familientreffen mit vielen Gästen." },
  { icon: Sparkles, label: "Hochzeitsplaner", desc: "Bietet euren Kunden ein digitales Einladungstool als Premium-Add-on." },
  { icon: MapPin, label: "Event-Locations", desc: "Empfehlt euren Buchenden das perfekte digitale Einladungstool für ihre Feier." },
];

const faq = [
  {
    q: "Wie erhalten die Gäste die Einladung?",
    a: "Ihr bekommt einen persönlichen Link, den ihr ganz einfach per WhatsApp, E-Mail, Instagram oder SMS an eure Gäste weiterleitet. Keine App-Installation nötig – der Link funktioniert direkt im Browser auf jedem Smartphone.",
  },
  {
    q: "Kann ich die Fotos nach der Hochzeit herunterladen?",
    a: "Ja! Alle Fotos, die eure Gäste hochgeladen haben, stehen euch nach der Feier als gesammelter Download bereit – in voller Auflösung, perfekt zum Drucken oder Teilen.",
  },
  {
    q: "Wie lange ist die Einladungsseite aktiv?",
    a: "Standardmäßig bleibt eure Einladungsseite 6 Monate nach der Hochzeit aktiv, sodass ihr und eure Gäste noch in Ruhe die Fotos anschauen können. Auf Wunsch verlängerbar.",
  },
  {
    q: "Können wir das Design anpassen?",
    a: "Ja, ihr gebt uns eure Wunschfarben, Schriften und Stimmung an – wir designen alles passend zu eurem Hochzeitsstil. Minimalistisch, romantisch, verspielt: ihr entscheidet.",
  },
  {
    q: "Was kostet die digitale Einladungskarte?",
    a: "Schreibt uns einfach an – wir erstellen euch ein individuelles Angebot basierend auf eurem Umfang und euren Wünschen. Die meisten Pakete starten ab 149 €.",
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

const DigitaleEinladungskarte = () => {
  useEffect(() => {
    document.title = "Digitale Einladungskarte für Hochzeiten – Feststube";

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

    setMeta(
      "description",
      "Digitale Einladungskarte für eure Hochzeit – mit RSVP, Essensauswahl, Songwünschen, Live-Galerie und Gäste-Foto-Upload. Modern, persönlich, unvergesslich."
    );
    setMeta("og:title", "Digitale Einladungskarte für Hochzeiten – Feststube", true);
    setMeta(
      "og:description",
      "Digitale Einladungskarte für eure Hochzeit – mit RSVP, Essensauswahl, Songwünschen, Live-Galerie und Gäste-Foto-Upload.",
      true
    );

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://feststube.de/digitale-einladungskarte";

    const ldJson = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Digitale Einladungskarte für Hochzeiten",
      description:
        "Individuelle digitale Hochzeitseinladung mit RSVP, Essensauswahl, Songwünschen, Live-Galerie und Gäste-Foto-Upload.",
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
        telephone: "+4915901610537",
        email: "feststube@gmail.com",
      },
      areaServed: "Region Stuttgart",
      serviceType: "Digitale Einladungskarte",
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: "149",
      },
    };

    let script = document.getElementById("ld-json-einladung");
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json-einladung";
      (script as HTMLScriptElement).type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(ldJson);

    window.scrollTo(0, 0);

    return () => {
      document.getElementById("ld-json-einladung")?.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="pt-28 pb-20 md:pt-40 md:pb-32 bg-background overflow-hidden">
          <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center md:items-start text-center md:text-left"
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Neu bei Feststube
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
                Digitale Einladungskarte{" "}
                <span className="text-primary">für eure Hochzeit</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
                Kein Papier, kein Chaos – nur Freude. Eine persönliche digitale Einladungsseite
                mit RSVP, Live-Galerie und allem, was eure Hochzeit unvergesslich macht.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <a href="mailto:feststube@gmail.com">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-primary/25 w-full sm:w-auto"
                  >
                    Jetzt anfragen
                  </Button>
                </a>
                <a href="#funktionen">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-10 py-6 text-lg font-semibold w-full sm:w-auto"
                  >
                    Alle Funktionen
                  </Button>
                </a>
              </div>
              <p className="flex items-center gap-2 text-sm text-muted-foreground mt-5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Individuell gestaltet · Kein technisches Vorwissen nötig
              </p>
            </motion.div>

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-64 md:w-72">
                {/* Glow */}
                <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl scale-110" />
                {/* Phone shell */}
                <div className="relative bg-foreground rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-background rounded-[2.5rem] overflow-hidden">
                    {/* Notch */}
                    <div className="flex justify-center pt-3 pb-1">
                      <div className="w-20 h-1.5 bg-muted rounded-full" />
                    </div>
                    {/* Screen content */}
                    <div className="px-4 pb-6 pt-2 flex flex-col items-center gap-3">
                      {/* Header strip */}
                      <div className="w-full bg-primary/10 rounded-2xl p-3 text-center">
                        <p className="text-xs font-bold text-primary">💍 Sara & Jonas</p>
                        <p className="text-[10px] text-muted-foreground mt-0.5">21. Juni 2026 · Denkendorf</p>
                      </div>
                      {/* Cover image placeholder */}
                      <div className="w-full h-28 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                        <Heart className="w-10 h-10 text-primary/40" />
                      </div>
                      {/* RSVP button */}
                      <div className="w-full bg-primary rounded-full py-2 text-center">
                        <span className="text-xs font-bold text-primary-foreground">✓ Ich komme!</span>
                      </div>
                      {/* Mini features */}
                      <div className="grid grid-cols-3 gap-1.5 w-full">
                        {[
                          { icon: "🍽️", label: "Menü" },
                          { icon: "🎵", label: "Songs" },
                          { icon: "📸", label: "Fotos" },
                        ].map((item) => (
                          <div key={item.label} className="bg-muted/50 rounded-xl p-2 text-center">
                            <p className="text-base">{item.icon}</p>
                            <p className="text-[9px] text-muted-foreground font-medium">{item.label}</p>
                          </div>
                        ))}
                      </div>
                      {/* Live gallery preview */}
                      <div className="w-full">
                        <p className="text-[9px] font-semibold text-foreground mb-1">Live-Galerie · 24 Fotos</p>
                        <div className="grid grid-cols-3 gap-1">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div
                              key={i}
                              className="aspect-square rounded-lg bg-gradient-to-br from-primary/15 to-primary/5"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -right-4 top-12 bg-card border border-border rounded-2xl px-3 py-2 shadow-lg">
                  <p className="text-xs font-bold text-foreground">47 Zusagen</p>
                  <p className="text-[10px] text-muted-foreground">12 ausstehend</p>
                </div>
                <div className="absolute -left-4 bottom-16 bg-card border border-border rounded-2xl px-3 py-2 shadow-lg">
                  <p className="text-xs font-bold text-foreground">🎵 23 Songs</p>
                  <p className="text-[10px] text-muted-foreground">gewünscht</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="py-12 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "100%", label: "Digital & papierlos" },
                { value: "∞", label: "Gäste-Fotos" },
                { value: "48h", label: "Lieferzeit" },
                { value: "Ab 149 €", label: "Einmaliger Festpreis" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl md:text-4xl font-extrabold text-primary">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRODUKT-ERKLÄRUNG ── */}
        <section className="py-20 md:py-28">
          <div className="container max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                Was ist das?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Mehr als eine Einladung –{" "}
                <span className="text-primary">ein Erlebnis für eure Gäste</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto mb-14">
                Eure digitale Einladung ist eine persönliche Webseite, die ihr per Link teilt.
                Gäste können zusagen, ihr Menü wählen, Fotos hochladen und den Ablauf im Blick behalten –
                alles an einem Ort, ohne App, ohne Anmeldung.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Sparkles,
                  title: "Individuell gestaltet",
                  desc: "Euer Name, eure Farben, euer Stil. Wir bauen die Seite nach euren Wünschen – nicht von der Stange.",
                },
                {
                  icon: Users,
                  title: "Für alle Gäste",
                  desc: "Kein Download, kein Account. Der Link öffnet sofort auf jedem Smartphone – auch für ältere Gäste kinderleicht.",
                },
                {
                  icon: ShieldCheck,
                  title: "Privat & sicher",
                  desc: "Nur Personen mit dem Link haben Zugang. Eure Hochzeit, eure Kontrolle.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border/50 rounded-2xl p-6 text-left"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FUNKTIONEN (Bento) ── */}
        <section id="funktionen" className="py-20 md:py-28 bg-muted/30">
          <div className="container max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                Funktionen
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Alles, was eure Hochzeit braucht
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className={`bg-card border border-border/50 rounded-2xl p-6 flex flex-col gap-3 ${
                    f.wide ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Bonus cards */}
              {[
                { icon: ShieldCheck, title: "Moderierte Galerie", desc: "Ihr entscheidet, welche Fotos öffentlich sichtbar sind – Kontrolle bleibt bei euch." },
                { icon: Users, title: "Trauzeugen-Bereich", desc: "Kontaktdaten der Trauzeugen & Ablauf-Infos für alle Beteiligten gut sichtbar hinterlegt." },
              ].map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (features.length + i) * 0.07 }}
                  className="bg-card border border-border/50 rounded-2xl p-6 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SO FUNKTIONIERT'S ── */}
        <section className="py-20 md:py-28">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-14"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                Der Ablauf
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                In 4 Schritten zur digitalen Einladung
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 bg-card border border-border/50 rounded-2xl p-6"
                >
                  <span className="text-4xl font-extrabold text-primary/20 leading-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── EMOTIONALER NUTZEN ── */}
        <section className="py-20 md:py-28 bg-primary/5 border-y border-border/50">
          <div className="container max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Heart className="w-10 h-10 text-primary mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
                Euer schönster Tag verdient mehr als Papier
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Stellt euch vor: Jeder Gast öffnet auf dem Weg zur Feier noch einmal eure Einladung,
                lädt ein Foto vom Einzug hoch – und ihr seht die Galerie in Echtzeit wachsen.
                Kein Ausdrucken, kein Verlieren, kein Vergessen. Nur ein Gefühl, das bleibt.
              </p>
              <motion.blockquote
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                className="bg-card rounded-2xl border border-border/50 p-6 md:p-8 text-left"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 italic">
                  „Die digitale Einladung war das Gesprächsthema Nr. 1 auf unserer Hochzeit.
                  Unsere Gäste haben über 200 Fotos hochgeladen – wir hatten eine riesige Galerie,
                  ohne selbst einen Fotografen beauftragen zu müssen."
                </p>
                <footer className="text-sm font-semibold text-muted-foreground">
                  – Lisa & Marco, Hochzeit in Esslingen, August 2025
                </footer>
              </motion.blockquote>
            </motion.div>
          </div>
        </section>

        {/* ── LIVE-GALERIE / FOTO-UPLOAD ── */}
        <section className="py-20 md:py-28">
          <div className="container max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Visual */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="font-bold text-foreground text-sm">Live-Galerie</p>
                    <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">
                      🔴 Live
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                      >
                        {i === 8 && (
                          <Camera className="w-5 h-5 text-primary/40" />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 bg-background rounded-xl p-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Camera className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-foreground">Foto hochladen</p>
                      <p className="text-[10px] text-muted-foreground">Direkt aus der Kamerarolle</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                  Live-Galerie
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                  Jeder Gast ist Fotograf
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Mit dem integrierten Foto-Upload können eure Gäste direkt von ihrem Smartphone
                  Bilder hochladen – und sofort in der Live-Galerie auf der Einladungsseite sehen.
                  Kein geteiltes Album, kein WhatsApp-Chaos. Alles an einem Ort.
                </p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Upload direkt vom Smartphone – ohne App",
                    "Live-Galerie während der Feier sichtbar",
                    "Moderationsfreigabe durch euch als Admin",
                    "Alle Fotos nach der Hochzeit downloadbar",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── FÜR WEN ── */}
        <section className="py-20 md:py-28 bg-muted/30">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-4">
                Für wen?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                Perfekt für jeden Anlass
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {audiences.map((a, i) => (
                <motion.div
                  key={a.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-card border border-border/50 rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <a.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{a.label}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 md:py-28">
          <div className="container max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">
                Häufige Fragen
              </h2>
            </motion.div>
            <div className="bg-muted/30 rounded-2xl px-6">
              {faq.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="py-20 bg-primary/5 border-y border-border/50">
          <div className="container max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                Bereit für eure digitale Einladungskarte?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Schreibt uns eine kurze Nachricht – wir melden uns innerhalb von 24 Stunden und
                besprechen gemeinsam, wie eure Einladung aussehen soll.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:feststube@gmail.com">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 font-bold shadow-lg shadow-primary/25"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Jetzt digitale Einladungskarte anfragen
                  </Button>
                </a>
              </div>
              <p className="text-xs text-muted-foreground mt-6">
                Ab 149 € · Lieferung in 48h · Individuell gestaltet
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      
    </div>
  );
};

export default DigitaleEinladungskarte;
