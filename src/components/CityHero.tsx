import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-photobooth.jpg";
import type { CityData } from "@/data/cityData";

interface CityHeroProps {
  city: CityData;
}

const CityHero = ({ city }: CityHeroProps) => {
  const scrollToFunnel = () => {
    document.getElementById("booking-funnel")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-20 pb-10 md:pt-40 md:pb-32 bg-background">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center md:text-left items-center md:items-start flex flex-col"
        >
          <h1 className="text-[26px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight mb-4">
            {city.heroH1}
          </h1>
          <p className="text-base md:text-xl text-muted-foreground max-w-lg mb-8">
            {city.heroSubtext}
          </p>
          <Button
            onClick={scrollToFunnel}
            size="lg"
            className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/80 active:scale-95 transition-transform rounded-full px-10 py-6 text-base md:text-lg font-bold shadow-lg shadow-primary/25"
          >
            Verfügbarkeit prüfen
          </Button>
          <p className="flex items-center gap-2 text-sm text-muted-foreground mt-4">
            <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
            Transparente Festpreise ab 249&nbsp;€ – keine versteckten Kosten.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <img
            src={heroImage}
            alt={`Fotobox für Events in ${city.name}`}
            className="w-full rounded-2xl shadow-2xl object-cover aspect-[3/4]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CityHero;
