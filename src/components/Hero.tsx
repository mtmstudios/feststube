import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Star } from "lucide-react";
import heroImage from "@/assets/hero-photobooth.jpg";

const Hero = () => {
  const scrollToFunnel = () => {
    document.getElementById("booking-funnel")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 bg-background overflow-hidden">
      {/* Decorative gradient blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/8 blur-3xl"
      />

      <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left items-center md:items-start flex flex-col"
        >
          {/* Social proof badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-6">
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </span>
            5,0 · 150+ glückliche Events
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
            Die perfekte Fotobox für dein Event in Esslingen.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8">
            Modernes Design, Studio-Qualität und 100% Spaß. Sichere dir jetzt das Highlight für deine Feier.
          </p>
          <Button
            onClick={scrollToFunnel}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            Verfügbarkeit prüfen
          </Button>
          <p className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            Transparente Festpreise ab 249&nbsp;€ – keine versteckten Kosten.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          {/* Floating badge on image */}
          <div className="absolute -bottom-4 -left-4 z-10 bg-background rounded-2xl border border-border shadow-xl px-5 py-3 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Kostenloser Aufbau</p>
              <p className="text-sm font-bold text-foreground">in Esslingen & Umgebung</p>
            </div>
          </div>

          <img
            src={heroImage}
            alt="Fröhliche Gruppe in der Fotobox bei einem Event in Esslingen"
            className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/4]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
