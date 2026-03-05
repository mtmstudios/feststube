import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const cities = [
  { name: "Stuttgart", slug: "stuttgart" },
  { name: "Ulm", slug: "ulm" },
  { name: "Göppingen", slug: "goeppingen" },
  { name: "Esslingen", slug: null },
];

const ServiceAreas = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container max-w-3xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-foreground mb-3"
      >
        Wir bringen die Party zu dir.
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-muted-foreground mb-10"
      >
        Kostenlose oder günstige Lieferung aus Esslingen in deine Region.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-3"
      >
        {cities.map((city) => {
          const content = (
            <>
              <MapPin className="w-4 h-4 shrink-0" />
              Fotobox mieten in {city.name}
            </>
          );

          return city.slug ? (
            <Link
              key={city.name}
              to={`/stadt/${city.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
            >
              {content}
            </Link>
          ) : (
            <span
              key={city.name}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-foreground"
            >
              {content}
            </span>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default ServiceAreas;
