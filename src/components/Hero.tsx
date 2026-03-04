import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import feststubeLogo from "@/assets/feststube-logo.avif";

const Hero = () => {
  const scrollToFunnel = () => {
    document.getElementById("booking-funnel")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="container flex flex-col items-center text-center gap-8">
        <motion.img
          src={feststubeLogo}
          alt="Feststube – Fotobox für Events in Esslingen"
          className="w-48 h-48 md:w-64 md:h-64 object-contain drop-shadow-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
            Die perfekte Fotobox für dein Event in Esslingen.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Modernes Design, Studio-Qualität und 100% Spaß. Sichere dir jetzt das Highlight für deine Feier.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            onClick={scrollToFunnel}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/80 rounded-full px-10 py-6 text-lg font-bold shadow-lg shadow-primary/25"
          >
            Verfügbarkeit prüfen
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
