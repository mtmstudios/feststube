import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import type { CityData } from "@/data/cityData";

interface LocalSEOBlockProps {
  city: CityData;
}

const LocalSEOBlock = ({ city }: LocalSEOBlockProps) => (
  <section className="py-20 md:py-28 bg-muted/50">
    <div className="container max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Lokal für {city.name}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
          {city.seoHeadline}
        </h2>
        <p className="text-muted-foreground leading-relaxed text-lg mb-10">
          {city.seoBody}
        </p>
      </motion.div>

      <motion.blockquote
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
        className="bg-background rounded-2xl border border-border/50 p-6 md:p-8"
      >
        <div className="flex gap-0.5 mb-3">
          {Array.from({ length: 5 }).map((_, j) => (
            <Star key={j} className="w-4 h-4 fill-primary text-primary" />
          ))}
        </div>
        <p className="text-foreground leading-relaxed mb-4 italic">
          „{city.testimonialText}"
        </p>
        <footer className="text-sm font-semibold text-muted-foreground">
          – {city.testimonialAuthor}
        </footer>
      </motion.blockquote>
    </div>
  </section>
);

export default LocalSEOBlock;
