import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Star } from "lucide-react";
import heroImage from "@/assets/hero-photobooth.jpg";

const headlineLines = [
  "Die perfekte Fotobox",
  "für dein Event",
  "in Esslingen.",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const lineVariants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.65, ease: [0.33, 1, 0.68, 1] as const },
  },
};

const Hero = () => {
  const scrollToFunnel = () => {
    document.getElementById("booking-funnel")?.scrollIntoView({ behavior: "smooth" });
  };

  const { scrollY } = useScroll();
  const imageParallax = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 bg-background overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -20, 0], y: [0, 15, 0], scale: [1, 0.95, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center md:text-left items-center md:items-start flex flex-col"
        >
          {/* Rating badge */}
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
            5,0 · 150+ glückliche Events
          </motion.div>

          {/* Masked line-by-line headline reveal */}
          <motion.h1
            variants={containerVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4"
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
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-8"
          >
            Modernes Design, Studio-Qualität und 100% Spaß. Sichere dir jetzt das Highlight für deine Feier.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.05 }}
            className="flex flex-col items-center md:items-start gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                onClick={scrollToFunnel}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-primary/30"
              >
                Verfügbarkeit prüfen
              </Button>
            </motion.div>
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              Transparente Festpreise ab 249&nbsp;€ – keine versteckten Kosten.
            </p>
          </motion.div>
        </motion.div>

        {/* Right: Image with parallax + float */}
        <motion.div
          style={{ y: imageParallax }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Floating info badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -bottom-4 -left-4 z-10 bg-background rounded-2xl border border-border shadow-xl px-5 py-3 flex items-center gap-3"
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
