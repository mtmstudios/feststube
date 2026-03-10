import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const cities = [
  { name: "Esslingen", slug: null },
  { name: "Denkendorf", slug: "denkendorf" },
  { name: "Stuttgart", slug: "stuttgart" },
  { name: "Göppingen", slug: "goeppingen" },
  { name: "Ostfildern", slug: "ostfildern" },
  { name: "Plochingen", slug: "plochingen" },
  { name: "Filderstadt", slug: "filderstadt" },
  { name: "Leinfelden-Echterdingen", slug: "leinfelden-echterdingen" },
  { name: "Wendlingen am Neckar", slug: "wendlingen" },
  { name: "Wernau", slug: "wernau" },
  { name: "Köngen", slug: "koegen" },
  { name: "Nürtingen", slug: "nuertingen" },
  { name: "Kirchheim unter Teck", slug: "kirchheim" },
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
  { name: "Ulm", slug: "ulm" },
];

const ServiceAreas = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container max-w-4xl text-center">
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
        Fotobox-Lieferung im 50-km-Umkreis um Denkendorf – für alle Städte und Gemeinden in der Region Stuttgart.
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
              Fotobox mieten {city.name}
            </>
          );

          return city.slug ? (
            <Link
              key={city.name}
              to={`/fotobox/${city.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
            >
              {content}
            </Link>
          ) : (
            <span
              key={city.name}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-foreground"
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
