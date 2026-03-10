import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Star } from "lucide-react";
const heroImage = "/fotobox-2.jpg";

const headlineLines = [
  "Die perfekte Fotobox",
  "für dein Event",
  "in Esslingen.",
];

// Snappier: reduced stagger + duration, opacity added for cleaner reveal
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const lineVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.45, ease: [0.33, 1, 0.68, 1] as const },
  },
};

const Hero = () => {
  const scrollToFunnel = () => {
    document.getElementById("booking-funnel")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-20 pb-10 md:pt-40 md:pb-32 bg-background overflow-hidden">
      {/* Static gradient blobs — no continuous JS animation, GPU-friendly */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl opacity-60 hidden sm:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-0 w-[350px] h-[350px] rounded-full bg-primary/8 blur-3xl opacity-50 hidden sm:block"
      />

      <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center md:text-left items-center md:items-start flex flex-col"
        >
          {/* Rating badge */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary rounded-full px-4 py-1.5 text-sm font-semibold mb-5"
          >
            <span className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </span>
            5,0 · 150+ glückliche Events
          </motion.div>

          {/* Line-by-line headline reveal */}
          <motion.h1
            variants={containerVariants}
            className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4"
          >
            {headlineLines.map((line, i) => (
              <div key={i} className="overflow-hidden pb-1">
                <motion.span variants={lineVariants} className="block">
                  {line}
                </motion.span>
              </div>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-base md:text-xl text-muted-foreground max-w-lg mb-7"
          >
            Modernes Design, Studio-Qualität und 100% Spaß. Sichere dir jetzt das Highlight für deine Feier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.65 }}
            className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto"
          >
            {/* Full-width on mobile, auto on desktop */}
            <Button
              onClick={scrollToFunnel}
              size="lg"
              className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-primary/30 active:scale-95 transition-transform"
            >
              Verfügbarkeit prüfen
            </Button>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              Transparente Festpreise ab 249&nbsp;€ – keine versteckten Kosten.
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Image — no parallax/float (eliminates jank on mobile) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="relative"
        >
          {/* Floating badge — desktop only, avoid layout clash on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.75 }}
            className="hidden md:flex absolute -bottom-4 -left-4 z-10 bg-background rounded-2xl border border-border shadow-xl px-5 py-3 items-center gap-3"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Kostenloser Aufbau</p>
              <p className="text-sm font-bold text-foreground">in Esslingen & Umgebung</p>
            </div>
          </motion.div>

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
